import * as styles from './MypageSalesHistoryLayout.styles';
import {useEffect, useState} from 'react';
import {getSalesUsedBookList} from '@/apis/mypage/MypageTransactionApi';
import MypageSalesBookListContent from '@components/mypage/mypage-transaction/mypage-sales-history/mypage-sales-book-list-content/MypageSalesBookListContent';

const MypageSalesHistoryLayout = ({navigation}) => {
  const [activeButton, setActiveButton] = useState('SALE');
  const [usedBooks, setUsedBooks] = useState([]);

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
    </styles.Container>
  );
};

export default MypageSalesHistoryLayout;
