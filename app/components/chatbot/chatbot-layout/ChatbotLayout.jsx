import * as styles from './ChatbotLayout.styles';
import ChatbotMessageForm from '@components/chatbot/chatbot-message-form/ChatbotMessageForm';
import {ScrollView} from 'react-native';
import {useCallback, useEffect, useRef, useState} from 'react';
import {
  ChatMessageList,
  ChatMessageNotReadList,
} from '@/apis/chatbot/ChatbotApi';
import {useIsFocused} from '@react-navigation/native';

const ChatbotLayout = ({navigation, ChatRoomId}) => {
  const [chatMessages, setChatMessages] = useState([]);
  const [unreadChatMessages, setUnreadChatMessages] = useState([]);

  const scrollRef = useRef(null);
  const isFocused = useIsFocused();

  useEffect(() => {
    const onFocus = async () => {
      if (ChatRoomId) {
        try {
          const response = await ChatMessageList(Number(ChatRoomId));
          console.log('채팅 메시지 조회 성공', response);
          console.log('>>>>>>>>>', response);
          setChatMessages(response);
        } catch (error) {
          console.error('채팅 메시지 조회 실패', error);
        }
      }
    };

    const unsubscribeFocus = navigation.addListener('focus', onFocus);

    return () => {
      unsubscribeFocus();
    };
  }, [navigation, ChatRoomId]);

  useEffect(() => {
    if (scrollRef.current && isFocused) {
      scrollRef.current.scrollToEnd({animated: true});
    }
  }, [isFocused, unreadChatMessages, chatMessages]);

  const fetchUnreadMessages = useCallback(async () => {
    try {
      const response = await ChatMessageNotReadList(Number(ChatRoomId));
      if (response.length !== 0) {
        setUnreadChatMessages(prevMessages => [...prevMessages, ...response]);
      }
    } catch (error) {
      console.error('안읽은 메시지 조회 실패', error);
    }
  }, [ChatRoomId]);

  useEffect(() => {
    if (isFocused) {
      const intervalRef = setInterval(() => fetchUnreadMessages(), 7000);

      return () => {
        clearInterval(intervalRef);
      };
    }
    return undefined;
  }, [isFocused, fetchUnreadMessages]);

  return (
    <styles.Container>
      <ScrollView ref={scrollRef}>
        {chatMessages.map((chat, index) => (
          <ChatbotMessageForm
            key={index.toString()}
            chat={chat}
            unreadChatMessages={unreadChatMessages}
            setUnreadChatMessages={setUnreadChatMessages}
            ChatRoomId={ChatRoomId}
            navigation={navigation}
          />
        ))}

        {unreadChatMessages.map((chat, index) => (
          <ChatbotMessageForm
            key={index.toString()}
            chat={chat}
            unreadChatMessages={unreadChatMessages}
            setUnreadChatMessages={setUnreadChatMessages}
            ChatRoomId={ChatRoomId}
            navigation={navigation}
          />
        ))}
      </ScrollView>
    </styles.Container>
  );
};

export default ChatbotLayout;
