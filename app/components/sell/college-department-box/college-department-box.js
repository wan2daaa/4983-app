import * as styles from '@components/sell/college-department-box/college-department-box.styles';
import SelectOptionButton from '@assets/images/sell/select-option-button.svg';
import {Text, View} from 'react-native';
import {Categories} from '@data/categories';

export const CollegeDepartmentBox = ({
  navigation,
  isCollegeLiberalArtsClicked,
  setIsCollegeLiberalArtsClicked,
  departmentLabel,
  collegeLiberalArtLabel,
  setCollegeLiberalArtLabel,
  setCollegeLiberalArtValue,
  collegeLiberalArtValue,
}) => {
  const college =
    Categories.find(category => category.value === collegeLiberalArtValue) ??
    -1;

  return (
    <View style={{zIndex: 1100}}>
      <styles.Box>
        <styles.CollegeDepartmentBox
          onPress={() => {
            setIsCollegeLiberalArtsClicked(!isCollegeLiberalArtsClicked);
          }}>
          <styles.CollegeDepartmentText>
            {collegeLiberalArtLabel}
          </styles.CollegeDepartmentText>
          <SelectOptionButton />
        </styles.CollegeDepartmentBox>
        <styles.CollegeDepartmentBox
          onPress={() => {
            if (college === -1) {
              return;
            }

            navigation.navigate('SellDepartment', {
              selectedCollegeId: college.id,
            });
          }}>
          <styles.CollegeDepartmentText>
            {departmentLabel}
          </styles.CollegeDepartmentText>
          <SelectOptionButton />
        </styles.CollegeDepartmentBox>
      </styles.Box>
      {isCollegeLiberalArtsClicked && (
        <styles.CollegeLiberalArtsOptionBox>
          <styles.CollegeOptionTouchableOpacity
            onPress={() => {
              setIsCollegeLiberalArtsClicked(false);
              navigation.navigate('SellCollege');
            }}>
            <styles.CollegeOptionText>단과대</styles.CollegeOptionText>
          </styles.CollegeOptionTouchableOpacity>
          <styles.LiberalArtsTouchableOpacity
            onPress={() => {
              setCollegeLiberalArtLabel('교양');
              setCollegeLiberalArtValue('LIBERAL_ARTS');
              setIsCollegeLiberalArtsClicked(false);
            }}>
            <styles.LiberalArtsText>교양</styles.LiberalArtsText>
          </styles.LiberalArtsTouchableOpacity>
        </styles.CollegeLiberalArtsOptionBox>
      )}
    </View>
  );
};
