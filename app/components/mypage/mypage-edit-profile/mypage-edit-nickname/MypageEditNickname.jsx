import * as styles from './MypageEditNickname.styles';
import {nickNameDuplicates} from '@/apis/mypage/MypageEditProfileApi';

const MypageEditNickname = ({
  nickname,
  setNickname,
  isNicknameDuplicate,
  setIsNicknameDuplicate,
  setEditButtonDisabled,
}) => {
  const handleDuplicateCheck = async () => {
    try {
      const {nicknameDuplicate} = await nickNameDuplicates(nickname);
      setIsNicknameDuplicate(nicknameDuplicate);
      setEditButtonDisabled(nicknameDuplicate);
      console.log('눌림눌림', nicknameDuplicate);
    } catch (error) {}
  };

  const updateNicknames = value => {
    setNickname(value);
    if (value.length === 0) {
      setIsNicknameDuplicate(null);
    }
  };

  const isNicknameValid = nickname.length > 0;

  return (
    <styles.Container>
      <styles.Title>닉네임</styles.Title>
      <styles.InputBox>
        <styles.Input
          id={nickname}
          onChangeText={updateNicknames}
          disabled={isNicknameDuplicate === null ? false : !isNicknameDuplicate}
          type="text"
          placeholder="변경할 닉네임을 작성해 주세요."
        />
        <styles.Button
          disabled={!isNicknameValid}
          onPress={handleDuplicateCheck}
          isNicknameValid={isNicknameValid}>
          <styles.ButtonText isNicknameValid={isNicknameValid}>
            중복 확인
          </styles.ButtonText>
        </styles.Button>
      </styles.InputBox>
      {!isNicknameValid
        ? ''
        : isNicknameDuplicate !== null && (
            <>
              {isNicknameDuplicate ? (
                <styles.Error>사용 중인 닉네임이에요!</styles.Error>
              ) : (
                <styles.Success>사용 가능한 닉네임이에요!</styles.Success>
              )}
            </>
          )}
    </styles.Container>
  );
};

export default MypageEditNickname;
