import {Text, View} from 'react-native';
import BackButton from '@assets/images/common/BackButton.svg';
import * as styles from '@components/search/layout/search-layout.styles';

export const SearchLayout = ({navigation}) => {
  return (
    <styles.Container>
      <styles.HeaderContainer>
        <styles.HeaderText></styles.HeaderText>
        <styles.BackButtonTouchableOpacity>
          <BackButton
            width={40}
            height={40}
            onPress={() => navigation.goBack()}
          />
        </styles.BackButtonTouchableOpacity>
      </styles.HeaderContainer>
      <Text>asd</Text>
    </styles.Container>
  );
};
