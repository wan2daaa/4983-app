import * as styles from './SignupCollegeButton.styles';
import {TouchableOpacity} from 'react-native';

const SignupCollegeButton = ({navigation, selectedCollegeId}) => {
  return (
    <styles.ButtonBox selectedCollegeId={selectedCollegeId}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SignupDepartment', {
            selectedCollegeId: selectedCollegeId,
          });
        }}
        hitSlop={{top: 40, bottom: 40, left: 40, right: 40}}>
        <styles.ButtonText selectedCollegeId={selectedCollegeId}>
          다음
        </styles.ButtonText>
      </TouchableOpacity>
    </styles.ButtonBox>
  );
};

export default SignupCollegeButton;
