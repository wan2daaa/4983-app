import SignupDepartmentLayout from '@components/signup/signup-department/signup-department-layout/SignupDepartmentLayout';
import {useEffect, useState} from 'react';
import {Categories} from '@data/categories';
import {useRecoilState} from 'recoil';
import {recoilDepartment} from '@/recoil/atoms/SignupAtoms';

const SignupDepartment = ({navigation, route}) => {
  const [selectedDepartmentId, setSelectedDepartmentId] = useState(-1);

  const departments = Categories.filter(
    category => category.id === route.params.selectedCollegeId,
  )[0].children;

  const [selectedDepartmentValue, setSelectedDepartmentValue] =
    useRecoilState(recoilDepartment);

  useEffect(() => {
    if (selectedDepartmentId === -1) return;

    let departmentValue = '';

    Categories.map(category => {
      category.children.map(department => {
        if (department.id === selectedDepartmentId) {
          departmentValue = department.value;
        }
      });
    });

    console.log('departmentValue: ', departmentValue);

    setSelectedDepartmentValue(departmentValue);
  }, [selectedDepartmentId]);

  return (
    <SignupDepartmentLayout
      navigation={navigation}
      selectedDepartmentId={selectedDepartmentId}
      setSelectedDepartmentId={setSelectedDepartmentId}
      departments={departments}
    />
  );
};

export default SignupDepartment;
