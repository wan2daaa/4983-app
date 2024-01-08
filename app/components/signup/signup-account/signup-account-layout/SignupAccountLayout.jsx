import * as styles from './SignupAccountLayout.styles';
import {ScrollView, TouchableWithoutFeedback} from 'react-native';
import SignupAccountInput from '@components/signup/signup-account/signup-account-input/SignupAccountInput';
import SignupAccountButton from '@components/signup/signup-account/signup-account-button/SignupAccountButton';
import {useEffect, useState} from 'react';
import {useRecoilState} from 'recoil';
import {
  recoilAccountBank,
  recoilAccountHolder,
  recoilAccountNumber,
  recoilPhoneNumber,
} from '@/recoil/atoms/SignupAtoms';

const SignupAccountLayout = ({navigation}) => {
  const [accountHolder, setAccountHolder] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [selectedBank, setSelectedBank] = useState('');

  const [isAccountEntered, setIsAccountEntered] = useState(false);

  const [useRecoilAccountHolder, setRecoilAccountHolder] =
    useRecoilState(recoilAccountHolder);
  const [useRecoilAccountBank, setRecoilAccountBank] =
    useRecoilState(recoilAccountBank);
  const [useRecoilAccountNumber, setRecoilAccountNumber] =
    useRecoilState(recoilAccountNumber);

  useEffect(() => {
    accountHolder.length >= 3 && accountNumber.length >= 11
      ? setIsAccountEntered(true)
      : setIsAccountEntered(false);
  }, [accountHolder, accountNumber]);

  const handleNextPage = () => {
    if (!isAccountEntered) return;

    setRecoilAccountHolder(accountHolder);
    setRecoilAccountBank(selectedBank);
    setRecoilAccountNumber(accountNumber);
    navigation.navigate('SignupCollege');
  };

  return (
    <styles.Container>
      <TouchableWithoutFeedback>
        <ScrollView>
          <styles.Title>
            거래 시 이용할{'\n'}
            <styles.TitleColor>계좌번호</styles.TitleColor>를 기입해 주세요.
          </styles.Title>
          <SignupAccountInput
            setAccountHolder={setAccountHolder}
            setAccountNumber={setAccountNumber}
            setSelectedBank={setSelectedBank}
          />
        </ScrollView>
      </TouchableWithoutFeedback>
      <SignupAccountButton
        handleNextPage={handleNextPage}
        isAccountEntered={isAccountEntered}
      />
    </styles.Container>
  );
};

export default SignupAccountLayout;
