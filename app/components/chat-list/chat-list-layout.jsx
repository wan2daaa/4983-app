import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import BackButton from '@assets/images/common/BlackBackButton.svg';
import {EachChat} from '@components/chat-list/each-chat/each-chat';
import * as styles from '@components/chat-list/chat-list-layout.styles';
import {
  BorderLine,
  HeaderText,
  ScrollViewContainer,
} from '@components/chat-list/chat-list-layout.styles';
export const ChatListLayout = ({navigation, chatDataList}) => {
  return (
    <styles.Container>
      <styles.HeaderContainer>
        <styles.HeaderText>중고 서적 거래 채팅</styles.HeaderText>
        <styles.BackButtonTouchableOpacity
          onPress={() => navigation.goBack()}
          hitSlop={{left: 10, right: 10, top: 10, bottom: 10}}>
          <BackButton
            width={20}
            height={26}
            onPress={() => navigation.goBack()}
          />
        </styles.BackButtonTouchableOpacity>
      </styles.HeaderContainer>
      <styles.BorderLine />
      <styles.ScrollViewContainer>
        <EachChat />
        <EachChat />
        <EachChat />
        <EachChat />
        <EachChat />
        <EachChat />
        <EachChat />
        <EachChat />
        <EachChat />
        <EachChat />
        <EachChat />
        <EachChat />
        <EachChat />
        <EachChat />
      </styles.ScrollViewContainer>
    </styles.Container>
  );
};
