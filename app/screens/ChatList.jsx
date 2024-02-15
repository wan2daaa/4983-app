import {ChatListLayout} from '@components/chat-list/chat-list-layout';
import {getChatList} from '@/apis/chat-list/ChatListApi';
import {useEffect, useState} from 'react';
import {useIsFocused} from '@react-navigation/native';

export const ChatList = ({navigation}) => {
  const [chatDataList, setChatDataList] = useState([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    getChatList().then(res => {
      console.log('res: ', res);
      setChatDataList(res);
    });
  }, [isFocused]);

  return <ChatListLayout navigation={navigation} chatDataList={chatDataList} />;
};
