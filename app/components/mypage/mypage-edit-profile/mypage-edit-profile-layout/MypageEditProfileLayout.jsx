import {ScrollView, TouchableWithoutFeedback} from 'react-native';
import * as styles from './MypageEditProfileLayout.styles';
import {useLayoutEffect} from 'react';
import MypageEditNickname from '@components/mypage/mypage-edit-profile/mypage-edit-nickname/MypageEditNickname';
import MypageEditAccount from '@components/mypage/mypage-edit-profile/mypage-edit-account/MypageEditAccount';
import MypageEditPhone from '@components/mypage/mypage-edit-profile/mypage-edit-phone/MypageEditPhone';
import MypageEditCertification from '@components/mypage/mypage-edit-profile/mypage-edit-certification/MypageEditCertification';

const MypageEditProfileLayout = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <styles.EditButton>
          <styles.EditButtonText>수정하기</styles.EditButtonText>
        </styles.EditButton>
      ),
    });
  }, [navigation]);

  return (
    <styles.Container>
      <TouchableWithoutFeedback>
        <ScrollView>
          <styles.ProfileBox>
            <styles.ProfileImage />
            <styles.ProfileName>갱쥬당당</styles.ProfileName>
          </styles.ProfileBox>
          <MypageEditNickname />
          <MypageEditAccount />
          <MypageEditPhone />
          <MypageEditCertification />
        </ScrollView>
      </TouchableWithoutFeedback>
    </styles.Container>
  );
};

export default MypageEditProfileLayout;
