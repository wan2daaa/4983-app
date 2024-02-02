import * as styles from './ChatbotLockerPasswordButton.styles';
import {ChatLockerReservation} from '@/apis/chatbot/ChatbotApi';

const ChatbotLockerPasswordButton = ({
  navigation,
  ChatRoomId,
  selectLockerNumber,
  password,
  isPassword,
}) => {
  const handleButtonClick = async () => {
    try {
      await ChatLockerReservation(
        selectLockerNumber,
        password,
        Number(ChatRoomId),
      );
      navigation.navigate('Chatbot', {
        ChatRoomId,
      });
    } catch (error) {
      console.error('ChatLockerReservation 실패', error);
    }
  };

  return (
    <>
      <styles.Button
        onPress={() => {
          if (isPassword) {
            handleButtonClick();
          }
        }}
        isPassword={isPassword}
        disabled={!isPassword}>
        <styles.ButtonText isPassword={isPassword}>입력완료</styles.ButtonText>
      </styles.Button>
    </>
  );
};

export default ChatbotLockerPasswordButton;
