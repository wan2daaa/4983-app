import ChatbotLockerLayout from '@components/chatbot/chatbot-locker/chatbot-locker-layout/ChatbotLockerLayout';

const ChatbotLocker = ({route, navigation}) => {
  const {ChatRoomId} = route.params;

  return (
    <ChatbotLockerLayout navigation={navigation} ChatRoomId={ChatRoomId} />
  );
};

export default ChatbotLocker;
