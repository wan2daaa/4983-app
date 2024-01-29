import {useEffect, useState} from 'react';
import {fetchBookList} from '@/apis/home/HomeApi';
import HomeLayout from '@components/home/layout/home-layout';
import {Categories} from '@data/categories';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';

const Home = ({navigation}) => {
  const [isFastTradeChecked, setIsFastTradeChecked] = useState(false);
  const [bookListData, setBookListData] = useState([]);

  const [filterOptions, setFilterOptions] = useState([]);

  const [paramCollege, setParamCollege] = useState('');
  const [paramDepartment, setParamDepartment] = useState('');

  const isFocused = useIsFocused();

  useEffect(() => {
    fetchBookList(isFastTradeChecked, paramCollege, paramDepartment)
      .then(res => {
        setBookListData(res);
      })
      .catch(error => {
        console.log('이거에러', error);
      });
  }, [isFastTradeChecked, paramCollege, paramDepartment, isFocused]);

  useEffect(() => {
    let collegeIdList = [];
    let departmentIdList = [];

    let asyncStorageCollegeIdList = '';
    let asyncStorageDepartmentIdList = '';

    setFilterOptions([]);

    AsyncStorage.getItem('category-college')
      .then(college => {
        asyncStorageCollegeIdList = college;
        collegeIdList = JSON.parse(asyncStorageCollegeIdList);
      })
      .then(() => {
        AsyncStorage.getItem('category-department')
          .then(department => {
            asyncStorageDepartmentIdList = department;
            departmentIdList = JSON.parse(asyncStorageDepartmentIdList);
          })
          .then(() => {
            const newFilterOptions = [...filterOptions];

            if (collegeIdList) {
              Categories.forEach(({id, name, value}) => {
                if (
                  collegeIdList.includes(id) &&
                  !newFilterOptions.some(option => option.key === id)
                ) {
                  newFilterOptions.push({
                    key: id,
                    filter: name,
                    param: value,
                  });
                }
              });
            }

            if (departmentIdList) {
              Categories.forEach(category => {
                category.children.forEach(({id, name, value}) => {
                  if (
                    departmentIdList.includes(id) &&
                    !newFilterOptions.some(option => option.key === id)
                  ) {
                    newFilterOptions.push({
                      key: id,
                      filter: name,
                      param: value,
                    });
                  }
                });
              });
            }

            newFilterOptions.sort((a, b) => a.key - b.key);

            setFilterOptions(newFilterOptions);
          });
      });
    if (asyncStorageCollegeIdList) {
      collegeIdList = JSON.parse(asyncStorageCollegeIdList);
    }

    // let asyncStorageDepartmentIdList = '';
    AsyncStorage.getItem('category-department').then(department => {
      console.log('department', department);
      asyncStorageDepartmentIdList = department;
      departmentIdList = JSON.parse(asyncStorageDepartmentIdList);
    });

    if (asyncStorageDepartmentIdList) {
      departmentIdList = JSON.parse(asyncStorageDepartmentIdList);
    }

    const newFilterOptions = [...filterOptions];

    Categories.forEach(({id, name, value}) => {
      if (
        collegeIdList.includes(id) &&
        !newFilterOptions.some(option => option.key === id)
      ) {
        newFilterOptions.push({
          key: id,
          filter: name,
          param: value,
        });
      }
    });

    Categories.forEach(category => {
      category.children.forEach(({id, name, value}) => {
        if (
          departmentIdList.includes(id) &&
          !newFilterOptions.some(option => option.key === id)
        ) {
          newFilterOptions.push({
            key: id,
            filter: name,
            param: value,
          });
        }
      });
    });
    setFilterOptions(newFilterOptions);
  }, [isFocused]);

  return (
    <HomeLayout
      isFastTradeChecked={isFastTradeChecked}
      setIsFastTradeChecked={setIsFastTradeChecked}
      bookListData={bookListData}
      filterOptions={filterOptions}
      setParamCollege={setParamCollege}
      setParamDepartment={setParamDepartment}
      navigation={navigation}
    />
  );
};

export default Home;
