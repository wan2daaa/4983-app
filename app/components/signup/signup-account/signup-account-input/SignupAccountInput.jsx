import * as styles from './SignupAccountInput.styles';
import {useState} from 'react';
import ArrowDownIcon from '@assets/images/signup/ArrowDownIcon.svg';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';

const SignupAccountInput = ({
  setAccountHolder,
  setAccountNumber,
  setSelectedBank,
}) => {
  const renderBankList = () => (
    <styles.BankListBox
      style={{
        zIndex: isListVisible ? 1000 : 0,
      }}>
      <ScrollView style={{height: '100%'}}>
        {isListVisible &&
          banks.map((bank, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setIsListVisible(false);
                setSelectedBank(bank.value);
                setSelectedBankLabel(bank.label);
              }}
              style={{
                padding: 10,
                backgroundColor: '#fff',
                borderBottomColor: '#818181',
                borderBottomWidth: 0.3,
              }}>
              <Text style={{backgroundColor: '#fff'}}>{bank.label}</Text>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </styles.BankListBox>
  );

  const [isListVisible, setIsListVisible] = useState(false);
  const [selectedBankLabel, setSelectedBankLabel] = useState('');

  const banks = [
    {label: '우리은행', value: 'WOORI'},
    {label: '기업은행', value: 'IBK'},
    {label: '국민은행', value: 'KB'},
    {label: '카카오뱅크', value: 'KAKAO'},
    {label: '농협은행', value: 'NH'},
    {label: '신함은행', value: 'SHINHAN'},
    {label: '하나은행', value: 'KEBHANA'},
    {label: '새마을금고', value: 'KFCC'},
    {label: '우체국', value: 'EPOST'},
    {label: 'SC제일은행', value: 'SC'},
    {label: '대구은행', value: 'DGB'},
    {label: '부산은행', value: 'BUSAN'},
    {label: '경남은행', value: 'KN'},
    {label: '광주은행', value: 'KJ'},
    {label: '신협', value: 'SHINHYUP'},
    {label: '수협은행', value: 'SUHYUP'},
    {label: '산업은행', value: 'KDB'},
    {label: '전북은행', value: 'JB'},
    {label: '제주은행', value: 'JEJU'},
    {label: '씨티은행', value: 'CITI'},
    {label: '케이뱅크', value: 'K'},
    {label: '토스뱅크', value: 'TOSS'},
  ];

  const toggleList = () => {
    setIsListVisible(!isListVisible);
  };

  return (
    <styles.Container>
      <styles.InputContainer>
        <styles.InputTitle>예금주명</styles.InputTitle>
        <styles.Input
          placeholder="본인 명의의 예금주를 작성해 주세요."
          onChangeText={setAccountHolder}
        />
      </styles.InputContainer>
      <styles.InputContainer>
        <styles.InputTitle>계좌은행</styles.InputTitle>
        <styles.BankListContainer>
          <styles.BankInput
            placeholder="은행을 선택해 주세요."
            id="accountBanks"
            type="text"
            value={selectedBankLabel || '은행을 선택해 주세요.'}
            onClick={toggleList}
          />
          <TouchableOpacity onPress={toggleList}>
            <ArrowDownIcon />
          </TouchableOpacity>
        </styles.BankListContainer>
      </styles.InputContainer>
      {renderBankList()}
      <styles.InputContainer>
        <styles.InputTitle>계좌번호</styles.InputTitle>
        <styles.Input
          keyboardType="numeric"
          placeholder="계좌번호를 입력해 주세요. "
          onChangeText={setAccountNumber}
        />
      </styles.InputContainer>
    </styles.Container>
  );
};

export default SignupAccountInput;
