import * as styles from './ChangePasswordInput.styles';
import {useEffect, useState} from 'react';
import {PasswordChangeCheck} from '@/apis/mypage/MypageLoginActivityApi';

const ChangePasswordInput = ({
  setIsPasswordCheck,
  setIsNewPasswordCheck,
  setIsCheckPasswordCheck,
  newPasswords,
  setNewPasswords,
}) => {
  const [passwords, setPasswords] = useState('');
  const [checkPasswords, setCheckPasswords] = useState('');
  const [isPasswordMatch, setIsPasswordMatch] = useState(undefined);
  const [isNewPasswordValid, setIsNewPasswordValid] = useState(undefined);
  const [isNewPasswordMatch, setIsNewPasswordMatch] = useState(undefined);
  const [isPasswordButtonClicked, setIsPasswordButtonClicked] = useState(false);
  const [isNewPasswordButtonClicked, setIsNewPasswordButtonClicked] =
    useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handlePasswordChangeCheck = () => {
    PasswordChangeCheck(passwords)
      .then(res => {
        setIsPasswordMatch(res);
        if (res === true) {
          setIsPasswordCheck(true);
        } else {
          setIsPasswordCheck(false);
        }
      })
      .catch(err => {
        alert(err.response.data.message);
      });
  };

  const handleNewPasswordChange = () => {
    const isValidLength = newPasswords.length >= 8 && newPasswords.length <= 20;

    const hasDigit = /\d/.test(newPasswords);

    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(newPasswords);

    const isValidPassword = isValidLength && hasDigit && hasSpecialChar;

    setIsNewPasswordValid(isValidPassword);
    setIsNewPasswordCheck(isValidPassword);
  };

  const handleNewPasswordMatch = () => {
    setIsNewPasswordMatch(newPasswords === checkPasswords);
    setIsCheckPasswordCheck(newPasswords === checkPasswords);
  };

  const checkPasswordButtonClicked = () => {
    if (passwords) {
      setIsPasswordButtonClicked(true);
    } else {
      setIsPasswordButtonClicked(false);
    }
  };

  const checkNewPasswordButtonClicked = () => {
    if (newPasswords) {
      setIsNewPasswordButtonClicked(true);
    } else {
      setIsNewPasswordButtonClicked(false);
    }
  };

  const checkButtonClicked = () => {
    if (checkPasswords) {
      setIsButtonClicked(true);
    } else {
      setIsButtonClicked(false);
    }
  };

  useEffect(() => {
    checkPasswordButtonClicked();
    checkNewPasswordButtonClicked();
    checkButtonClicked();
  }, [passwords, newPasswords, checkPasswords]);

  return (
    <styles.InputContainer>
      <styles.InputBox>
        <styles.Title>현재 비밀번호</styles.Title>
        <styles.InputButtonBox>
          <styles.Input
            id={passwords}
            type="password"
            placeholder="현재 비밀번호를 입력해 주세요."
            onChangeText={setPasswords}
          />
          <styles.InputButton
            onPress={handlePasswordChangeCheck}
            style={{
              backgroundColor: isPasswordButtonClicked
                ? 'rgba(2, 184, 120, 0.80)'
                : '#D1D1D1',
            }}
            disabled={!isPasswordButtonClicked}>
            <styles.InputButtonText
              style={{color: isPasswordButtonClicked ? '#FFF' : '#50555C'}}>
              확인
            </styles.InputButtonText>
          </styles.InputButton>
        </styles.InputButtonBox>
        {isPasswordMatch === false ? (
          <styles.Message style={{color: '#F61818'}}>
            비밀번호가 일치하지 않습니다.
          </styles.Message>
        ) : null}
        {isPasswordMatch === true ? (
          <styles.Message style={{color: '#02be7c'}}>
            비밀번호가 일치합니다.
          </styles.Message>
        ) : null}
      </styles.InputBox>

      <styles.InputBox>
        <styles.Title>새로운 비밀번호</styles.Title>
        <styles.InputButtonBox>
          <styles.Input
            id={newPasswords}
            type="password"
            disabled={isPasswordMatch === undefined ? true : !isPasswordMatch}
            onChangeText={setNewPasswords}
            placeholder="새로운 비밀번호를 입력해 주세요."
          />
          <styles.InputButton
            onPress={handleNewPasswordChange}
            style={{
              backgroundColor: isNewPasswordButtonClicked
                ? 'rgba(2, 184, 120, 0.80)'
                : '#D1D1D1',
            }}
            disabled={isPasswordMatch === undefined ? true : !isPasswordMatch}>
            <styles.InputButtonText
              style={{color: isNewPasswordButtonClicked ? '#FFF' : '#50555C'}}>
              확인
            </styles.InputButtonText>
          </styles.InputButton>
        </styles.InputButtonBox>
        {isNewPasswordValid === undefined ? (
          <styles.Message style={{color: '#50555C'}}>
            최소 8자~최대 20자의 영어, 숫자, 특수문자 가능
          </styles.Message>
        ) : isNewPasswordValid ? (
          <styles.Message style={{color: '#02be7c'}}>
            사용가능한 비밀번호 입니다.
          </styles.Message>
        ) : (
          <styles.Message style={{color: '#F00'}}>
            사용하실 수 없는 비밀번호입니다.
          </styles.Message>
        )}
      </styles.InputBox>

      <styles.InputBox>
        <styles.Title>비밀번호 확인</styles.Title>
        <styles.InputButtonBox>
          <styles.Input
            id={checkPasswords}
            type="password"
            disabled={
              !isNewPasswordValid === undefined ? true : !isNewPasswordValid
            }
            onChangeText={setCheckPasswords}
            placeholder="새로운 비밀번호를 다시 입력해 주세요."
          />
          <styles.InputButton
            onPress={handleNewPasswordMatch}
            style={{
              backgroundColor: isButtonClicked
                ? 'rgba(2, 184, 120, 0.80)'
                : '#D1D1D1',
            }}
            disabled={
              !isNewPasswordValid === undefined ? true : !isNewPasswordValid
            }>
            <styles.InputButtonText
              style={{color: isButtonClicked ? '#FFF' : '#50555C'}}>
              확인
            </styles.InputButtonText>
          </styles.InputButton>
        </styles.InputButtonBox>
        {isNewPasswordMatch !== undefined ? (
          isNewPasswordMatch ? (
            <styles.Message style={{color: '#02B878'}}>
              확인되었습니다.
            </styles.Message>
          ) : (
            <styles.Message style={{color: '#F00'}}>
              입력하신 비밀번호와 일치하지 않습니다.
            </styles.Message>
          )
        ) : null}
      </styles.InputBox>
    </styles.InputContainer>
  );
};

export default ChangePasswordInput;
