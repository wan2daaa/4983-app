import {TouchableOpacity} from 'react-native';
import * as styles from './SignupPhoneButton.styles';

const SignupPhoneButton = ({handleNextPage, isCertificationNumberMatch}) => {
  return (
    <styles.ButtonBox isCertificationNumberMatch={isCertificationNumberMatch}>
      <TouchableOpacity
        onPress={handleNextPage}
        hitSlop={{top: 40, bottom: 40, left: 40, right: 40}}>
        <styles.ButtonText
          isCertificationNumberMatch={isCertificationNumberMatch}>
          다음
        </styles.ButtonText>
      </TouchableOpacity>
    </styles.ButtonBox>
  );
};

export default SignupPhoneButton;
