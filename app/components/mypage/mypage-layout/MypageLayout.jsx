import * as styles from './MypageLayout.styles';
import BackButton from '@assets/images/common/BackButton.svg';
import {useEffect, useLayoutEffect, useState} from 'react';
import MypageTransaction from '@components/mypage/mypage-transaction/MypageTransaction';
import {Modal, ScrollView} from 'react-native';
import MypageInquiry from '@components/mypage/mypage-inquiry/MypageInquiry';
import MypageLoginActivity from '@components/mypage/mypage-login-activity/MypageLoginActivity';
import {getMemberInfo} from '@/apis/mypage/MypageApi';

const MypageLayout = ({navigation}) => {
  const [isModal, setIsModal] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    const getMember = navigation.addListener('focus', () => {
      getMemberInfo().then(response => {
        setImageUrl(response.imageUrl);
        setNickname(response.nickname);
      });
    });

    return getMember;
  }, [navigation]);

  const handleModalOpen = () => {
    setIsModal(!isModal);
  };
  const handleModalClose = () => {
    setIsModal(false);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerShadowVisible: true,
      headerTitle: '마이페이지',
      headerTitleAlign: 'center',
      headerBackTitleVisible: false,
      headerTintColor: '#414141',
      headerLeft: () => (
        <BackButton
          width={40}
          height={40}
          onPress={() => navigation.goBack()}
        />
      ),
    });
  }, [navigation]);

  return (
    <styles.Container>
      <ScrollView>
        <styles.ProfileContainer>
          <styles.ProfileBox>
            <styles.ProfileImage />
            <styles.Name>{nickname}</styles.Name>
            <styles.EditProfileButton onPress={handleModalOpen}>
              <styles.EditProfileButtonText>
                회원 정보 수정
              </styles.EditProfileButtonText>
            </styles.EditProfileButton>
          </styles.ProfileBox>
        </styles.ProfileContainer>
        <MypageTransaction navigation={navigation} />
        <MypageInquiry navigation={navigation} />
        <MypageLoginActivity navigation={navigation} />
      </ScrollView>

      <Modal visible={isModal} transparent={true} animationType="none">
        <styles.ModalContainer>
          <styles.ModalBox>
            <styles.ModalTitle>
              회원님의 정보를 확인하기 위해 {'\n'}
              <styles.ModalTitleColor>사고파삼 비밀번호</styles.ModalTitleColor>
              를 입력해 주세요!
            </styles.ModalTitle>
            <styles.ModalInput placeholder="비밀번호를 입력해 주세요." />
            <styles.ModalButtonBox>
              <styles.ModalCancelButton onPress={handleModalClose}>
                <styles.ModalCancelButtonText>
                  취소
                </styles.ModalCancelButtonText>
              </styles.ModalCancelButton>
              <styles.ModalButton
                onPress={() => {
                  navigation.navigate('MypageEditProfile');
                  handleModalClose();
                }}>
                <styles.ModalButtonText>확인</styles.ModalButtonText>
              </styles.ModalButton>
            </styles.ModalButtonBox>
            <styles.FindPasswordButton>
              <styles.FindPasswordButtonText>
                비밀번호가 기억나지 않는다면?
              </styles.FindPasswordButtonText>
            </styles.FindPasswordButton>
          </styles.ModalBox>
        </styles.ModalContainer>
      </Modal>
    </styles.Container>
  );
};

export default MypageLayout;
