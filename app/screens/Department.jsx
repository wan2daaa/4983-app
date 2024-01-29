import {Categories} from '@data/categories';
import {DepartmentLayout} from '@components/sell/department/layout/department-layout';
import {useRecoilState} from 'recoil';
import {recoilSellDepartment} from '@/recoil/atoms/SignupAtoms';
import {useState} from 'react';

export const Department = ({navigation, route}) => {
  const departments = Categories.filter(
    category => category.id === route.params.selectedCollegeId,
  )[0].children;

  const [isSell] = useState(route.params.isSell);
  const [usedBookId] = useState(route.params.usedBookId);

  const [sellDepartment, setSellDepartment] =
    useRecoilState(recoilSellDepartment);

  return (
    <DepartmentLayout
      navigation={navigation}
      departments={departments}
      setSellDepartment={setSellDepartment}
      isSell={isSell}
      usedBookId={usedBookId}
    />
  );
};
