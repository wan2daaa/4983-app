import {ScrollView, TouchableWithoutFeedback} from 'react-native';
import * as styles from './SignupProfileLayout.styles';
import SignupProfileInput from '@components/signup/signup-profile/signup-profile-input/SignupProfileInput';
import SignupProfilePasswordInput from '@components/signup/signup-profile/signup-profile-input/signup-profile-password-input/SignupProfilePasswordInput';
import SignupProfileTerms from '@components/signup/signup-profile/signup-profile-terms/SignupProfileTerms';
import SignupProfileButton from '@components/signup/signup-profile/signup-profile-button/SignupProfileButton';
import {useEffect, useState} from 'react';
import {
  checkNicknameDuplicate,
  checkStudentIdDuplicate,
} from '@/apis/auth/signup/singupApi';
import {useRecoilState} from 'recoil';
import {
  recoilMarketingAgreement,
  recoilNickname,
  recoilPassword,
  recoilStudentId,
} from '@/recoil/atoms/SignupAtoms';

const SignupProfileLayout = ({navigation}) => {
  const [studentId, setStudentId] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [accountHolder, setAccountHolder] = useState('');
  const [accountBank, setAccountBank] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [department, setDepartment] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [verifySuccess, setVerifySuccess] = useState(false);
  const [isStudentIdDuplicate, setIsStudentIdDuplicate] = useState(null);
  const [isNicknameDuplicate, setIsNicknameDuplicate] = useState(null);

  // 이용약관 동의
  const [termsOfUse, setTermsOfUse] = useState(false);
  const [personalInformationCollection, setPersonalInformationCollection] =
    useState(false);
  const [marketingAgreement, setMarketingAgreement] = useState(false);

  const [canGoNextPage, setCanGoNextPage] = useState(false);

  const [useRecoilStudentId, setRecoilStudentId] =
    useRecoilState(recoilStudentId);
  const [useRecoilNickname, setRecoilNickname] = useRecoilState(recoilNickname);
  const [useRecoilPassword, setRecoilPassword] = useRecoilState(recoilPassword);
  const [useRecoilMarketingAgree, setRecoilMarketingAgree] = useRecoilState(
    recoilMarketingAgreement,
  );

  useEffect(() => {
    studentId.length === 8 &&
    !isStudentIdDuplicate &&
    !isNicknameDuplicate &&
    verifySuccess &&
    termsOfUse &&
    personalInformationCollection
      ? setCanGoNextPage(true)
      : setCanGoNextPage(false);
  }, [
    isStudentIdDuplicate,
    isNicknameDuplicate,
    verifySuccess,
    termsOfUse,
    personalInformationCollection,
  ]);

  const handleCheckStudentId = async () => {
    try {
      setIsStudentIdDuplicate(await checkStudentIdDuplicate(studentId));
    } catch (error) {
      setIsStudentIdDuplicate(false);
    }
  };

  const handleCheckNickname = async () => {
    try {
      setIsNicknameDuplicate(await checkNicknameDuplicate(nickname));
    } catch (error) {
      setIsNicknameDuplicate(false);
    }
  };

  const handleNextPage = () => {
    if (!canGoNextPage) return;

    console.log('studentId', studentId);
    console.log('nickname', nickname);
    console.log('password', password);

    setRecoilStudentId(studentId);
    setRecoilNickname(nickname);
    setRecoilPassword(password);
    setRecoilMarketingAgree(marketingAgreement);
    navigation.navigate('SignupPhone');
  };

  return (
    <styles.Container>
      <TouchableWithoutFeedback>
        <ScrollView>
          <styles.TitleContent>
            편리한 서비스 제공을 위한{'\n'}
            <styles.TitleBold>프로필 정보</styles.TitleBold>를 입력해 주세요.
          </styles.TitleContent>
          <SignupProfileInput
            studentId={studentId}
            setStudentId={setStudentId}
            nickname={nickname}
            setNickname={setNickname}
            isStudentIdDuplicate={isStudentIdDuplicate}
            handleCheckStudentId={handleCheckStudentId}
            isNicknameDuplicate={isNicknameDuplicate}
            handleCheckNickname={handleCheckNickname}
          />
          <SignupProfilePasswordInput
            password={password}
            setPassword={setPassword}
            verifyPassword={verifyPassword}
            setVerifyPassword={setVerifyPassword}
            setVerifySuccess={setVerifySuccess}
          />
          <SignupProfileTerms
            navigation={navigation}
            termsOfUse={termsOfUse}
            setTermsOfUse={setTermsOfUse}
            personalInformationCollection={personalInformationCollection}
            setPersonalInformationCollection={setPersonalInformationCollection}
            marketingAgreement={marketingAgreement}
            setMarketingAgreement={setMarketingAgreement}
          />
        </ScrollView>
      </TouchableWithoutFeedback>
      <SignupProfileButton
        handleNextPage={handleNextPage}
        canGoNextPage={canGoNextPage}
      />
    </styles.Container>
  );
};

export default SignupProfileLayout;
