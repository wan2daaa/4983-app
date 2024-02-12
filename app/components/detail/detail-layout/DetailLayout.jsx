import * as styles from './DetailLayout.styles';
import {Modal, ScrollView, View} from 'react-native';
import DetailCollegeDepartmentBox from '@components/detail/detail-college-department-box/DetailCollegeDepartmentBox';
import DetailProfileBox from '@components/detail/detail-profile-box/DetailProfileBox';
import DetailImageBox from '@components/detail/detail-image-box/DetailImageBox';
import DetailBookNamePublisherBox from '@components/detail/detail-book-name-publisher-box/DetailBookNamePublisherBox';
import DetailPossibleDateBox from '@components/detail/detail-possible-date-box/DetailPossibleDateBox';
import DetailBookStatus from '@components/detail/detail-book-status/DetailBookStatus';
import {UsedBookView} from '@/apis/detail/DetailApi';
import {useEffect, useState} from 'react';
import {ChatRoomCreate} from '@/apis/chatbot/ChatbotApi';
import {getWithdraw} from '@/apis/auth/member/MemberApi';
import BackButton from '@assets/images/common/BackButton.svg';

const NumberWithComma = data =>
  String(data).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');

const DetailLayout = ({usedBookId, isFocused, navigation}) => {
  const [usedBookView, setUsedBookView] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWithdrawModal, setIsWithdrawModal] = useState(false);
  const [errorMessages, setErrorMessages] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await UsedBookView({usedBookId});
        setUsedBookView(data);
      } catch (error) {
        console.error('Error', error);
      }
    };

    if (usedBookId) {
      fetchData();
    }
  }, [usedBookId, isFocused]);

  const handleBuyButtonClick = async () => {
    const withdrawResponse = await getWithdraw();

    if (withdrawResponse) {
      handleWithdrawModalOpen();
    } else {
      try {
        await ChatRoomCreate(
          Number(`${usedBookId}`),
          ChatRoomId => {
            navigation.navigate('Chatbot', {
              ChatRoomId,
            });
          },
          error => {
            console.error('채팅방 생성 실패', error);
            setIsModalOpen(true);
            const errorMessage = error.response.data.message;
            setErrorMessages(errorMessage);
          },
        );
      } catch (error) {
        console.error('채팅방 생성 실패', error);
        setIsModalOpen(true);
        const errorMessage = error.response.data.message;
        setErrorMessages(errorMessage);
      }
    }
  };

  const handleWithdrawModalOpen = () => {
    setIsWithdrawModal(true);
  };
  const handleWithdrawModalClose = () => {
    setIsWithdrawModal(false);
  };

  return (
    <styles.Container>
      <styles.Header>
        <styles.BackButton
          onPress={() => {
            navigation.navigate('홈');
          }}>
          <BackButton />
        </styles.BackButton>
      </styles.Header>
      {usedBookView && (
        <styles.Box>
          <ScrollView style={{paddingBottom: 58}}>
            <DetailCollegeDepartmentBox
              navigation={navigation}
              usedBookId={usedBookId}
              college={usedBookView.college}
              department={usedBookView.department}
              isBookOwner={usedBookView.isBookOwner}
            />
            <DetailProfileBox
              sellerUserNickname={usedBookView.sellerUserNickname}
              sellerProfileImageUrl={
                usedBookView.sellerProfileImageUrl === null
                  ? ''
                  : usedBookView.sellerProfileImageUrl
              }
              createdAt={usedBookView.createdAt}
            />
            <DetailImageBox bookImage={usedBookView.bookImage} />
            <DetailBookNamePublisherBox
              bookName={usedBookView.bookName}
              publisher={
                usedBookView.publisher === null ? '' : usedBookView.publisher
              }
            />
            <DetailPossibleDateBox
              tradeAvailableDatetime={usedBookView.tradeAvailableDatetime}
            />
            <DetailBookStatus
              underlinedOrWrite={usedBookView.underlinedOrWrite}
              discolorationAndDamage={usedBookView.discolorationAndDamage}
              coverDamaged={usedBookView.coverDamaged}
            />
            <View style={{padding: 59}} />
          </ScrollView>
        </styles.Box>
      )}
      <styles.BottomBox>
        <styles.PriceBox>
          <styles.Price>{NumberWithComma(usedBookView.price)}원</styles.Price>
        </styles.PriceBox>
        <styles.Button onPress={handleBuyButtonClick}>
          <styles.ButtonText>구매하기</styles.ButtonText>
        </styles.Button>
      </styles.BottomBox>
      <Modal visible={isModalOpen} transparent={true} animationType="none">
        <styles.ModalContainer>
          <styles.ModalBox>
            <styles.ModalTitle>{errorMessages}</styles.ModalTitle>
            <styles.ModalButton
              onPress={() => {
                setIsModalOpen(false);
                navigation.navigate('홈');
              }}>
              <styles.ModalButtonText>
                다른 전공서적 둘러보기
              </styles.ModalButtonText>
            </styles.ModalButton>
          </styles.ModalBox>
        </styles.ModalContainer>
      </Modal>

      <Modal visible={isWithdrawModal} transparent={true} animationType="none">
        <styles.ModalContainer>
          <styles.ModalBox>
            <styles.ModalTitle>
              서비스 이용 제한 대상자로,{'\n'}
              앞으로 30일간 이용이 정지되었어요.
            </styles.ModalTitle>
            <styles.ModalButton onPress={handleWithdrawModalClose}>
              <styles.ModalButtonText>확인</styles.ModalButtonText>
            </styles.ModalButton>
          </styles.ModalBox>
        </styles.ModalContainer>
      </Modal>
    </styles.Container>
  );
};

export default DetailLayout;
