import * as styles from './ChatbotMessageForm.styles';
import {Fragment} from 'react';
import formatCreatedAt from '@/hooks/use-format-createdAt';
import ChatbotMessageButton from '@components/chatbot/chatbot-message-button/ChatbotMessageButton';
import ChatbotImage from '@assets/images/chatbot/ChatbotImage.svg';
import {View} from 'react-native';

const ChatbotMessageForm = ({
  chat,
  unreadChatMessages,
  setUnreadChatMessages,
  ChatRoomId,
  navigation,
}) => {
  return (
    <styles.Container>
      <styles.ProfileIcon />
      <styles.ChatbotName>사고파삼</styles.ChatbotName>
      <styles.ChatbotMessageContainer>
        <styles.ChatbotMessageBox>
          {chat.contentType === 'TRADE_COMPLETE_SELLER' && (
            <View style={{alignItems: 'center'}}>
              <ChatbotImage width={155} height={144} />
              <styles.ChatbotMessageBr />
            </View>
          )}
          {chat.contentType === 'TRADE_COMPLETE_BUYER' && (
            <View style={{alignItems: 'center'}}>
              <ChatbotImage width={155} height={144} />
              <styles.ChatbotMessageBr />
            </View>
          )}
          <styles.ChatbotMessage>
            {chat.message.split('\n').map((line, index) => (
              <Fragment key={index}>
                {index > 0 && (
                  <styles.ChatbotMessageBr>{'\n'}</styles.ChatbotMessageBr>
                )}
                {line}
              </Fragment>
            ))}
          </styles.ChatbotMessage>
          <ChatbotMessageButton
            chat={chat}
            unreadChatMessages={unreadChatMessages}
            setUnreadChatMessages={setUnreadChatMessages}
            ChatRoomId={ChatRoomId}
            navigation={navigation}
          />
        </styles.ChatbotMessageBox>
        <styles.ChatbotMessageTime>
          {formatCreatedAt(chat.createdAt)}
        </styles.ChatbotMessageTime>
      </styles.ChatbotMessageContainer>
    </styles.Container>
  );
};

export default ChatbotMessageForm;
