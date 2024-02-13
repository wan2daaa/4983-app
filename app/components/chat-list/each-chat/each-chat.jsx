import {Image, Text, View} from 'react-native';
import * as styles from '@components/chat-list/each-chat/each-chat.styles';
import NewChatIcon from '@assets/images/chat-list/new-chat.svg';
import {
  useFormatTimeAmPm,
  UseFormatTimeAmPm,
} from '@/hooks/use-format-time-am-pm';

export const EachChat = ({navigation, chatData}) => {
  return (
    <styles.EachChatContainer
      onPress={() => {
        navigation.navigate('Chatbot', {
          ChatRoomId: chatData.chatRoomId,
        });
      }}>
      <Image
        style={{borderRadius: 48, marginLeft: 16}}
        width={48}
        height={48}
        source={{
          uri: chatData.imageUrl,
        }}
      />
      <styles.EachChatTextContainer onPress={() => {}}>
        <styles.BookNameText>{chatData.usedBookName}</styles.BookNameText>
        <styles.ChatText>
          {chatData.message.length > 12
            ? chatData.message.substring(0, 12) + '...'
            : chatData.message}
        </styles.ChatText>
      </styles.EachChatTextContainer>
      <styles.OtherChatContainer>
        <styles.ChatTimeText>
          {useFormatTimeAmPm(chatData.createdAt)}
        </styles.ChatTimeText>
        {chatData.isRead ? <View /> : <NewChatIcon style={{marginTop: 8}} />}
      </styles.OtherChatContainer>
    </styles.EachChatContainer>
  );
};
