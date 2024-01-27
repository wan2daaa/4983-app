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
import {useRecoilState} from 'recoil';
import {fileListState} from '@/recoil/atoms/MypageAtoms';
import {launchImageLibrary} from 'react-native-image-picker';
import DefaultImage from '@assets/images/mypage/DefaultImage.svg';

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
  const [fileList, setFileList] = useRecoilState(fileListState);

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
    return navigation.addListener('focus', () => {
      mypageGetMemberInfo().then(res => {
        console.log('res>>', res);
        setImageUrl(res.imageUrl);
        setCurrentNickname(res.nickname);
        setCurrentAccountBank(res.accountBank);
        setCurrentAccountNumber(res.accountNumber);
        setCurrentPhoneNumber(res.phoneNumber);
      });
    });
  }, [navigation]);

  const handleModalOpen = () => {
    setIsModal(!isModal);
  };
  const handleModalClose = () => {
    setIsModal(false);
  };

  const handleImagePress = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.didCancel) {
      } else if (response.errorMessage) {
      } else {
        const selectedImage = response.assets?.[0];
        if (selectedImage) {
          const imageUri = selectedImage.uri;
          setUploadedImageUrl(imageUri);
          setFileList(prevFileList => [...prevFileList, selectedImage]);
          setEditButtonDisabled(false);
          console.log('Selected Image URI:', imageUri);
        }
      }
      handleModalClose();
    });
  };

  const handleImageDelete = () => {
    ImageDelete(imageUrl)
      .then(res => {
        setIsModal(false);
        setEditButtonDisabled(false);
        setUploadedImageUrl('');
        setFileList([]);
        setImageUrl('');
      })
      .catch(error => {
        console.log('이미지 삭제 실패>>', error);
        setIsModal(false);
        setEditButtonDisabled(true);
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
      imageUrl === '' ? [] : fileList,
    )
      .then(() => {
        navigation.navigate('마이페이지');
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <styles.Container>
      <TouchableWithoutFeedback>
        <ScrollView>
          <styles.ProfileBox>
            <styles.ProfileImage>
              {imageUrl ? (
                <Image
                  source={{uri: uploadedImageUrl || imageUrl || null}}
                  width={84}
                  height={84}
                  style={{borderRadius: 42}}
                />
              ) : (
                <DefaultImage width={49} height={61} />
              )}
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
