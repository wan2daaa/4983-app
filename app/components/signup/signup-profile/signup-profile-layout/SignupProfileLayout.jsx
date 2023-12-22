import {ScrollView, TouchableWithoutFeedback} from 'react-native';
import * as styles from './SignupProfileLayout.styles';
import SignupProfileInput from '@components/signup/signup-profile/signup-profile-input/SignupProfileInput';
import SignupProfilePasswordInput from '@components/signup/signup-profile/signup-profile-input/signup-profile-password-input/SignupProfilePasswordInput';
import SignupProfileTerms from '@components/signup/signup-profile/signup-profile-terms/SignupProfileTerms';
import SignupProfileButton from '@components/signup/signup-profile/signup-profile-button/SignupProfileButton';
import {useState} from 'react';

const SignupProfileLayout = ({navigation}) => {
  const [studentId, setStudentId] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [marketingAgreement, setMarketingAgreement] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [accountHolder, setAccountHolder] = useState('');
  const [accountBank, setAccountBank] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [department, setDepartment] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [verifySuccess, setVerifySuccess] = useState(false);
  const [isStudentIdDuplicate, setIsStudentIdDuplicate] = useState(false);

  return (
    <styles.Container>
      <TouchableWithoutFeedback>
        <ScrollView>
          <styles.TitleContent>
            편리한 서비스 제공을 위한{'\n'}
            <styles.TitleBold>프로필 정보</styles.TitleBold>를 입력해 주세요.
          </styles.TitleContent>
          <SignupProfileInput
            studentId={studentId}
            setStudentId={setStudentId}
            setNickname={setNickname}
            isStudentIdDuplicate={isStudentIdDuplicate}
            setIsStudentIdDuplicate={setIsStudentIdDuplicate}
          />
          <SignupProfilePasswordInput
            password={password}
            setPassword={setPassword}
            verifyPassword={verifyPassword}
            setVerifyPassword={setVerifyPassword}
            setVerifySuccess={setVerifySuccess}
          />
          <SignupProfileTerms
            navigation={navigation}
            setMarketingAgreement={setMarketingAgreement}
          />
        </ScrollView>
      </TouchableWithoutFeedback>
      <SignupProfileButton navigation={navigation} />
    </styles.Container>
  );
};

export default SignupProfileLayout;
