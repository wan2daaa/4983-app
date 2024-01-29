import {CollegeLayout} from '@components/sell/college/layout/college-layout';
import {useRecoilState} from 'recoil';
import {recoilSellCollege} from '@/recoil/atoms/SignupAtoms';
import {useState} from 'react';

export const College = ({navigation, route}) => {
  const [_, setSellCollege] = useRecoilState(recoilSellCollege);

  const [isSell] = useState(route.params.isSell);
  const [usedBookId] = useState(route.params.usedBookId);

  return (
    <CollegeLayout
      navigation={navigation}
      setSellCollege={setSellCollege}
      isSell={isSell}
      usedBookId={usedBookId}
    />
  );
};
