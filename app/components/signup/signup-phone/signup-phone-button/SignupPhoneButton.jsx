import {TouchableOpacity} from 'react-native';
import * as styles from './SignupPhoneButton.styles';

const SignupPhoneButton = ({navigation}) => {
  return (
    <styles.ButtonBox>
      <TouchableOpacity onPress={() => navigation.navigate('SignupAccount')}>
        <styles.ButtonText>다음</styles.ButtonText>
      </TouchableOpacity>
    </styles.ButtonBox>
  );
};

export default SignupPhoneButton;
