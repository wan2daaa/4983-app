import * as styles from './MypageLayout.styles';
import BackButton from '@assets/images/common/BackButton.svg';
import {useEffect, useState} from 'react';
import MypageTransaction from '@components/mypage/mypage-transaction/MypageTransaction';
import {Image, Modal, ScrollView} from 'react-native';
import MypageInquiry from '@components/mypage/mypage-inquiry/MypageInquiry';
import MypageLoginActivity from '@components/mypage/mypage-login-activity/MypageLoginActivity';
import {getMemberInfo, PasswordCheck} from '@/apis/mypage/MypageApi';

const MypageLayout = ({navigation}) => {
  const [isModal, setIsModal] = useState(false);
  const [nickname, setNickname] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordMatch, setIsPasswordMatch] = useState(null);

  useEffect(() => {
    const getMember = navigation.addListener('focus', () => {
      getMemberInfo().then(response => {
        setNickname(response.nickname);
        setImageUrl(response.imageUrl);
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

  const handlePasswordCheck = () => {
    PasswordCheck(password).then(res => {
      setIsPasswordMatch(res);
      if (res === true) {
        navigation.navigate('MypageEditProfile');
        handleModalClose();
      }
    });
  };

  return (
    <styles.Container>
      <styles.Header>
        <styles.BackButton
          onPress={() => {
            navigation.goBack();
          }}>
          <BackButton />
        </styles.BackButton>
        <styles.HeaderTitle>마이페이지</styles.HeaderTitle>
      </styles.Header>
      <ScrollView>
        <styles.ProfileContainer>
          <styles.ProfileBox>
            <styles.ProfileImage>
              <Image
                source={{
                  uri:
                    imageUrl ||
                    'https://4983-s3.s3.ap-northeast-2.amazonaws.com/baseImage.png',
                }}
                width={84}
                height={84}
                style={{borderRadius: 42}}
              />
            </styles.ProfileImage>
            <styles.NameBox>
              <styles.Name>{nickname}</styles.Name>
            </styles.NameBox>
            <styles.EditProfileButton
              onPress={handleModalOpen}
              hitSlop={{top: 10, bottom: 10, left: 20, right: 20}}>
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
            <styles.ModalInputBox>
              <styles.ModalInput
                id={password}
                type="password"
                secureTextEntry={true}
                onChangeText={setPassword}
                placeholder="비밀번호를 입력해 주세요."
              />
              {isPasswordMatch === false && (
                <styles.ErrorMessage>
                  비밀번호가 올바르지 않습니다.
                </styles.ErrorMessage>
              )}
            </styles.ModalInputBox>
            <styles.ModalButtonBox>
              <styles.ModalCancelButton onPress={handleModalClose}>
                <styles.ModalCancelButtonText>
                  취소
                </styles.ModalCancelButtonText>
              </styles.ModalCancelButton>
              <styles.ModalButton onPress={handlePasswordCheck}>
                <styles.ModalButtonText>확인</styles.ModalButtonText>
              </styles.ModalButton>
            </styles.ModalButtonBox>
            <styles.FindPasswordButton
              onPress={() => {
                handleModalClose();
                navigation.navigate('FindPassword');
              }}>
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
