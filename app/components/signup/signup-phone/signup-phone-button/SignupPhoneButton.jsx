import {TouchableOpacity} from 'react-native';
import * as styles from './SignupPhoneButton.styles';

const SignupPhoneButton = ({handleNextPage, isCertificationNumberMatch}) => {
  return (
    <styles.ButtonBox isCertificationNumberMatch={isCertificationNumberMatch}>
      <TouchableOpacity
        onPress={handleNextPage}
        hitSlop={{top: 10, bottom: 10, left: 30, right: 30}}>
        <styles.ButtonText
          isCertificationNumberMatch={isCertificationNumberMatch}>
          다음
        </styles.ButtonText>
      </TouchableOpacity>
    </styles.ButtonBox>
  );
};

export default SignupPhoneButton;
