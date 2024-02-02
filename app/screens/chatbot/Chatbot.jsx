import ChatbotLayout from '@components/chatbot/chatbot-layout/ChatbotLayout';

const Chatbot = ({route, navigation}) => {
  const {ChatRoomId} = route.params;

  return <ChatbotLayout navigation={navigation} ChatRoomId={ChatRoomId} />;
};

export default Chatbot;
