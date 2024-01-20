import * as styles from './ChangePasswordButton.styles';
import {UseApiPasswordChange} from '@/apis/mypage/MypageLoginActivityApi';

const ChangePasswordButton = ({navigation, isClicked, newPasswords}) => {
  const handleChangePassword = () => {
    UseApiPasswordChange(newPasswords)
      .then(() => {
        navigation.navigate('마이페이지');
      })
      .catch(err => {
        navigation.navigate.reload();
      });
  };
  return (
    <styles.ButtonContainer
      style={{
        backgroundColor: isClicked ? 'rgba(2, 184, 120, 0.80)' : '#D1D1D1',
      }}
      disabled={!isClicked}
      onPress={handleChangePassword}>
      <styles.ButtonText style={{color: isClicked ? '#FFF' : '#707479'}}>
        변경하기
      </styles.ButtonText>
    </styles.ButtonContainer>
  );
};

export default ChangePasswordButton;
