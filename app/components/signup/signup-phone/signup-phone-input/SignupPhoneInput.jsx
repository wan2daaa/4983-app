import * as styles from './SignupPhoneInput.styles';
import {TouchableOpacity} from 'react-native';

const SignupPhoneInput = () => {
  return (
    <styles.Container>
      <styles.InputContainer>
        <styles.InputTitle>휴대폰 번호</styles.InputTitle>
        <styles.InputButtonBox>
          <styles.Input placeholder="번호를 입력해 주세요." />
          <styles.ButtonBox>
            <TouchableOpacity hitSlop={{top: 20, bottom: 20}}>
              <styles.ButtonText>전송</styles.ButtonText>
            </TouchableOpacity>
          </styles.ButtonBox>
        </styles.InputButtonBox>
      </styles.InputContainer>
      <styles.InputContainer>
        <styles.InputTitle>인증 번호</styles.InputTitle>
        <styles.InputButtonBox>
          <styles.Input placeholder="인증 번호를 입력해 주세요." />
          <styles.ButtonBox>
            <TouchableOpacity hitSlop={{top: 20, bottom: 20}}>
              <styles.ButtonText>확인</styles.ButtonText>
            </TouchableOpacity>
          </styles.ButtonBox>
        </styles.InputButtonBox>
      </styles.InputContainer>
    </styles.Container>
  );
};

export default SignupPhoneInput;
