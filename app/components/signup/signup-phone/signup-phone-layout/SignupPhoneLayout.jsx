import * as styles from './SignupPhoneLayout.styles';
import SignupPhoneInput from '@components/signup/signup-phone/signup-phone-input/SignupPhoneInput';
import SignupPhoneButton from '@components/signup/signup-phone/signup-phone-button/SignupPhoneButton';
import {ScrollView, TouchableWithoutFeedback} from 'react-native';

const SignupPhoneLayout = ({navigation}) => {
  return (
    <styles.Container>
      <TouchableWithoutFeedback>
        <ScrollView>
          <styles.Title>
            <styles.TitleColor>휴대폰 본인인증</styles.TitleColor>을{'\n'}
            진행해 주세요.
          </styles.Title>
          <SignupPhoneInput />
        </ScrollView>
      </TouchableWithoutFeedback>
      <SignupPhoneButton navigation={navigation} />
    </styles.Container>
  );
};

export default SignupPhoneLayout;
