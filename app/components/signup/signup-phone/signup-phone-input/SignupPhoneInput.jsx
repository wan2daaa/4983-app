import * as styles from './SignupPhoneInput.styles';
import {TouchableOpacity} from 'react-native';
import {sendPhoneNumber} from '@/apis/auth/signup/singupApi';
import {useEffect, useRef, useState} from 'react';

const SignupPhoneInput = ({
  phoneNumber,
  setPhoneNumber,
  handleSendPhoneNumber,
  certificationNumber,
  verifyCertificationNumber,
  setVerifyCertificationNumber,
  isCertificationNumberMatch,
  setIsCertificationNumberMatch,
  leftTime,
  setLeftTime,
  isLeftTimeEnabled,
}) => {
  const intervalref = useRef(null);
  const formatTime = time => time.toString().padStart(2, '0');

  const minutes = Math.floor(leftTime / 60);
  const seconds = formatTime(leftTime % 60);

  useEffect(() => {
    if (isLeftTimeEnabled) {
      if (intervalref.current !== null) {
        return;
      }
      intervalref.current = window.setInterval(() => {
        setLeftTime(time => (time > 0 ? time - 1 : 0));
      }, 1000);
    }
  }, [isLeftTimeEnabled]);

  return (
    <styles.Container>
      <styles.InputContainer>
        <styles.InputTitle>휴대폰 번호</styles.InputTitle>
        <styles.InputButtonBox>
          <styles.PhoneInput
            placeholder="번호를 입력해 주세요."
            maxLength={11}
            keyboardType="number-pad"
            onChangeText={setPhoneNumber}
          />
          <styles.ButtonBox
            style={{
              backgroundColor:
                phoneNumber.length === 11 ? '#02B878' : '#D1D1D1',
            }}>
            <TouchableOpacity
              hitSlop={{top: 20, bottom: 20}}
              onPress={() => {
                handleSendPhoneNumber(phoneNumber);
              }}>
              <styles.ButtonText
                style={{
                  color: phoneNumber.length === 11 ? '#FFF' : '#50555C',
                }}>
                전송
              </styles.ButtonText>
            </TouchableOpacity>
          </styles.ButtonBox>
        </styles.InputButtonBox>
      </styles.InputContainer>
      <styles.InputContainer>
        <styles.InputTitle>인증 번호</styles.InputTitle>
        <styles.InputButtonBox>
          <styles.InputBox>
            <styles.Input
              placeholder="인증 번호를 입력해 주세요."
              onChangeText={setVerifyCertificationNumber}
            />
            {isLeftTimeEnabled && (
              <styles.LeftTime>
                남은시간 {minutes}:{seconds}
              </styles.LeftTime>
            )}
          </styles.InputBox>
          <styles.ButtonBox
            style={{
              backgroundColor:
                verifyCertificationNumber.length === 6 ? '#02B878' : '#D1D1D1',
            }}>
            <TouchableOpacity
              hitSlop={{top: 20, bottom: 20}}
              disabled={verifyCertificationNumber.length !== 6}
              onPress={() => {
                setIsCertificationNumberMatch(
                  verifyCertificationNumber === certificationNumber,
                );
              }}>
              <styles.ButtonText
                style={{
                  color:
                    verifyCertificationNumber.length === 6 ? '#FFF' : '#50555C',
                }}>
                확인
              </styles.ButtonText>
            </TouchableOpacity>
          </styles.ButtonBox>
        </styles.InputButtonBox>
        {isCertificationNumberMatch !== null && (
          <styles.MessageText
            isCertificationNumberMatch={isCertificationNumberMatch}
            fontColor={isCertificationNumberMatch ? '#02B878' : '#f61818'}>
            {isCertificationNumberMatch
              ? '인증 완료 되었습니다.'
              : '인증번호가 올바르지 않습니다.'}
          </styles.MessageText>
        )}
      </styles.InputContainer>
    </styles.Container>
  );
};

export default SignupPhoneInput;
