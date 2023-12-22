import * as styles from './SignupProfilePasswordInput.styles';
import {TouchableOpacity} from 'react-native';
import PasswordOn from '@assets/images/signin/PasswordViewOn.svg';
import PasswordOff from '@assets/images/signin/PasswordViewOff.svg';
import {useState} from 'react';

const isPasswordValid = password => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*\d)(?=.*[~.\\!@#$%^&*()_\-+=\[\]{}|;:‘“<>,.?/])[A-Za-z\d~.\\!@#$%^&*()_\-+=\[\]{}|;:‘“<>,.?/]{8,20}$/;
  return passwordRegex.test(password);
};

const SignupProfilePasswordInput = ({
  password,
  setPassword,
  verifyPassword,
  setVerifyPassword,
  setVerifySuccess,
}) => {
  const [passwordError, setPasswordError] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [_, setPasswordMatch] = useState(false);
  const [verifyPasswordSuccess, setVerifyPasswordSuccess] = useState('');
  const [verifyPasswordError, setVerifyPasswordError] = useState('');
  const handleNewPasswordChange = text => {
    const newPasswordValue = text;
    setPassword(newPasswordValue);

    setPasswordError('최소 8자~최대 20자의 영어, 숫자, 특수문자 조합');
    if (newPasswordValue.length === 0) {
      setPasswordError('최소 8자~최대 20자의 영어, 숫자, 특수문자 조합');
    } else {
      const isValid = isPasswordValid(newPasswordValue);
      setPasswordError(
        isValid
          ? '사용 가능한 비밀번호입니다.'
          : '사용하실 수 없는 비밀번호입니다.',
      );
    }
  };

  const handleVerifyPasswordsMatch = verifyPassword => {
    if (password === verifyPassword && password !== '') {
      setPasswordMatch(true);
      setVerifySuccess(true);
      setVerifyPasswordSuccess('비밀번호가 일치합니다.');
      setVerifyPasswordError('');
    } else {
      setPasswordMatch(false);
      setVerifySuccess(false);
      setVerifyPasswordError('비밀번호가 일치하지 않습니다.');
      setVerifyPasswordSuccess('');
    }
  };

  const toggleNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <styles.Container>
      <styles.InputContainer>
        <styles.InputTitle>비밀번호</styles.InputTitle>
        <styles.InputBox>
          <styles.Input
            id="password"
            placeholder="비밀번호를 입력해 주세요."
            secureTextEntry={!showNewPassword}
            onChangeText={handleNewPasswordChange}
          />
          <TouchableOpacity
            onPress={toggleNewPassword}
            style={{paddingRight: 20}}>
            {showNewPassword ? (
              <PasswordOn width={18} height={18} />
            ) : (
              <PasswordOff width={18} height={18} />
            )}
          </TouchableOpacity>
        </styles.InputBox>
        {!passwordError && (
          <styles.Content>
            최소 8자~최대 20자의 영어, 숫자, 특수문자 조합
          </styles.Content>
        )}
        {passwordError === '최소 8자~최대 20자의 영어, 숫자, 특수문자 조합' ? (
          <styles.Content>
            최소 8자~최대 20자의 영어, 숫자, 특수문자 조합
          </styles.Content>
        ) : (
          <>
            {passwordError === '사용 가능한 비밀번호입니다.' ? (
              <styles.SuccessText>{passwordError}</styles.SuccessText>
            ) : (
              <styles.ErrorText>{passwordError}</styles.ErrorText>
            )}
          </>
        )}
      </styles.InputContainer>
      <styles.InputContainer>
        <styles.InputTitle>비밀번호 확인</styles.InputTitle>
        <styles.InputBox>
          <styles.Input
            type="password"
            placeholder="비밀번호를 다시 입력해 주세요."
            secureTextEntry={!showPassword}
            value={verifyPassword}
            onChangeText={text => {
              setVerifyPassword(text);
              handleVerifyPasswordsMatch(text);
            }}
            editable={passwordError === '사용 가능한 비밀번호입니다.'}
          />
          <TouchableOpacity onPress={togglePassword} style={{paddingRight: 20}}>
            {showPassword ? (
              <PasswordOn width={18} height={18} />
            ) : (
              <PasswordOff width={18} height={18} />
            )}
          </TouchableOpacity>
        </styles.InputBox>
        {verifyPasswordSuccess ? (
          <styles.SuccessText>{verifyPasswordSuccess}</styles.SuccessText>
        ) : (
          verifyPasswordError && (
            <styles.ErrorText>{verifyPasswordError}</styles.ErrorText>
          )
        )}
      </styles.InputContainer>
    </styles.Container>
  );
};

export default SignupProfilePasswordInput;
