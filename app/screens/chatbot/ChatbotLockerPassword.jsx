import ChatbotLockerPasswordLayout from '@components/chatbot/chatbot-locker-password/chatbot-locker-password-layout/ChatbotLockerPasswordLayout';

const ChatbotLockerPassword = ({route, navigation}) => {
  const {ChatRoomId} = route.params;
  const {selectLockerNumber} = route.params;

  return (
    <ChatbotLockerPasswordLayout
      navigation={navigation}
      ChatRoomId={ChatRoomId}
      selectLockerNumber={selectLockerNumber}
    />
  );
};

export default ChatbotLockerPassword;
