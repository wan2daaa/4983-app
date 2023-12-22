import * as styles from './SigninInput.styles';
import {useEffect, useState} from 'react';
import NonCheckIcon from '@assets/images/signin/NonCheck.svg';
import CheckIcon from '@assets/images/signin/Check.svg';
import {TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PasswordOn from '@assets/images/signin/PasswordViewOn.svg';
import PasswordOff from '@assets/images/signin/PasswordViewOff.svg';

const SigninInput = ({setStudentId, setPassword, LoginError, errorMsg}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const loadCheckedState = async () => {
      try {
        const savedState = await AsyncStorage.getItem('isChecked');
        if (savedState !== null) {
          setIsChecked(savedState === 'true');
          console.log('자동로그인 isChecked:', savedState);
        }
      } catch (error) {
        console.error('Error', error);
      }
    };
    loadCheckedState();
  }, []);

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
        <styles.PasswordBox>
          <styles.PasswordInput
            id="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="비밀번호를 입력해 주세요."
            secureTextEntry={!showPassword}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={togglePassword} style={{paddingRight: 20}}>
            {showPassword ? (
              <PasswordOn width={18} height={18} />
            ) : (
              <PasswordOff width={18} height={18} />
            )}
          </TouchableOpacity>
        </styles.PasswordBox>
        <styles.Box>
          <TouchableOpacity
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
          </TouchableOpacity>
          {!LoginError && <styles.ErrorText>{errorMsg}</styles.ErrorText>}
        </styles.Box>
      </styles.InputBox>
    </styles.InputContainer>
  );
};

export default SigninInput;
