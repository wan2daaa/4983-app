import * as styles from './SignupAccountButton.styles';
import {TouchableOpacity} from 'react-native';

const SignupAccountButton = ({handleNextPage, isAccountEntered}) => {
  return (
    <styles.ButtonBox isAccountEntered={isAccountEntered}>
      <TouchableOpacity
        hitSlop={{top: 40, bottom: 40, left: 40, right: 40}}
        disabled={!isAccountEntered}
        onPress={handleNextPage}>
        <styles.ButtonText isAccountEntered={isAccountEntered}>
          다음
        </styles.ButtonText>
      </TouchableOpacity>
    </styles.ButtonBox>
  );
};

export default SignupAccountButton;
