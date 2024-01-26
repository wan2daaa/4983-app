import {Categories} from '@data/categories';
import {SellDepartmentLayout} from '@components/sell/sell-department/layout/sell-department-layout';
import {useRecoilState} from 'recoil';
import {recoilSellDepartment} from '@/recoil/atoms/SignupAtoms';

export const SellDepartment = ({navigation, route}) => {
  const departments = Categories.filter(
    category => category.id === route.params.selectedCollegeId,
  )[0].children;

  const [sellDepartment, setSellDepartment] =
    useRecoilState(recoilSellDepartment);

  return (
    <SellDepartmentLayout
      navigation={navigation}
      departments={departments}
      setSellDepartment={setSellDepartment}
    />
  );
};
