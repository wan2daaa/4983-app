import {ChatListLayout} from '@components/chat-list/chat-list-layout';
import {getChatList} from '@/apis/chat-list/ChatListApi';
import {useEffect, useState} from 'react';

export const ChatList = ({navigation}) => {
  const [chatDataList, setChatDataList] = useState([]);

  useEffect(() => {
    getChatList().then(res => {
      console.log('res: ', res);
      setChatDataList(res);
    });
  }, []);

  return <ChatListLayout navigation={navigation} chatDataList={chatDataList} />;
};
