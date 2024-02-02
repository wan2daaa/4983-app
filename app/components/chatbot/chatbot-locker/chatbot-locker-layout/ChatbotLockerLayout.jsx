import * as styles from './ChatbotLockerLayout.styles';
import {useState} from 'react';
import ChatbotLockerListBox from '@components/chatbot/chatbot-locker/chatbot-locker-list-box/ChatbotLockerListBox';
import {ScrollView} from 'react-native';
import ChatbotLockerButton from '@components/chatbot/chatbot-locker/chatbot-locker-button/ChatbotLockerButton';

const ChatbotLockerLayout = ({navigation, ChatRoomId}) => {
  const [isLockerClicked, setIsLockerClicked] = useState(false);
  const [selectLockerNumber, setSelectLockerNumber] = useState('');

  return (
    <styles.Container>
      <ScrollView>
        <styles.TitleBold>
          책을 넣어둘 사물함 번호를 선택해주세요.
        </styles.TitleBold>
        <styles.Title>
          원활한 거래를 위해 꼭 선택하신 번호에 책을 넣어주세요.
        </styles.Title>
        <ChatbotLockerListBox
          ChatRoomId={ChatRoomId}
          setIsLockerClicked={setIsLockerClicked}
          setSelectLockerNumber={setSelectLockerNumber}
        />
      </ScrollView>
      <ChatbotLockerButton
        navigation={navigation}
        ChatRoomId={ChatRoomId}
        isLockerClicked={isLockerClicked}
        selectLockerNumber={selectLockerNumber}
      />
    </styles.Container>
  );
};

export default ChatbotLockerLayout;
