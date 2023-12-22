import * as styles from './FindLinkBox.styles';
import {TouchableOpacity} from 'react-native';

const FindLinkBox = ({navigation}) => {
  return (
    <styles.Box>
      <styles.FindLinkContainer>
        <TouchableOpacity
          onPress={() => navigation.navigate('FindPassword')}
          hitSlop={{top: 20, bottom: 20}}>
          <styles.FindText>비밀번호 찾기</styles.FindText>
        </TouchableOpacity>
        <styles.Line>|</styles.Line>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignupProfile')}
          hitSlop={{top: 20, bottom: 20}}>
          <styles.SignupText>회원가입</styles.SignupText>
        </TouchableOpacity>
      </styles.FindLinkContainer>
    </styles.Box>
  );
};

export default FindLinkBox;
