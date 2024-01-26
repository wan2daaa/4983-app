import {SellCollegeLayout} from '@components/sell/sell-college/layout/sell-college-layout';
import {useRecoilState} from 'recoil';
import {recoilSellCollege} from '@/recoil/atoms/SignupAtoms';

export const SellCollege = ({navigation}) => {
  const [sellCollege, setSellCollege] = useRecoilState(recoilSellCollege);

  return (
    <SellCollegeLayout
      navigation={navigation}
      setSellCollege={setSellCollege}
    />
  );
};
