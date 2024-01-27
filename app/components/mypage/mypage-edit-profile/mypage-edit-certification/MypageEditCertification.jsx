import * as styles from './MypageEditCertification.styles';
import {useState} from 'react';

const MypageEditCertification = ({
  verificationSuccess,
  verificationCode,
  setVerificationSuccess,
  setVerificationCode,
  setEditButtonDisabled,
}) => {
  const [inputVerificationCode, setInputVeificationCode] = useState('');
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleVerifyCode = () => {
    setButtonClicked(true);
    if (String(verificationCode) === inputVerificationCode) {
      setVerificationSuccess(true);
      setVerificationCode('');
      setEditButtonDisabled(false);
    } else {
      setVerificationSuccess(false);
      setEditButtonDisabled(true);
    }
  };

  const isCertificationValid = inputVerificationCode.length !== 6;

  return (
    <styles.Container>
      <styles.Title>인증번호</styles.Title>
      <styles.InputBox>
        <styles.Input
          id="sms"
          value={inputVerificationCode}
          type="text"
          disabled={verificationSuccess}
          onChangeText={setInputVeificationCode}
          placeholder="인증 번호를 입력해 주세요."
        />
        <styles.Button
          onPress={handleVerifyCode}
          disabled={isCertificationValid}
          isCertificationValid={!isCertificationValid}>
          <styles.ButtonText isCertificationValid={!isCertificationValid}>
            확인
          </styles.ButtonText>
        </styles.Button>
      </styles.InputBox>
      {verificationSuccess && (
        <styles.Success>인증 완료 되었습니다.</styles.Success>
      )}
      {buttonClicked && !verificationSuccess && verificationCode && (
        <styles.Error>인증번호가 올바르지 않습니다.</styles.Error>
      )}
    </styles.Container>
  );
};

export default MypageEditCertification;
