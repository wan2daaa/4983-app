import * as styles from './HelpSaleSwiper.styles';
import {Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const HelpSaleSwiper = () => {
  const width = Dimensions.get('window').width;

  return (
    <Carousel
      data={[1, 2, 3, 4]}
      renderItem={({item, index}) => {
        if (index === 0) {
          return <styles.SaleImageOne />;
        } else if (index === 1) {
          return <styles.SaleImageTwo />;
        } else if (index === 2) {
          return <styles.SaleImageThree />;
        } else if (index === 3) {
          return <styles.SaleImageFour />;
        }
      }}
      sliderWidth={width}
      itemWidth={218}
      loop={false}
      inactiveSlideScale={0.95}
      containerCustomStyle={{overflow: 'visible'}}
    />
  );
};

export default HelpSaleSwiper;
