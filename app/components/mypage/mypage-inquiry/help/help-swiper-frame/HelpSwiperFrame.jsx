import * as styles from './HelpSwiperFrame.styles';
import HelpSaleSwiper from '@components/mypage/mypage-inquiry/help/help-swiper-content/HelpSaleSwiper';

const HelpSwiperFrame = ({navigation}) => {
  return (
    <styles.HelpBox>
      <styles.HelpTitle>판매방법</styles.HelpTitle>
      <styles.HelpFrame>
        <HelpSaleSwiper />
      </styles.HelpFrame>
      <styles.HelpTitle>구매방법</styles.HelpTitle>
      <styles.HelpFrame></styles.HelpFrame>
      <styles.HelpTitle>꼭 지켜주세요!</styles.HelpTitle>
      <styles.HelpFrame></styles.HelpFrame>
      <styles.ButtonBox
        onPress={() => navigation.navigate('홈')}
        hitSlop={{top: 20, bottom: 20}}>
        <styles.ButtonText>시작하러 가기</styles.ButtonText>
      </styles.ButtonBox>
    </styles.HelpBox>
  );
};

export default HelpSwiperFrame;
