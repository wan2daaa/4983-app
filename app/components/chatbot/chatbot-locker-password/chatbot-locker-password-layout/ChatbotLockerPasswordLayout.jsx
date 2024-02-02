import * as styles from './ChatbotLockerPasswordLayout.styles';
import {ScrollView} from 'react-native';
import ChatbotLockerPasswordInput from '@components/chatbot/chatbot-locker-password/chatbot-locker-password-input/ChatbotLockerPasswordInput';
import {useState} from 'react';
import ChatbotLockerPasswordButton from '@components/chatbot/chatbot-locker-password/chatbot-locker-password-button/ChatbotLockerPasswordButton';

const ChatbotLockerPasswordLayout = ({
  navigation,
  ChatRoomId,
  selectLockerNumber,
}) => {
  const [password, setPassword] = useState('');
  const [isPassword, setIsPassword] = useState(false);

  return (
    <styles.Container>
      <ScrollView>
        <styles.Title>사물함 비밀번호 설정 (4자리 기입)</styles.Title>
        <ChatbotLockerPasswordInput
          password={password}
          setPassword={setPassword}
          setIsPassword={setIsPassword}
        />
      </ScrollView>
      <ChatbotLockerPasswordButton
        navigation={navigation}
        ChatRoomId={ChatRoomId}
        selectLockerNumber={selectLockerNumber}
        password={password}
        isPassword={isPassword}
      />
    </styles.Container>
  );
};

export default ChatbotLockerPasswordLayout;
