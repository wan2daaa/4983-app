import {ScrollView, TouchableWithoutFeedback} from 'react-native';
import * as styles from './SignupCollegeLayout.styles';

const SignupCollegeLayout = ({navigation}) => {
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
        <ScrollView></ScrollView>
      </TouchableWithoutFeedback>
    </styles.Container>
  );
};

export default SignupCollegeLayout;
