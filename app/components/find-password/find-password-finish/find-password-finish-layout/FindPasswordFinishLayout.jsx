import {View, Text, TouchableOpacity} from 'react-native';
import * as styles from './FindPasswordFinishLayout.styles';
import FinishIcon from '@assets/images/find-password/FinishIcon.svg';

const FindPasswordFinishLayout = ({navigation}) => {
  return (
    <styles.Container>
      <styles.ImageBox>
        <FinishIcon width={105} height={105} />
      </styles.ImageBox>
      <styles.TitleBold>비밀번호 변경이 완료되었습니다!</styles.TitleBold>
      <styles.TiltleRegular>다시 로그인을 해주세요.</styles.TiltleRegular>
      <styles.ButtonBox>
        <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
          <styles.ButtonText>로그인 하러 가기</styles.ButtonText>
        </TouchableOpacity>
      </styles.ButtonBox>
    </styles.Container>
  );
};

export default FindPasswordFinishLayout;
