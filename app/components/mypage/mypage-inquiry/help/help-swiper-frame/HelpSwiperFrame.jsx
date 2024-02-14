import * as styles from './HelpSwiperFrame.styles';
import HelpSaleSwiper from '@components/mypage/mypage-inquiry/help/help-swiper-content/HelpSale/HelpSaleSwiper';
import HelpPurchaseSwiper from '@components/mypage/mypage-inquiry/help/help-swiper-content/HelpPurchase/HelpPurchaseSwiper';
import HelpGuideSwiper from '@components/mypage/mypage-inquiry/help/help-swiper-content/HelpGuide/HelpGuideSwiper';

const HelpSwiperFrame = ({navigation, isSignup}) => {
  return (
    <styles.HelpBox>
      <styles.HelpTitle>판매방법</styles.HelpTitle>
      <styles.HelpFrame>
        <HelpSaleSwiper />
      </styles.HelpFrame>
      <styles.HelpTitle>구매방법</styles.HelpTitle>
      <styles.HelpFrame>
        <HelpPurchaseSwiper />
      </styles.HelpFrame>
      <styles.HelpTitle>꼭 지켜주세요!</styles.HelpTitle>
      <styles.HelpFrame>
        <HelpGuideSwiper />
      </styles.HelpFrame>
      <styles.ButtonBox
        onPress={() => {
          isSignup
            ? navigation.navigate('BottomTabs')
            : navigation.navigate('Home');
        }}
        hitSlop={{top: 20, bottom: 20}}>
        <styles.ButtonText>시작하러 가기</styles.ButtonText>
      </styles.ButtonBox>
    </styles.HelpBox>
  );
};

export default HelpSwiperFrame;
