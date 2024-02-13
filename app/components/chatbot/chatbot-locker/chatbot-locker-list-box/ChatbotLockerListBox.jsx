import * as styles from './ChatbotLockerListBox.styles';
import {useEffect, useState} from 'react';
import {ChatbotLocker} from '@/apis/chatbot/ChatbotApi';

const ChatbotLockerListBox = ({
  ChatRoomId,
  setIsLockerClicked,
  setSelectLockerNumber,
}) => {
  const [chatLockerNumber, setChatLockerNumber] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (ChatRoomId) {
        try {
          const response = await ChatbotLocker(Number(ChatRoomId));
          console.log('>>>>>>', response);
          setChatLockerNumber(response);
        } catch (error) {
          console.error('>>>>>', error);
        }
      }
    };

    fetchData();
  }, [ChatRoomId]);

  const handleListBoxButtonClick = lockerNumber => {
    if (chatLockerNumber[lockerNumber - 1].isExists) {
      setIsLockerClicked(false);
      console.log('=======', lockerNumber);
    } else {
      setSelectLockerNumber(lockerNumber);
      setIsLockerClicked(true);
      console.log('=======', lockerNumber);
    }
  };

  return (
    <styles.Container>
      {chatLockerNumber.map((chatLocker, index) => (
        <styles.ListBox
          onPress={() => handleListBoxButtonClick(chatLocker.lockerNumber)}
          isExists={chatLocker.isExists}
          disabled={chatLocker.isExists}>
          <styles.ListBoxNumber>
            {chatLocker.lockerNumber < 10
              ? `0${chatLocker.lockerNumber}`
              : chatLocker.lockerNumber}
          </styles.ListBoxNumber>
        </styles.ListBox>
      ))}
    </styles.Container>
  );
};

export default ChatbotLockerListBox;
