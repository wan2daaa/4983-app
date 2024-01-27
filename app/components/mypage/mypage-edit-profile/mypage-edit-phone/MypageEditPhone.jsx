import * as styles from './MypageEditPhone.styles';
import {useState} from 'react';
import {myPageCertification} from '@/apis/mypage/MypageEditProfileApi';

const MypageEditPhone = ({
  currentPhoneNumber,
  phoneNumber,
  setPhoneNumber,
  setVerificationSuccess,
  verificationSuccess,
  setVerificationCode,
}) => {
  const [phoneNumberFormatError, setPhoneNumberFormatError] = useState(false);
  const phoneNumberRegEx = /^[0-9]{11}$/;

  const handleSendVerificationCode = async () => {
    if (!phoneNumberRegEx.test(phoneNumber)) {
      setPhoneNumberFormatError(true);
      return;
    }

    const code = await myPageCertification(phoneNumber);
    setVerificationCode(code);
    setPhoneNumberFormatError(false);
  };

  const isPhoneNumberValid = !phoneNumberRegEx || phoneNumber.length !== 11;

  return (
    <styles.Container>
      <styles.Title>전화번호</styles.Title>
      <styles.InputBox>
        <styles.Input
          id="phoneNumber"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          disabled={verificationSuccess}
          type="text"
          placeholder={currentPhoneNumber}
        />
        <styles.Button
          isPhoneNumberValid={!isPhoneNumberValid}
          disabled={isPhoneNumberValid}
          onPress={handleSendVerificationCode}>
          <styles.ButtonText isPhoneNumberValid={!isPhoneNumberValid}>
            전송
          </styles.ButtonText>
        </styles.Button>
      </styles.InputBox>
    </styles.Container>
  );
};

export default MypageEditPhone;
