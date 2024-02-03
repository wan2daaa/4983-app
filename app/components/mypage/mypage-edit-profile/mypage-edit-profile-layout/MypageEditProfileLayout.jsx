import {
  Image,
  Modal,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import * as styles from './MypageEditProfileLayout.styles';
import {useEffect, useLayoutEffect, useState} from 'react';
import MypageEditNickname from '@components/mypage/mypage-edit-profile/mypage-edit-nickname/MypageEditNickname';
import MypageEditAccount from '@components/mypage/mypage-edit-profile/mypage-edit-account/MypageEditAccount';
import MypageEditPhone from '@components/mypage/mypage-edit-profile/mypage-edit-phone/MypageEditPhone';
import MypageEditCertification from '@components/mypage/mypage-edit-profile/mypage-edit-certification/MypageEditCertification';
import {
  EditProfile,
  ImageDelete,
  mypageGetMemberInfo,
} from '@/apis/mypage/MypageEditProfileApi';
import PhotoEdit from '@assets/images/mypage/PhotoEditIcon.svg';
import {launchImageLibrary} from 'react-native-image-picker';

const MypageEditProfileLayout = ({navigation}) => {
  const [imageUrl, setImageUrl] = useState('');
  const [isModal, setIsModal] = useState(false);
  const [uploadedImageUrl, setUploadedImageUrl] = useState('');
  const [currentNickname, setCurrentNickname] = useState('');
  const [nickname, setNickname] = useState('');
  const [currentAccountBank, setCurrentAccountBank] = useState('');
  const [accountBank, setAccountBank] = useState('');
  const [currentAccountNumber, setCurrentAccountNumber] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [currentPhoneNumber, setCurrentPhoneNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isNicknameDuplicate, setIsNicknameDuplicate] = useState(null);
  const [verificationSuccess, setVerificationSuccess] = useState(false);
  const [editButtonDisabled, setEditButtonDisabled] = useState(true);
  const [verificationCode, setVerificationCode] = useState('');
  const [file, setFile] = useState({});

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <styles.EditButton
          onPress={handleRegistration}
          editButtonDisabled={editButtonDisabled}
          disabled={editButtonDisabled}>
          <styles.EditButtonText editButtonDisabled={editButtonDisabled}>
            수정하기
          </styles.EditButtonText>
        </styles.EditButton>
      ),
    });
  }, [navigation, editButtonDisabled]);

  useEffect(() => {
    const profileGetMember = navigation.addListener('focus', () => {
      mypageGetMemberInfo().then(res => {
        setImageUrl(res.imageUrl);
        setCurrentNickname(res.nickname);
        setCurrentAccountBank(res.accountBank);
        setCurrentAccountNumber(res.accountNumber);
        setCurrentPhoneNumber(res.phoneNumber);
      });
    });

    return profileGetMember;
  }, [navigation]);

  const handleModalOpen = () => {
    setIsModal(!isModal);
  };
  const handleModalClose = () => {
    setIsModal(false);
  };

  const handleImagePress = async () => {
    await launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.didCancel) {
      } else if (response.errorMessage) {
      } else {
        const selectedImage = response.assets?.[0];
        if (selectedImage) {
          setUploadedImageUrl(selectedImage.uri);
          setFile(selectedImage);
          setEditButtonDisabled(false);
        }
      }
    }).then(res => {
      const selectedImage = res.assets?.[0];
      if (selectedImage) {
        setUploadedImageUrl(selectedImage.uri);
        setFile(selectedImage);
        setEditButtonDisabled(false);
      }
      handleModalClose();
    });
  };

  const handleRegistration = () => {
    const requestNickname = nickname === '' ? currentNickname : nickname;

    const requestAccountBank =
      accountBank === '' ? currentAccountBank : accountBank;

    const requestAccountNumber =
      accountNumber === '' ? currentAccountNumber : accountNumber;

    const requestPhoneNumber =
      phoneNumber === '' ? currentPhoneNumber : phoneNumber;

    EditProfile(
      requestNickname,
      requestAccountBank,
      requestAccountNumber,
      requestPhoneNumber,
      file,
    )
      .then(() => {
        navigation.navigate('마이페이지');
      })
      .catch(err => {
        console.error(err);
      });
  };
  const handleImageDelete = () => {
    ImageDelete(imageUrl)
      .then(res => {
        // setFile([]);
        setUploadedImageUrl('');
        setImageUrl('');
        setIsModal(false);
        setEditButtonDisabled(false);
      })
      .catch(error => {
        console.log('이미지 삭제 실패>>', error);
        setIsModal(false);
        setEditButtonDisabled(true);
      });
  };

  return (
    <styles.Container>
      <TouchableWithoutFeedback>
        <ScrollView>
          <styles.ProfileBox>
            <styles.ProfileImage>
              <Image
                source={{
                  uri:
                    uploadedImageUrl ||
                    imageUrl ||
                    'https://4983-s3.s3.ap-northeast-2.amazonaws.com/baseImage.png',
                }}
                width={84}
                height={84}
                style={{borderRadius: 42}}
              />
              <styles.PhotoEditBox
                onPress={handleModalOpen}
                hitSlop={{top: 20, bottom: 20}}>
                <PhotoEdit width={26} height={25} />
              </styles.PhotoEditBox>
            </styles.ProfileImage>
            <styles.ProfileName>{currentNickname}</styles.ProfileName>
          </styles.ProfileBox>
          <MypageEditNickname
            nickname={nickname}
            setNickname={setNickname}
            isNicknameDuplicate={isNicknameDuplicate}
            setIsNicknameDuplicate={setIsNicknameDuplicate}
            setEditButtonDisabled={setEditButtonDisabled}
          />
          <MypageEditAccount
            currentAccountBank={currentAccountBank}
            setCurrentAccountBank={setCurrentAccountBank}
            currentAccountNumber={currentAccountNumber}
            accountBank={accountBank}
            setAccountBank={setAccountBank}
            accountNumber={accountNumber}
            setAccountNumber={setAccountNumber}
            setEditButtonDisabled={setEditButtonDisabled}
          />
          <MypageEditPhone
            currentPhoneNumber={currentPhoneNumber}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            verificationSuccess={verificationSuccess}
            setVerificationSuccess={setVerificationSuccess}
            setVerificationCode={setVerificationCode}
          />
          <MypageEditCertification
            verificationSuccess={verificationSuccess}
            verificationCode={verificationCode}
            setVerificationSuccess={setVerificationSuccess}
            setVerificationCode={setVerificationCode}
            setEditButtonDisabled={setEditButtonDisabled}
          />
        </ScrollView>
      </TouchableWithoutFeedback>

      <Modal visible={isModal} transparent={true} animationType="none">
        <styles.ModalContainer>
          <styles.ModalBox>
            <styles.ModalSelectBox>
              <TouchableOpacity
                onPress={handleImagePress}
                hitSlop={{top: 20, bottom: 20}}>
                <styles.ModalSelectText>앨범에서 선택</styles.ModalSelectText>
              </TouchableOpacity>
            </styles.ModalSelectBox>
            <styles.ModalDeleteBox>
              <TouchableOpacity
                onPress={handleImageDelete}
                hitSlop={{top: 20, bottom: 20}}>
                <styles.ModalDeleteText>
                  프로필 사진 삭제
                </styles.ModalDeleteText>
              </TouchableOpacity>
            </styles.ModalDeleteBox>
            <styles.ModalCancelButton onPress={handleModalClose}>
              <styles.ModalCancelText>취소</styles.ModalCancelText>
            </styles.ModalCancelButton>
          </styles.ModalBox>
        </styles.ModalContainer>
      </Modal>
    </styles.Container>
  );
};

export default MypageEditProfileLayout;
