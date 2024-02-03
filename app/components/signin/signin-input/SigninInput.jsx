import * as styles from './SigninInput.styles';
import {useState} from 'react';
import NonCheckIcon from '@assets/images/signin/NonCheck.svg';
import CheckIcon from '@assets/images/signin/Check.svg';
import {TouchableWithoutFeedback} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SigninInput = ({
  setStudentId,
  setPassword,
  LoginError,
  errorMsg,
  isChecked,
  setIsChecked,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleCheck = async () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    try {
      await AsyncStorage.setItem('isChecked', newValue.toString());
    } catch (error) {
      console.error('Error', error);
    }
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <styles.InputContainer>
      <styles.InputBox>
        <styles.InputText>학번</styles.InputText>
        <styles.Input
          id="studentId"
          type="text"
          placeholder="학번을 입력해 주세요."
          onChangeText={setStudentId}
        />
      </styles.InputBox>
      <styles.InputBox>
        <styles.InputText>비밀번호</styles.InputText>
        {/*<styles.PasswordBox>*/}
        <styles.Input
          id="password"
          type={showPassword ? 'text' : 'password'}
          placeholder="비밀번호를 입력해 주세요."
          secureTextEntry={!showPassword}
          onChangeText={setPassword}
        />
        <styles.PasswordIconBox onPress={togglePassword}>
          {showPassword ? (
            <styles.PasswordOn width={18} height={18} />
          ) : (
            <styles.PasswordOff width={18} height={18} />
          )}
        </styles.PasswordIconBox>
        {/*</styles.PasswordBox>*/}
        <styles.Box>
          <TouchableWithoutFeedback
            onPress={toggleCheck}
            hitSlop={{top: 10, bottom: 10}}>
            <styles.CheckContainer>
              {isChecked ? (
                <CheckIcon width={16} height={16} />
              ) : (
                <NonCheckIcon width={16} height={16} />
              )}
              <styles.CheckText>자동 로그인</styles.CheckText>
            </styles.CheckContainer>
          </TouchableWithoutFeedback>
          {!LoginError && <styles.ErrorText>{errorMsg}</styles.ErrorText>}
        </styles.Box>
      </styles.InputBox>
    </styles.InputContainer>
  );
};

export default SigninInput;
