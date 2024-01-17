import {Image, Text, View} from 'react-native';
import * as styles from '@components/chat-list/each-chat/each-chat.styles';
import NewChatIcon from '@assets/images/chat-list/new-chat.svg';

export const EachChat = () => {
  return (
    <styles.EachChatContainer>
      <Image
        style={{borderRadius: 48, marginLeft: 16}}
        width={48}
        height={48}
        source={'@assets/images/chat-list/test-image.png'}
      />
      <styles.EachChatTextContainer>
        <styles.BookNameText>재무관리 1</styles.BookNameText>
        <styles.ChatText>‘안녕하소'님이 거래 요청을 보냈어요!</styles.ChatText>
      </styles.EachChatTextContainer>
      <styles.OtherChatContainer>
        <styles.ChatTimeText>오후6:57</styles.ChatTimeText>
        <NewChatIcon style={{marginTop: 8}} />
      </styles.OtherChatContainer>
    </styles.EachChatContainer>
  );
};
