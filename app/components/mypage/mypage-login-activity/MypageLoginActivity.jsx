import * as styles from './MypageLoginActivity.styles';
import LogoutIcon from '@assets/images/mypage/LogoutIcon.svg';
import WithdrawalIcon from '@assets/images/mypage/WithdrawalIcon.svg';
import ChangePasswordIcon from '@assets/images/mypage/ChangePasswordIcon.svg';
import {Modal} from 'react-native';
import {useState} from 'react';
import {UserLogout, UserSecede} from '@/apis/mypage/MypageLoginActivityApi';

const MypageLoginActivity = ({navigation}) => {
  const [isLogoutModal, setIsLogoutModal] = useState(false);
  const [isSecedeModal, setIsSecedeModal] = useState(false);

  const openLogoutModal = () => {
    setIsLogoutModal(!isLogoutModal);
  };
  const closeLogoutModal = () => {
    setIsLogoutModal(false);
  };

  const handleLogout = () => {
    UserLogout();
    setIsLogoutModal(false);
    navigation.navigate('Signin');
  };

  const openWithdrawalModal = () => {
    setIsSecedeModal(!isSecedeModal);
  };

  const closeWithdrawalModal = () => {
    setIsSecedeModal(false);
  };

  const handleSecede = () => {
    UserSecede();
    setIsSecedeModal(false);
    navigation.navigate('Signin');
  };

  return (
    <styles.Container>
      <styles.TitleContainer>
        <styles.Title>로그인 활동</styles.Title>
      </styles.TitleContainer>

      <styles.BoxContainer onPress={openLogoutModal}>
        <LogoutIcon width={31} height={29} />
        <styles.ContentText>로그아웃</styles.ContentText>
      </styles.BoxContainer>

      <styles.BoxContainer onPress={openWithdrawalModal}>
        <WithdrawalIcon width={31} height={28} />
        <styles.ContentText>탈퇴하기</styles.ContentText>
      </styles.BoxContainer>

      <styles.BoxContainer
        onPress={() => navigation.navigate('ChangePassword')}>
        <ChangePasswordIcon width={31} height={23} />
        <styles.ContentText>비밀번호 변경</styles.ContentText>
      </styles.BoxContainer>

      <Modal visible={isLogoutModal} transparent={true} animationType="none">
        <styles.ModalContainer>
          <styles.ModalBox>
            <styles.ModalContentText>
              로그아웃 하시겠어요?
            </styles.ModalContentText>
            <styles.ModalButtonContainer>
              <styles.ModalButton onPress={handleLogout}>
                <styles.ModalButtonText>로그아웃</styles.ModalButtonText>
              </styles.ModalButton>
              <styles.ModalCancelButton onPress={closeLogoutModal}>
                <styles.ModalCancelButtonText>
                  취소
                </styles.ModalCancelButtonText>
              </styles.ModalCancelButton>
            </styles.ModalButtonContainer>
          </styles.ModalBox>
        </styles.ModalContainer>
      </Modal>

      <Modal visible={isSecedeModal} transparent={true} animationType="none">
        <styles.ModalContainer>
          <styles.ModalBox>
            <styles.ModalContentText>
              4983 서비스를 탈퇴하시겠어요?
            </styles.ModalContentText>
            <styles.ModalButtonContainer>
              <styles.ModalButton onPress={handleSecede}>
                <styles.ModalButtonText>탈퇴할래요</styles.ModalButtonText>
              </styles.ModalButton>
              <styles.ModalCancelButton onPress={closeWithdrawalModal}>
                <styles.ModalCancelButtonText>
                  탈퇴 안 할래요
                </styles.ModalCancelButtonText>
              </styles.ModalCancelButton>
            </styles.ModalButtonContainer>
          </styles.ModalBox>
        </styles.ModalContainer>
      </Modal>
    </styles.Container>
  );
};

export default MypageLoginActivity;
