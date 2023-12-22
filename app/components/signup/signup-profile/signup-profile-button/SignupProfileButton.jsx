import {TouchableOpacity} from 'react-native';
import * as styles from './SignupProfileButton.styles';

const SignupProfileButton = ({navigation}) => {
  return (
    <styles.ButtonBox>
      <TouchableOpacity onPress={() => navigation.navigate('SignupPhone')}>
        <styles.ButtonText>다음</styles.ButtonText>
      </TouchableOpacity>
    </styles.ButtonBox>
  );
};

export default SignupProfileButton;
