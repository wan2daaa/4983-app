import * as styles from './MypageTransaction.styles';
import SalesIcon from '@assets/images/mypage/SalesHistoryIcon.svg';
import PurchaseIcon from '@assets/images/mypage/PurchaseHistoryIcon.svg';

const MypageTransaction = ({navigation}) => {
  return (
    <styles.Container>
      <styles.TitleContainer>
        <styles.Title>나의 거래</styles.Title>
      </styles.TitleContainer>

      <styles.BoxContainer
        onPress={() => {
          navigation.navigate('MypageSalesHistory');
        }}>
        <SalesIcon width={27} height={26} />
        <styles.ContentText>판매 내역</styles.ContentText>
      </styles.BoxContainer>

      <styles.BoxContainer
        onPress={() => {
          navigation.navigate('MypagePurchaseHistory');
        }}>
        <PurchaseIcon width={27} height={27} />
        <styles.ContentText>구매 내역</styles.ContentText>
      </styles.BoxContainer>
    </styles.Container>
  );
};

export default MypageTransaction;
