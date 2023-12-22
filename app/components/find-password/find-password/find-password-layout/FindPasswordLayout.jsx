import * as styles from './FindPasswordLayout.styles';
import Logo from '@assets/images/signin/SigninLogo.svg';
import FindPasswordInput from '@components/find-password/find-password/find-password-input/FindPasswordInput';
import {ScrollView, TouchableWithoutFeedback} from 'react-native';
import FindPasswordButton from '@components/find-password/find-password/find-password-button/FindPasswordButton';
import {useState} from 'react';

const FindPasswordLayout = ({navigation}) => {
  const [isStudentId, setIsStudentId] = useState('');
  const [isPhoneNumber, setIsPhoneNumber] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isStudentIdValid, setIsStudentIdValid] = useState(false);
  const [isApiCalled, setIsApiCalled] = useState(false);
  const [certificationNumber, setCertificationNumber] = useState('');
  const [_, setCertificationCode] = useState('');
  const [isCertificationCorrect, setIsCertificationCorrect] = useState(false);

  return (
    <styles.Container>
      <TouchableWithoutFeedback>
        <ScrollView>
          <styles.LogoBox>
            <Logo width={124} height={183} />
          </styles.LogoBox>
          <styles.TitleBox>
            <styles.Title>아래 정보를 입력해 주세요.</styles.Title>
          </styles.TitleBox>
          <FindPasswordInput
            isStudentId={isStudentId}
            setIsStudentId={setIsStudentId}
            isPhoneNumber={isPhoneNumber}
            setIsPhoneNumber={setIsPhoneNumber}
            errorMsg={errorMsg}
            setErrorMsg={setErrorMsg}
            isStudentIdValid={isStudentIdValid}
            setIsStudentIdValid={setIsStudentIdValid}
            isApiCalled={isApiCalled}
            setIsApiCalled={setIsApiCalled}
            setCertificationNumber={setCertificationNumber}
            setCertificationCode={setCertificationCode}
            isCertificationCorrect={isCertificationCorrect}
            setIsCertificationCorrect={setIsCertificationCorrect}
            certificationNumber={certificationNumber}
          />
        </ScrollView>
      </TouchableWithoutFeedback>
      <FindPasswordButton
        navigation={navigation}
        isCertificationCorrect={isCertificationCorrect}
        isStudentId={isStudentId}
        isPhoneNumber={isPhoneNumber}
      />
    </styles.Container>
  );
};

export default FindPasswordLayout;
