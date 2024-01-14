import * as styles from './MypageEditPhone.styles';

const MypageEditPhone = () => {
  return (
    <styles.Container>
      <styles.Title>전화번호</styles.Title>
      <styles.InputBox>
        <styles.Input placeholder="010-4487-3122" />
        <styles.Button>
          <styles.ButtonText>전송</styles.ButtonText>
        </styles.Button>
      </styles.InputBox>
    </styles.Container>
  );
};

export default MypageEditPhone;
