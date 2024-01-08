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
        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
        <styles.ButtonText selectedCollegeId={selectedCollegeId}>
          다음
        </styles.ButtonText>
      </TouchableOpacity>
    </styles.ButtonBox>
  );
};

export default SignupCollegeButton;
