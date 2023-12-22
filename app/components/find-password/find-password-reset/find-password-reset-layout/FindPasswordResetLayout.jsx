import {ScrollView, TouchableWithoutFeedback} from 'react-native';
import * as styles from './FindPasswordResetLayout.styles';
import FindPasswordResetInput from '@components/find-password/find-password-reset/find-password-reset-input/FindPasswordResetInput';
import FindPasswordResetButton from '@components/find-password/find-password-reset/find-password-reset-button/FindPasswordResetButton';
import {useState} from 'react';

const FindPasswordResetLayout = ({navigation}) => {
  const [newPassword, setNewPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [verifySuccess, setVerifySuccess] = useState(false);

  return (
    <styles.Container>
      <TouchableWithoutFeedback>
        <ScrollView>
          <styles.Title>
            비밀번호를 <styles.TitleBold>재설정</styles.TitleBold>해주세요.
          </styles.Title>
          <FindPasswordResetInput
            newPassword={newPassword}
            setNewPassword={setNewPassword}
            verifyPassword={verifyPassword}
            setVerifyPassword={setVerifyPassword}
            setVerifySuccess={setVerifySuccess}
          />
        </ScrollView>
      </TouchableWithoutFeedback>
      <FindPasswordResetButton
        navigation={navigation}
        newPassword={newPassword}
        verifyPassword={verifyPassword}
        verifySuccess={verifySuccess}
      />
    </styles.Container>
  );
};

export default FindPasswordResetLayout;
