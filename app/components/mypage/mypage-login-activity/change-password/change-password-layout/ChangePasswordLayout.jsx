import {ScrollView, TouchableWithoutFeedback} from 'react-native';
import * as styles from './ChangePasswordLayout.styles';
import ChangePasswordInput from '@components/mypage/mypage-login-activity/change-password/change-password-input/ChangePasswordInput';
import ChangePasswordButton from '@components/mypage/mypage-login-activity/change-password/change-password-button/ChangePasswordButton';

const ChangePasswordLayout = ({navigation}) => {
  return (
    <styles.Container>
      <TouchableWithoutFeedback>
        <ScrollView>
          <styles.Title>
            비밀번호를 <styles.TitleColor>재설정</styles.TitleColor>해주세요.
          </styles.Title>
          <ChangePasswordInput />
        </ScrollView>
      </TouchableWithoutFeedback>
      <ChangePasswordButton />
    </styles.Container>
  );
};

export default ChangePasswordLayout;
