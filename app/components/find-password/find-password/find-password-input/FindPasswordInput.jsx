import * as styles from './FindPasswordInput.styles';
import {TouchableOpacity} from 'react-native';
import {fetchCertificationNumber} from '@/apis/find-password/FindPasswordApi';
import {useEffect, useRef, useState} from 'react';

const FindPasswordInput = ({
  isStudentId,
  setIsStudentId,
  isPhoneNumber,
  setIsPhoneNumber,
  errorMsg,
  setErrorMsg,
  isStudentIdValid,
  setIsStudentIdValid,
  isApiCalled,
  setIsApiCalled,
  setCertificationNumber,
  setCertificationCode,
  setIsCertificationCorrect,
  certificationNumber,
}) => {
  const intervalref = useRef(null);

  const [isLeftTimeEnabled, setIsLeftTimeEnabled] = useState(false);
  const [leftTime, setLeftTime] = useState(180);

  const formatTime = time => time.toString().padStart(2, '0');

  const minutes = Math.floor(leftTime / 60);
  const seconds = formatTime(leftTime % 60);
  const handleCertificationInputChange = text => {
    setCertificationCode(text);

    setIsCertificationCorrect(certificationNumber === text);
  };

  const handleCertificationNumber = async () => {
    try {
      const data = await fetchCertificationNumber(isStudentId, isPhoneNumber);
      setErrorMsg('');
      setCertificationNumber(String(data));
      console.log('certificationNumber: ', data);
      setIsCertificationCorrect(false);
      setIsLeftTimeEnabled(true);
    } catch (error) {
      setErrorMsg(error.response?.data?.message);
      setIsStudentIdValid(false);
      setIsApiCalled(true);
    }
    setIsStudentIdValid(true);
    setIsApiCalled(false);

    const LEFT_SEC = 180;
    setLeftTime(LEFT_SEC);
  };

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
      <styles.InputBox>
        <styles.InputTitle>학번</styles.InputTitle>
        <styles.Input
          type="number"
          placeholder="학번을 입력해 주세요."
          onChangeText={setIsStudentId}
        />
        {isStudentIdValid && !isApiCalled && (
          <styles.ErrorText>{errorMsg}</styles.ErrorText>
        )}
      </styles.InputBox>
      <styles.PhoneInputBox>
        <styles.InputTitle>휴대폰번호</styles.InputTitle>
        <styles.PhoneContainer>
          <styles.PhoneInput
            type="number"
            placeholder="번호를 입력해 주세요."
            onChangeText={text => setIsPhoneNumber(text)}
          />
          <styles.ButtonBox
            style={
              isPhoneNumber.length === 11
                ? {backgroundColor: '#02B878CC'}
                : null
            }>
            <TouchableOpacity
              hitSlop={{top: 20, bottom: 20}}
              onPress={
                isPhoneNumber.length === 11
                  ? handleCertificationNumber
                  : undefined
              }
              disabled={isPhoneNumber.length !== 11}>
              <styles.ButtonText
                style={isPhoneNumber.length === 11 ? {color: '#FFF'} : null}>
                인증번호{'\n'}전송
              </styles.ButtonText>
            </TouchableOpacity>
          </styles.ButtonBox>
        </styles.PhoneContainer>
      </styles.PhoneInputBox>
      <styles.CertificationInputBox>
        <styles.CertificationInput
          type="number"
          placeholder="인증번호를 입력해 주세요."
          onChangeText={handleCertificationInputChange}
        />
        {isLeftTimeEnabled && (
          <styles.LeftTime>
            남은시간 {minutes}:{seconds}
          </styles.LeftTime>
        )}
      </styles.CertificationInputBox>
    </styles.Container>
  );
};

export default FindPasswordInput;
