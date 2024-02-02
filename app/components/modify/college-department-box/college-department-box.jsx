import * as styles from '@components/modify/college-department-box/college-department-box.styles';
import SelectOptionButton from '@assets/images/sell/select-option-button.svg';
import {Text, View} from 'react-native';
import {Categories} from '@data/categories';

export const CollegeDepartmentBox = ({
  navigation,
  isCollegeLiberalArtsClicked,
  setIsCollegeLiberalArtsClicked,
  departmentLabel,
  setDepartmentLabel,
  setDepartmentValue,
  collegeLiberalArtLabel,
  setCollegeLiberalArtLabel,
  setCollegeLiberalArtValue,
  collegeLiberalArtValue,
  usedBookId,
}) => {
  const college =
    Categories.find(
      category =>
        category.value === collegeLiberalArtValue && !category.isNotCollege,
    ) ?? -1;

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

            navigation.navigate('Department', {
              selectedCollegeId: college.id,
              isSell: false,
              usedBookId: usedBookId,
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
              navigation.navigate('College', {
                isSell: false,
                usedBookId: usedBookId,
              });
            }}>
            <styles.CollegeOptionText>단과대</styles.CollegeOptionText>
          </styles.CollegeOptionTouchableOpacity>
          <styles.LiberalArtsTouchableOpacity
            onPress={() => {
              setCollegeLiberalArtLabel('교양');
              setCollegeLiberalArtValue('GE');
              setDepartmentLabel('');
              setDepartmentValue('GE');
              setIsCollegeLiberalArtsClicked(false);
            }}>
            <styles.LiberalArtsText>교양</styles.LiberalArtsText>
          </styles.LiberalArtsTouchableOpacity>
        </styles.CollegeLiberalArtsOptionBox>
      )}
    </View>
  );
};
