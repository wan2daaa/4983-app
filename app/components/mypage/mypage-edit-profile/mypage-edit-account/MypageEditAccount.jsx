import * as styles from './MypageEditAccount.styles';
import SelectAccountIcon from '@assets/images/mypage/SelectAccountIcon.svg';
import {ScrollView, Text, TouchableOpacity} from 'react-native';
import {useEffect, useState} from 'react';

const MypageEditAccount = ({
  currentAccountBank,
  setCurrentAccountBank,
  currentAccountNumber,
  accountBank,
  setAccountBank,
  accountNumber,
  setAccountNumber,
  setEditButtonDisabled,
}) => {
  useEffect(() => {
    setEditButtonDisabled(!accountBank || !accountNumber);
  }, [accountBank, accountNumber, setEditButtonDisabled]);

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
                setCurrentAccountBank(bank.value);
                setAccountBank(bank.value);
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
      <styles.Title>계좌등록</styles.Title>
      <styles.InputBox>
        <styles.DropDown onPress={toggleList}>
          <styles.DropDownText>
            {banks.find(bank => bank.value === accountBank)?.label ||
              banks.find(bank => bank.value === currentAccountBank)?.label ||
              currentAccountBank}
          </styles.DropDownText>
          <SelectAccountIcon width={15} height={14} />
        </styles.DropDown>
        <styles.Input
          id="accountNumber"
          value={accountNumber}
          onChangeText={setAccountNumber}
          type="text"
          placeholder={currentAccountNumber}
        />
      </styles.InputBox>
      {renderBankList()}
    </styles.Container>
  );
};

export default MypageEditAccount;
