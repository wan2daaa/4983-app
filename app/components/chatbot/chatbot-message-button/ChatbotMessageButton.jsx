import * as styles from './ChatbotMessageButton.styles';
import {ChatPostDelete, ChatRoomButton} from '@/apis/chatbot/ChatbotApi';
import {useState} from 'react';

const ChatbotMessageButton = ({
  chat,
  unreadChatMessages,
  setUnreadChatMessages,
  ChatRoomId,
  navigation,
}) => {
  const [isPurchaseButtonEnabled, setPurchaseButtonEnabled] = useState(true);
  const [isRejectionButtonEnabled, setRejectionButtonEnabled] = useState(true);
  const [isPlacementButtonEnabled, setPlacementButtonEnabled] = useState(true);
  const [isTradeCompleteButtonEnabled, setTradeCompleteButtonEnabled] =
    useState(true);

  const handleSaleRejectionClick = async () => {
    if (
      chat.contentType === 'BOOK_PURCHASE_START_SELLER' &&
      isRejectionButtonEnabled
    ) {
      setRejectionButtonEnabled(false);
      await ChatRoomButton(Number(ChatRoomId), 'BOOK_SALE_REJECTION', '')
        .then(res => {
          if (res.length !== 0) {
            setUnreadChatMessages([...unreadChatMessages, ...res]);
          }
        })
        .catch(err => {
          console.error('버튼 이벤트 실패', err);
        });
    }
  };

  const handlePurchaseRequestClick = async () => {
    if (
      chat.contentType === 'BOOK_PURCHASE_START_SELLER' &&
      isPurchaseButtonEnabled
    ) {
      setPurchaseButtonEnabled(false);
      await ChatRoomButton(Number(ChatRoomId), 'BOOK_PURCHASE_REQUEST', '')
        .then(res => {
          console.log(res);
          if (res.length !== 0) {
            setUnreadChatMessages([...unreadChatMessages, ...res]);
          }
        })
        .catch(err => {
          console.error('버튼 이벤트 실패', err);
        });
    }
  };

  const handlePlacementCompleteClick = async () => {
    if (
      chat.contentType === 'BOOK_PLACEMENT_SET_SELLER' &&
      isPlacementButtonEnabled
    ) {
      setPlacementButtonEnabled(false);
      await ChatRoomButton(Number(ChatRoomId), 'BOOK_PLACEMENT_COMPLETE', '')
        .then(res => {
          console.log(res);
          if (res.length !== 0) {
            setUnreadChatMessages([...unreadChatMessages, ...res]);
          }
        })
        .catch(err => {
          console.error('버튼 이벤트 실패', err);
        });
    }
  };

  const handleTradeCompleteClick = async () => {
    if (
      chat.contentType === 'BOOK_PLACEMENT_COMPLETE_BUYER' &&
      isTradeCompleteButtonEnabled
    ) {
      setTradeCompleteButtonEnabled(false);
      await ChatRoomButton(Number(ChatRoomId), 'TRADE_COMPLETE', '')
        .then(res => {
          console.log(res);
          if (res.length !== 0) {
            setUnreadChatMessages([...unreadChatMessages, ...res]);
          }
        })
        .catch(err => {
          console.error('버튼 이벤트 실패', err);
        });
    }
  };

  const handleChatPostDeleteClick = async () => {
    await ChatPostDelete(Number(ChatRoomId))
      .then(res => {
        navigation.navigate('Home');
      })
      .catch(err => {
        console.error('게시글 삭제 실패', err);
      });
  };

  return (
    <>
      {chat.contentType === 'BOOK_PURCHASE_START_SELLER' && (
        <styles.ButtonContainer>
          <styles.RefuseButton
            onPress={handleSaleRejectionClick}
            disabled={!isRejectionButtonEnabled}>
            <styles.RefuseButtonText>거절하기</styles.RefuseButtonText>
          </styles.RefuseButton>
          <styles.AcceptButton
            onPress={handlePurchaseRequestClick}
            disabled={!isPurchaseButtonEnabled}>
            <styles.AcceptButtonText>수락하기</styles.AcceptButtonText>
          </styles.AcceptButton>
        </styles.ButtonContainer>
      )}
      {chat.contentType === 'BOOK_SALE_REJECTION_BUYER' && (
        <styles.Button onPress={() => navigation.navigate('Home')}>
          <styles.ButtonText>서적 검색하러 가기</styles.ButtonText>
        </styles.Button>
      )}
      {chat.contentType === 'BOOK_SALE_REJECTION_SELLER' && (
        <styles.ButtonContainer>
          <styles.RefuseButton onPress={handleChatPostDeleteClick}>
            <styles.RefuseButtonText>아니오</styles.RefuseButtonText>
          </styles.RefuseButton>
          <styles.AcceptButton
            onPress={() => {
              navigation.navigate('MypageSalesHistory');
            }}>
            <styles.AcceptButtonText>네</styles.AcceptButtonText>
          </styles.AcceptButton>
        </styles.ButtonContainer>
      )}
      {chat.contentType === 'PAYMENT_CONFIRMATION_COMPLETE_SELLER' && (
        <styles.Button
          onPress={() => navigation.navigate('ChatbotLocker', {ChatRoomId})}>
          <styles.ButtonText>거래하러 가기</styles.ButtonText>
        </styles.Button>
      )}
      {chat.contentType === 'BOOK_PLACEMENT_SET_SELLER' && (
        <styles.Button
          onPress={handlePlacementCompleteClick}
          disabled={!isPlacementButtonEnabled}>
          <styles.ButtonText>서적 배치 완료</styles.ButtonText>
        </styles.Button>
      )}
      {chat.contentType === 'BOOK_PLACEMENT_COMPLETE_BUYER' && (
        <styles.Button
          onPress={handleTradeCompleteClick}
          disabled={!isTradeCompleteButtonEnabled}>
          <styles.ButtonText>거래완료</styles.ButtonText>
        </styles.Button>
      )}
      {chat.contentType === 'TRADE_STOP_REQUEST_BEFORE_DEPOSIT_SELLER' && (
        <styles.Button
          onPress={() => {
            navigation.navigate('MypageSalesHistory');
          }}>
          <styles.ButtonText>수정하러 가기</styles.ButtonText>
        </styles.Button>
      )}
      {chat.contentType === 'TRADE_STOP_REQUEST_AFTER_DEPOSIT_SELLER' && (
        <styles.Button
          onPress={() => {
            navigation.navigate('MypageSalesHistory');
          }}>
          <styles.ButtonText>수정하러 가기</styles.ButtonText>
        </styles.Button>
      )}
      {chat.contentType === 'TRADE_STOP_REQUEST_BEFORE_DEPOSIT_BUYER' && (
        <styles.Button onPress={() => navigation.navigate('Home')}>
          <styles.ButtonText>서적 검색하러 가기</styles.ButtonText>
        </styles.Button>
      )}
      {chat.contentType === 'TRADE_STOP_REQUEST_AFTER_DEPOSIT_BUYER' && (
        <styles.Button onPress={() => navigation.navigate('Home')}>
          <styles.ButtonText>서적 검색하러 가기</styles.ButtonText>
        </styles.Button>
      )}
    </>
  );
};

export default ChatbotMessageButton;
