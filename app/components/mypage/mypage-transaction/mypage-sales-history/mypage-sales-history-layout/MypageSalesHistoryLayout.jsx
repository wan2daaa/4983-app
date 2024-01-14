import * as styles from './MypageSalesHistoryLayout.styles';

const MypageSalesHistoryLayout = ({navigation}) => {
  return (
    <styles.Container>
      <styles.TabsContainer>
        <styles.TabBox>
          <styles.Tab hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
            <styles.TabText>판매 중</styles.TabText>
          </styles.Tab>
        </styles.TabBox>
        <styles.TabBox>
          <styles.Tab hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
            <styles.TabText>거래 완료</styles.TabText>
          </styles.Tab>
        </styles.TabBox>
      </styles.TabsContainer>
    </styles.Container>
  );
};

export default MypageSalesHistoryLayout;
