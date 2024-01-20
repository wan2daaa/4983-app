// FIXME. Swiper 수정 필요

import * as styles from './HelpSaleSwiper.styles';
import {Swiper, SwiperSlide} from 'react-native-swiper';
import {View} from 'react-native';

const HelpSaleSwiper = () => {
  const swiperParams = {
    loop: false,
    slidesPerView: 1.5,
    spaceBetween: 13,
  };

  return (
    <View>
      {/*<Swiper {...swiperParams}>*/}
      {/*  <SwiperSlide>*/}
      {/*    <styles.SaleImageOne />*/}
      {/*  </SwiperSlide>*/}
      {/*  <SwiperSlide>*/}
      {/*    <styles.SaleImageTwo />*/}
      {/*  </SwiperSlide>*/}
      {/*  <SwiperSlide>*/}
      {/*    <styles.SaleImageThree />*/}
      {/*  </SwiperSlide>*/}
      {/*  <SwiperSlide>*/}
      {/*    <styles.SaleImageFour />*/}
      {/*  </SwiperSlide>*/}
      {/*</Swiper>*/}
    </View>
  );
};

export default HelpSaleSwiper;
