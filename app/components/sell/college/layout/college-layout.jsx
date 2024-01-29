import {ScrollView, TouchableWithoutFeedback, View} from 'react-native';
import * as styles from '@components/sell/college/layout/college-layout.styles';
import {Categories} from '@data/categories';
import CheckedButton from '@assets/images/signup/CheckedButton.svg';
import UncheckedButton from '@assets/images/signup/UnCheckedButton.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const CollegeLayout = ({
  navigation,
  setSellCollege,
  isSell,
  usedBookId,
}) => {
  return (
    <styles.Container>
      <TouchableWithoutFeedback>
        <ScrollView>
          <View>
            {Categories.map((category, index) =>
              !category.isNotCollege ? (
                <styles.CollegeBox
                  key={category.id}
                  onPress={() => {
                    setSellCollege(category.value);
                    navigation.navigate('Department', {
                      selectedCollegeId: category.id,
                      isSell: isSell,
                      usedBookId,
                    });
                  }}>
                  <styles.CollegeText>{category.name}</styles.CollegeText>
                </styles.CollegeBox>
              ) : (
                ''
              ),
            )}
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </styles.Container>
  );
};
