import {ScrollView, TouchableWithoutFeedback, View} from 'react-native';
import * as styles from './SignupCollegeLayout.styles';
import {Categories} from '@data/categories';
import UncheckedButton from '@assets/images/signup/UnCheckedButton.svg';
import CheckedButton from '@assets/images/signup/CheckedButton.svg';
import SignupCollegeButton from '@components/signup/signup-college/signup-college-button/SignupCollegeButton';
import {useEffect} from 'react';
import {useRecoilState} from 'recoil';

const SignupCollegeLayout = ({
  navigation,
  selectedCollegeId,
  setSelectedCollegeId,
}) => {
  useEffect(() => {
    console.log('selectedCollegeId: ', selectedCollegeId);
  }, [selectedCollegeId]);

  return (
    <styles.Container>
      <styles.TitleBold>
        현재 재학 중인{'\n'}
        <styles.TitleColor>학과</styles.TitleColor>를 선택해 주세요.
      </styles.TitleBold>
      <styles.Title>
        입력해주신 학과를 토대로{'\n'}
        알맞는 서적 정보를 제공해드려요!
      </styles.Title>
      <TouchableWithoutFeedback>
        <ScrollView>
          <View style={styles.container}>
            {Categories.map((category, index) =>
              !category.isNotCollege ? (
                <styles.CollegeBox
                  key={category.id}
                  onPress={() => {
                    selectedCollegeId !== -1
                      ? setSelectedCollegeId(category.id)
                      : setSelectedCollegeId(-1);
                  }}>
                  {selectedCollegeId === category.id ? (
                    <styles.Button>
                      <CheckedButton />
                    </styles.Button>
                  ) : (
                    <styles.Button
                      onPress={() => {
                        setSelectedCollegeId(category.id);
                      }}>
                      <UncheckedButton />
                    </styles.Button>
                  )}
                  <styles.CollegeText>{category.name}</styles.CollegeText>
                </styles.CollegeBox>
              ) : (
                ''
              ),
            )}
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
      <SignupCollegeButton
        navigation={navigation}
        selectedCollegeId={selectedCollegeId}
      />
    </styles.Container>
  );
};

export default SignupCollegeLayout;
