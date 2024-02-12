import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import * as styles from './ChangePasswordLayout.styles';
import ChangePasswordInput from '@components/mypage/mypage-login-activity/change-password/change-password-input/ChangePasswordInput';
import ChangePasswordButton from '@components/mypage/mypage-login-activity/change-password/change-password-button/ChangePasswordButton';
import {useEffect, useState} from 'react';

const ChangePasswordLayout = ({navigation}) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isPasswordCheck, setIsPasswordCheck] = useState(false);
  const [isNewPasswordCheck, setIsNewPasswordCheck] = useState(false);
  const [isCheckPasswordCheck, setIsCheckPasswordCheck] = useState(false);
  const [newPasswords, setNewPasswords] = useState('');

  useEffect(() => {
    if (isPasswordCheck && isNewPasswordCheck && isCheckPasswordCheck) {
      setIsClicked(true);
    }
  }, [isPasswordCheck, isNewPasswordCheck, isCheckPasswordCheck]);

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <styles.Container>
        <TouchableWithoutFeedback>
          <ScrollView>
            <styles.Title>
              비밀번호를 <styles.TitleColor>재설정</styles.TitleColor>해주세요.
            </styles.Title>
            <ChangePasswordInput
              setIsPasswordCheck={setIsPasswordCheck}
              setIsNewPasswordCheck={setIsNewPasswordCheck}
              setIsCheckPasswordCheck={setIsCheckPasswordCheck}
              newPasswords={newPasswords}
              setNewPasswords={setNewPasswords}
            />
          </ScrollView>
        </TouchableWithoutFeedback>
        <ChangePasswordButton
          navigation={navigation}
          isClicked={isClicked}
          newPasswords={newPasswords}
        />
      </styles.Container>
    </KeyboardAvoidingView>
  );
};

export default ChangePasswordLayout;
