import * as styles from './MypageSalesHistoryLayout.styles';
import {useEffect, useState} from 'react';
import {getSalesUsedBookList} from '@/apis/mypage/MypageTransactionApi';
import MypageSalesBookListContent from '@components/mypage/mypage-transaction/mypage-sales-history/mypage-sales-book-list-content/MypageSalesBookListContent';
import {useIsFocused} from '@react-navigation/native';
import {getWithdraw} from '@/apis/auth/member/MemberApi';
import {Modal} from 'react-native';

const MypageSalesHistoryLayout = ({navigation}) => {
  const isFocused = useIsFocused();
  const [activeButton, setActiveButton] = useState('SALE');
  const [usedBooks, setUsedBooks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSalesUsedBookList(activeButton === 'SALE');
        console.log('data', data);
        setUsedBooks(data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();
  }, [activeButton]);

  useEffect(() => {
    getWithdraw()
      .then(res => {
        setIsModalOpen(res);
      })
      .catch(error => {
        console.log('error', error);
      });
  }, [isFocused]);

  const handleModalClose = () => {
    navigation.navigate('Home');
    setIsModalOpen(false);
  };

  return (
    <styles.Container>
      <styles.TabsContainer>
        <styles.TabBox>
          <styles.Tab
            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
            active={activeButton === 'SALE'}
            onPress={() => setActiveButton('SALE')}>
            <styles.TabText active={activeButton === 'SALE'}>
              판매 중
            </styles.TabText>
          </styles.Tab>
        </styles.TabBox>
        <styles.TabBox>
          <styles.Tab
            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
            active={activeButton === 'SOLD'}
            onPress={() => setActiveButton('SOLD')}>
            <styles.TabText active={activeButton === 'SOLD'}>
              거래 완료
            </styles.TabText>
          </styles.Tab>
        </styles.TabBox>
      </styles.TabsContainer>
      <MypageSalesBookListContent
        navigation={navigation}
        usedBooks={usedBooks}
        activeButton={activeButton}
      />

      <Modal visible={isModalOpen} transparent={true} animationType="none">
        <styles.ModalContainer>
          <styles.ModalBox>
            <styles.ModalTitle>
              서비스 이용 제한 대상자로,{'\n'}
              앞으로 30일간 이용이 정지되었어요.
            </styles.ModalTitle>
            <styles.ModalButton onPress={handleModalClose}>
              <styles.ModalButtonText>확인</styles.ModalButtonText>
            </styles.ModalButton>
          </styles.ModalBox>
        </styles.ModalContainer>
      </Modal>
    </styles.Container>
  );
};

export default MypageSalesHistoryLayout;
