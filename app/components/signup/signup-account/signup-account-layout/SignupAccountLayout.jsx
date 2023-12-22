import * as styles from './SignupAccountLayout.styles';
import {ScrollView, TouchableWithoutFeedback} from 'react-native';
import SignupAccountInput from '@components/signup/signup-account/signup-account-input/SignupAccountInput';
import SignupAccountButton from '@components/signup/signup-account/signup-account-button/SignupAccountButton';

const SignupAccountLayout = ({navigation}) => {
  return (
    <styles.Container>
      <TouchableWithoutFeedback>
        <ScrollView>
          <styles.Title>
            거래 시 이용할{'\n'}
            <styles.TitleColor>계좌번호</styles.TitleColor>를 기입해 주세요.
          </styles.Title>
          <SignupAccountInput />
        </ScrollView>
      </TouchableWithoutFeedback>
      <SignupAccountButton navigation={navigation} />
    </styles.Container>
  );
};

export default SignupAccountLayout;
