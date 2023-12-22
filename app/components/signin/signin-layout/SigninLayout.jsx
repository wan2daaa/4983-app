import * as styles from './SigninLayout.styles';
import Logo from '@assets/images/signin/SigninLogo.svg';
import SigninInput from '@components/signin/signin-input/SigninInput';
import SigninButton from '@components/signin/signin-button/SigninButton';
import FindLinkBox from '@components/signin/find-link-box/FindLinkBox';
import React, {useState} from 'react';

const SigninLayout = ({navigation}) => {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [LoginError, setLoginError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  return (
    <styles.SigninLayout>
      <styles.TitleBox>
        <styles.Title>로그인</styles.Title>
      </styles.TitleBox>
      <styles.LogoBox>
        <Logo width={124} height={183} />
      </styles.LogoBox>
      <SigninInput
        setStudentId={setStudentId}
        setPassword={setPassword}
        Loginerror={LoginError}
        errorMsg={errorMsg}
      />
      <SigninButton
        navigation={navigation}
        studentId={studentId}
        password={password}
        setLoginError={setLoginError}
        setErrorMsg={setErrorMsg}
      />
      <FindLinkBox navigation={navigation} />
    </styles.SigninLayout>
  );
};

export default SigninLayout;
