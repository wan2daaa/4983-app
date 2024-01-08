import {ScrollView, TouchableWithoutFeedback, View} from 'react-native';
import * as styles from './SignupDepartmentLayout.styles';
import {Categories} from '@data/categories';
import UncheckedButton from '@assets/images/signup/UnCheckedButton.svg';
import CheckedButton from '@assets/images/signup/CheckedButton.svg';
import SignupCollegeButton from '@components/signup/signup-college/signup-college-button/SignupCollegeButton';
import {useEffect} from 'react';
import SignupDepartmentButton from '@components/signup/signup-department/signup-department-button/SignupDepartmentButton';

const SignupDepartmentLayout = ({
  navigation,
  selectedDepartmentId,
  setSelectedDepartmentId,
  departments,
}) => {
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
          <View>
            {departments.map((department, index) => (
              <styles.CollegeBox
                key={department.id}
                onPress={() => {
                  selectedDepartmentId !== -1
                    ? setSelectedDepartmentId(department.id)
                    : setSelectedDepartmentId(-1);
                }}>
                {selectedDepartmentId === department.id ? (
                  <styles.Button>
                    <CheckedButton />
                  </styles.Button>
                ) : (
                  <styles.Button
                    onPress={() => {
                      setSelectedDepartmentId(department.id);
                    }}>
                    <UncheckedButton />
                  </styles.Button>
                )}
                <styles.CollegeText>{department.name}</styles.CollegeText>
              </styles.CollegeBox>
            ))}
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
      <SignupDepartmentButton
        navigation={navigation}
        selectedCollegeId={selectedDepartmentId}
      />
    </styles.Container>
  );
};

export default SignupDepartmentLayout;
