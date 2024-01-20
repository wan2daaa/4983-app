import * as styles from './HelpLayout.styles';
import {Image} from 'react-native';
import HelpImage from '@assets/images/mypage/help/HelpImage.png';
import {ScrollView} from 'react-native';
import HelpSwiperFrame from '@components/mypage/mypage-inquiry/help/help-swiper-frame/HelpSwiperFrame';

const HelpLayout = ({navigation}) => {
  return (
    <styles.Container>
      <ScrollView>
        <Image source={HelpImage} style={{alignSelf: 'center'}} />
        <HelpSwiperFrame navigation={navigation} />
      </ScrollView>
    </styles.Container>
  );
};

export default HelpLayout;
