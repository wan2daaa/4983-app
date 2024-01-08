import {TouchableOpacity} from 'react-native';
import * as styles from './SignupProfileButton.styles';

const SignupProfileButton = ({handleNextPage, canGoNextPage}) => {
  return (
    <styles.ButtonBox canGoNextPage={canGoNextPage}>
      <TouchableOpacity
        onPress={handleNextPage}
        hitSlop={{left: 20, right: 20, top: 10, bottom: 10}}>
        <styles.ButtonText canGoNextPage={canGoNextPage}>
          다음
        </styles.ButtonText>
      </TouchableOpacity>
    </styles.ButtonBox>
  );
};

export default SignupProfileButton;
