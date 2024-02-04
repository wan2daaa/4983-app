import {useEffect, useState} from 'react';
import {fetchBookList} from '@/apis/home/HomeApi';
import HomeLayout from '@components/home/layout/home-layout';
import {Categories} from '@data/categories';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
import {PermissionsAndroid, Platform} from 'react-native';
import {BASE_API} from '@/apis/common/CommonApi';
import messaging from '@react-native-firebase/messaging';
import {mainBannerList} from '@/apis/notice/NoticeApi';
import {getWithdraw} from '@/apis/auth/member/MemberApi';

const Home = ({navigation}) => {
  const [isFastTradeChecked, setIsFastTradeChecked] = useState(false);
  const [bookListData, setBookListData] = useState([]);

  const [filterOptions, setFilterOptions] = useState([]);

  const [paramCollege, setParamCollege] = useState('');
  const [paramDepartment, setParamDepartment] = useState('');

  const [mainBannerData, setMainBannerData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isFocused = useIsFocused();

  useEffect(() => {
    const requestUserPermission = async () => {
      if (Platform.OS === 'android') {
        PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        );
      }

      const authStatus = await messaging().requestPermission();
      console.log('Authorization status', authStatus);
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        return getToken();
      }
    };

    const getToken = async () => {
      const fcmToken = await messaging().getToken();
      console.log('디바이스 토큰값: ', fcmToken);

      BASE_API.post('/api/v1/fcm', {
        token: fcmToken,
      }).then(() => {
        console.log('success');
      });
    };

    requestUserPermission();
  }, []);

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
    const fetchData = async () => {
      try {
        const res = await mainBannerList();
        console.log('mainBannerData', res);
        setMainBannerData(res);
      } catch (error) {}
    };

    fetchData();
  }, [isFocused]);

  useEffect(() => {
    getWithdraw()
      .then(res => {
        setIsModalOpen(res);
      })
      .catch(error => {
        console.log('error', error);
      });
  }, [isFocused]);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    navigation.navigate('홈');
    setIsModalOpen(false);
  };

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
      mainBannerData={mainBannerData}
      isModalOpen={isModalOpen}
      handleModalOpen={handleModalOpen}
      handleModalClose={handleModalClose}
    />
  );
};

export default Home;
