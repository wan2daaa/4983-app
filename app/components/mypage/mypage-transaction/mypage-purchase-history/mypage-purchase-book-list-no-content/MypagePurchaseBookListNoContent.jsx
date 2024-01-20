import * as styles from './MypagePurchaseBookListNoContent.styles';

const MypagePurchaseBookListNoContent = ({navigation}) => {
  return (
    <styles.Container>
      <styles.Content>
        아직 구매 이력이 없어요! {'\n'}
        상경관에서 쉽게 전공서적을 구매해보세요!
      </styles.Content>
      <styles.Button
        onPress={() => {
          navigation.navigate('홈');
        }}>
        <styles.ButtonText>구매하러 가기</styles.ButtonText>
      </styles.Button>
    </styles.Container>
  );
};

export default MypagePurchaseBookListNoContent;
