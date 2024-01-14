import * as styles from './ChangePasswordInput.styles';

const ChangePasswordInput = () => {
  return (
    <styles.InputContainer>
      <styles.InputBox>
        <styles.Title>현재 비밀번호</styles.Title>
        <styles.InputButtonBox>
          <styles.Input placeholder="현재 비밀번호를 입력해 주세요." />
          <styles.InputButton>
            <styles.InputButtonText>확인</styles.InputButtonText>
          </styles.InputButton>
        </styles.InputButtonBox>
      </styles.InputBox>

      <styles.InputBox>
        <styles.Title>새로운 비밀번호</styles.Title>
        <styles.InputButtonBox>
          <styles.Input placeholder="새로운 비밀번호를 입력해 주세요." />
          <styles.InputButton>
            <styles.InputButtonText>확인</styles.InputButtonText>
          </styles.InputButton>
        </styles.InputButtonBox>
      </styles.InputBox>

      <styles.InputBox>
        <styles.Title>비밀번호 확인</styles.Title>
        <styles.InputButtonBox>
          <styles.Input placeholder="새로운 비밀번호를 다시 입력해 주세요." />
          <styles.InputButton>
            <styles.InputButtonText>확인</styles.InputButtonText>
          </styles.InputButton>
        </styles.InputButtonBox>
      </styles.InputBox>
    </styles.InputContainer>
  );
};

export default ChangePasswordInput;
