import * as styles from './HelpLayout.styles';
import {Image} from 'react-native';
import HelpImage from '@assets/images/mypage/HelpImage.png';
import {ScrollView} from 'react-native';

const HelpLayout = ({navigation}) => {
  return (
    <styles.Container>
      <ScrollView>
        <Image source={HelpImage} style={{alignSelf: 'center'}} />
      </ScrollView>
    </styles.Container>
  );
};

export default HelpLayout;
