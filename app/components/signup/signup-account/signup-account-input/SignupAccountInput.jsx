import * as styles from './SignupAccountInput.styles';
import {useState} from 'react';
import ArrowDownIcon from '@assets/images/signup/ArrowDownIcon.svg';
import {TouchableOpacity} from 'react-native';

const SignupAccountInput = () => {
  const [isListVisible, setListVisible] = useState(false);
  const [selectedBank, setSelectedBank] = useState('');
  const [_, setAccountBanks] = useState('');

  const banks = [
    {id: 1, name: '우리은행', enName: 'WOORI'},
    {id: 2, name: '기업은행', enName: 'IBK'},
    {id: 3, name: '국민은행', enName: 'KB'},
    {id: 4, name: '카카오뱅크', enName: 'KAKAO'},
    {id: 5, name: '농협은행', enName: 'NH'},
    {id: 6, name: '신함은행', enName: 'SHINHAN'},
    {id: 7, name: '하나은행', enName: 'KEBHANA'},
    {id: 8, name: '새마을금고', enName: 'KFCC'},
    {id: 9, name: '우체국', enName: 'EPOST'},
    {id: 10, name: 'SC제일은행', enName: 'SC'},
    {id: 11, name: '대구은행', enName: 'DGB'},
    {id: 12, name: '부산은행', enName: 'BUSAN'},
    {id: 13, name: '경남은행', enName: 'KN'},
    {id: 14, name: '광주은행', enName: 'KJ'},
    {id: 15, name: '신협', enName: 'SHINHYUP'},
    {id: 16, name: '수협은행', enName: 'SUHYUP'},
    {id: 17, name: '산업은행', enName: 'KDB'},
    {id: 18, name: '전북은행', enName: 'JB'},
    {id: 19, name: '제주은행', enName: 'JEJU'},
    {id: 20, name: '씨티은행', enName: 'CITI'},
    {id: 21, name: '케이뱅크', enName: 'K'},
    {id: 22, name: '토스뱅크', enName: 'TOSS'},
  ];

  const handleBankClick = bank => {
    setAccountBanks(bank.enName);
    setSelectedBank(bank.name);
    setListVisible(false);
  };

  const toggleList = () => {
    setListVisible(!isListVisible);
  };

  return (
    <styles.Container>
      <styles.InputContainer>
        <styles.InputTitle>예금주명</styles.InputTitle>
        <styles.Input placeholder="본인 명의의 예금주를 작성해 주세요." />
      </styles.InputContainer>

      <styles.InputContainer>
        <styles.InputTitle>계좌은행</styles.InputTitle>
        <styles.BankListContainer>
          <styles.BankInput
            placeholder="은행을 선택해 주세요."
            id="accountBanks"
            type="text"
            value={selectedBank || '은행을 선택해 주세요.'}
            onClick={toggleList}
          />
          <TouchableOpacity
            onPress={toggleList}
            hitSlop={{top: 20, bottom: 20}}>
            <ArrowDownIcon width={25} height={26} />
          </TouchableOpacity>
        </styles.BankListContainer>
      </styles.InputContainer>

      <styles.InputContainer>
        <styles.InputTitle>계좌번호</styles.InputTitle>
        <styles.Input placeholder="계좌번호를 입력해 주세요. " />
      </styles.InputContainer>
    </styles.Container>
  );
};

export default SignupAccountInput;
