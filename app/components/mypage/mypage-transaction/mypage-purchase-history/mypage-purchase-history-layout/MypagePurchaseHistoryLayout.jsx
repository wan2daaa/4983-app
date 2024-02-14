import * as styles from './MypagePurchaseHistoryLayout.styles';
import MypagePurchaseBookListContent from '@components/mypage/mypage-transaction/mypage-purchase-history/mypage-purchase-book-list-content/MypagePurchaseBookListContent';
import {useEffect, useState} from 'react';
import {getPurchaseUsedBookList} from '@/apis/mypage/MypageTransactionApi';
import {getWithdraw} from '@/apis/auth/member/MemberApi';
import {useIsFocused} from '@react-navigation/native';
import {Modal} from 'react-native';

const MypagePurchaseHistoryLayout = ({navigation}) => {
  const isFocused = useIsFocused();
  const [usedBooks, setUsedBooks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPurchaseUsedBookList();
        setUsedBooks(data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();
  }, []);

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
      <MypagePurchaseBookListContent
        navigation={navigation}
        usedBooks={usedBooks}
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

export default MypagePurchaseHistoryLayout;
