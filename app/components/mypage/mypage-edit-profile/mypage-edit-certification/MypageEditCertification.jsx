import * as styles from './MypageEditCertification.styles';

const MypageEditCertification = () => {
  return (
    <styles.Container>
      <styles.Title>인증번호</styles.Title>
      <styles.InputBox>
        <styles.Input placeholder="인증 번호를 입력해 주세요." />
        <styles.Button>
          <styles.ButtonText>확인</styles.ButtonText>
        </styles.Button>
      </styles.InputBox>
    </styles.Container>
  );
};

export default MypageEditCertification;
