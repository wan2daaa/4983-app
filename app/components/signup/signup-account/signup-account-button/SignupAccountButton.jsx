import * as styles from './SignupAccountButton.styles';
import {TouchableOpacity} from 'react-native';

const SignupAccountButton = ({navigation}) => {
  return (
    <styles.ButtonBox>
      <TouchableOpacity onPress={() => navigation.navigate('SignupCollege')}>
        <styles.ButtonText>다음</styles.ButtonText>
      </TouchableOpacity>
    </styles.ButtonBox>
  );
};

export default SignupAccountButton;
