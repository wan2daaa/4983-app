import * as styles from './SigninButton.styles';
import {Signin} from '@/apis/auth/signin/SigninApi';
import {TouchableOpacity} from 'react-native';

const SigninButton = ({
  navigation,
  studentId,
  password,
  setLoginError,
  setErrorMsg,
}) => {
  const handleLogin = async () => {
    try {
      await Signin(studentId, password);
      navigation.navigate('FindPassword');
    } catch (error) {
      setLoginError(true);
      setErrorMsg(error.response.data.message);
    }
  };

  return (
    <TouchableOpacity onPress={handleLogin}>
      <styles.SigninButton>
        <styles.SigninButtonText>로그인</styles.SigninButtonText>
      </styles.SigninButton>
    </TouchableOpacity>
  );
};

export default SigninButton;
