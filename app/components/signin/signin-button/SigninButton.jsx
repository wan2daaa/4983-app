import * as styles from './SigninButton.styles';
import {TouchableOpacity} from 'react-native';

const SigninButton = ({handleLogin}) => {
  return (
    <TouchableOpacity onPress={handleLogin}>
      <styles.SigninButton>
        <styles.SigninButtonText>로그인</styles.SigninButtonText>
      </styles.SigninButton>
    </TouchableOpacity>
  );
};

export default SigninButton;
