import {TouchableOpacity} from 'react-native';
import * as styles from './SignupProfileButton.styles';

const SignupProfileButton = ({handleNextPage, canGoNextPage}) => {
  return (
    <styles.ButtonBox canGoNextPage={canGoNextPage}>
      <TouchableOpacity
        onPress={handleNextPage}
        hitSlop={{left: 40, right: 40, top: 40, bottom: 40}}>
        <styles.ButtonText canGoNextPage={canGoNextPage}>
          다음
        </styles.ButtonText>
      </TouchableOpacity>
    </styles.ButtonBox>
  );
};

export default SignupProfileButton;
