import * as styles from './SignupPhoneLayout.styles';
import SignupPhoneInput from '@components/signup/signup-phone/signup-phone-input/SignupPhoneInput';
import SignupPhoneButton from '@components/signup/signup-phone/signup-phone-button/SignupPhoneButton';
import {ScrollView, TouchableWithoutFeedback} from 'react-native';
import {useEffect, useState} from 'react';
import {sendPhoneNumber} from '@/apis/auth/signup/singupApi';
import {useRecoilState} from 'recoil';
import {recoilPassword, recoilPhoneNumber} from '@/recoil/atoms/SignupAtoms';

const SignupPhoneLayout = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [certificationNumber, setCertificationNumber] = useState('');
  const [verifyCertificationNumber, setVerifyCertificationNumber] =
    useState('');
  const [isCertificationNumberMatch, setIsCertificationNumberMatch] =
    useState(null);

  const [useRecoilPhoneNumber, setRecoilPhoneNumber] =
    useRecoilState(recoilPhoneNumber);

  const handleSendPhoneNumber = phonenumber => {
    sendPhoneNumber(phonenumber).then(res => {
      console.log(
        'res.data.certificationNumber : ' + res.data.certificationNumber,
      );
      setCertificationNumber(res.data.certificationNumber);
    });
  };

  const handleNextPage = () => {
    if (!isCertificationNumberMatch) return;

    setRecoilPhoneNumber(phoneNumber);
    navigation.navigate('SignupAccount');
  };

  return (
    <styles.Container>
      <TouchableWithoutFeedback>
        <ScrollView>
          <styles.Title>
            <styles.TitleColor>휴대폰 본인인증</styles.TitleColor>을{'\n'}
            진행해 주세요.
          </styles.Title>
          <SignupPhoneInput
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            handleSendPhoneNumber={handleSendPhoneNumber}
            certificationNumber={certificationNumber}
            verifyCertificationNumber={verifyCertificationNumber}
            setVerifyCertificationNumber={setVerifyCertificationNumber}
            isCertificationNumberMatch={isCertificationNumberMatch}
            setIsCertificationNumberMatch={setIsCertificationNumberMatch}
          />
        </ScrollView>
      </TouchableWithoutFeedback>
      <SignupPhoneButton
        handleNextPage={handleNextPage}
        isCertificationNumberMatch={isCertificationNumberMatch}
      />
    </styles.Container>
  );
};

export default SignupPhoneLayout;
