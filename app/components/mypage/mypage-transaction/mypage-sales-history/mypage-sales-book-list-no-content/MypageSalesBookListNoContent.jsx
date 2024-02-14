import * as styles from './MypageSalesBookListNoContent.styles';

const MypageSalesBookListNoContent = ({navigation, activeButton}) => {
  const statusText = activeButton === 'SALE' ? '판매' : '거래';

  return (
    <styles.Container>
      <styles.Content>
        아직 {statusText} 이력이 없어요! {'\n'}
        상경관에서 쉽게 전공서적을 {statusText}해보세요!
      </styles.Content>
      <styles.Button
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <styles.ButtonText>{statusText}하러 가기</styles.ButtonText>
      </styles.Button>
    </styles.Container>
  );
};

export default MypageSalesBookListNoContent;
