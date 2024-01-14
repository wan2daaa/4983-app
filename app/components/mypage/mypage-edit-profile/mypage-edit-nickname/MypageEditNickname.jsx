import * as styles from './MypageEditNickname.styles';

const MypageEditNickname = () => {
  return (
    <styles.Container>
      <styles.Title>닉네임</styles.Title>
      <styles.InputBox>
        <styles.Input placeholder="변경할 닉네임을 작성해 주세요." />
        <styles.Button>
          <styles.ButtonText>중복 확인</styles.ButtonText>
        </styles.Button>
      </styles.InputBox>
    </styles.Container>
  );
};

export default MypageEditNickname;
