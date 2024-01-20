import * as styles from './MypagePurchaseHistoryLayout.styles';
import MypagePurchaseBookListContent from '@components/mypage/mypage-transaction/mypage-purchase-history/mypage-purchase-book-list-content/MypagePurchaseBookListContent';
import {useEffect, useState} from 'react';
import {getPurchaseUsedBookList} from '@/apis/mypage/MypageTransactionApi';

const MypagePurchaseHistoryLayout = ({navigation}) => {
  const [usedBooks, setUsedBooks] = useState([]);

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

  return (
    <styles.Container>
      <MypagePurchaseBookListContent
        navigation={navigation}
        usedBooks={usedBooks}
      />
    </styles.Container>
  );
};

export default MypagePurchaseHistoryLayout;
