import * as styles from './MypageLoginActivity.styles';
import LogoutIcon from '@assets/images/mypage/LogoutIcon.svg';
import WithdrawalIcon from '@assets/images/mypage/WithdrawalIcon.svg';
import ChangePasswordIcon from '@assets/images/mypage/ChangePasswordIcon.svg';
import {Modal} from 'react-native';
import {useState} from 'react';

const MypageLoginActivity = ({navigation}) => {
  const [isLogoutModal, setIsLogoutModal] = useState(false);
  const [isWithdrawalModal, setIsWithdrawalModal] = useState(false);

  const handleLogout = () => {
    setIsLogoutModal(!isLogoutModal);
  };
  const closeLogoutModal = () => {
    setIsLogoutModal(false);
  };

  const handleWithdrawal = () => {
    setIsWithdrawalModal(!isWithdrawalModal);
  };

  const closeWithdrawalModal = () => {
    setIsWithdrawalModal(false);
  };

  return (
    <styles.Container>
      <styles.TitleContainer>
        <styles.Title>로그인 활동</styles.Title>
      </styles.TitleContainer>

      <styles.BoxContainer onPress={handleLogout}>
        <LogoutIcon width={31} height={29} />
        <styles.ContentText>로그아웃</styles.ContentText>
      </styles.BoxContainer>

      <styles.BoxContainer onPress={handleWithdrawal}>
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
              <styles.ModalButton>
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

      <Modal
        visible={isWithdrawalModal}
        transparent={true}
        animationType="none">
        <styles.ModalContainer>
          <styles.ModalBox>
            <styles.ModalContentText>
              4983 서비스를 탈퇴하시겠어요?
            </styles.ModalContentText>
            <styles.ModalButtonContainer>
              <styles.ModalButton>
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
