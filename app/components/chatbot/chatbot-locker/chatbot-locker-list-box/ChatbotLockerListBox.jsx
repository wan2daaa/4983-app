import * as styles from './ChatbotLockerListBox.styles';
import {useEffect, useState} from 'react';
import {ChatbotLocker} from '@/apis/chatbot/ChatbotApi';

const ChatbotLockerListBox = ({
  ChatRoomId,
  setIsLockerClicked,
  setSelectLockerNumber,
}) => {
  const [chatLockerNumber, setChatLockerNumber] = useState([]);
  const [selectedListBox, setSelectedListBox] = useState(null);

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
    setSelectedListBox(lockerNumber);
  };

  return (
    <styles.Container>
      {chatLockerNumber.map((chatLocker, index) => (
        <styles.ListBox
          onPress={() => handleListBoxButtonClick(chatLocker.lockerNumber)}
          isExists={chatLocker.isExists}
          isSelected={selectedListBox === chatLocker.lockerNumber}
          disabled={chatLocker.isExists}>
          <styles.ListBoxNumber
            isSelected={selectedListBox === chatLocker.lockerNumber}>
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
