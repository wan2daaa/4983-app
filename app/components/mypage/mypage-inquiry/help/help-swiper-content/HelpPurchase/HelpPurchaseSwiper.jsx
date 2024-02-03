import * as styles from './HelpPurchaseSwiper.styles';
import {Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const HelpPurchaseSwiper = () => {
  const width = Dimensions.get('window').width;

  return (
    <Carousel
      data={[1, 2, 3, 4]}
      renderItem={({item, index}) => {
        if (index === 0) {
          return <styles.PurchaseImageOne style={{width: 218, height: 309}} />;
        } else if (index === 1) {
          return <styles.PurchaseImageTwo style={{width: 218, height: 309}} />;
        } else if (index === 2) {
          return (
            <styles.PurchaseImageThree style={{width: 218, height: 309}} />
          );
        } else if (index === 3) {
          return <styles.PurchaseImageFour style={{width: 218, height: 309}} />;
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

export default HelpPurchaseSwiper;
