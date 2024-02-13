import styled from 'styled-components/native';

export const EachChatContainer = styled.TouchableOpacity`
  height: 64px;
  flex-direction: row;
  align-items: center;
`;

export const EachChatTextContainer = styled.View`
  height: 64px;
  justify-content: center;
  margin-left: 12px;
`;

export const BookNameText = styled.Text`
  color: #36332e;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
`;

export const ChatText = styled.Text`
  color: #8f8f8f;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
`;

export const OtherChatContainer = styled.View`
  position: absolute;
  height: 44px;
  right: 10px;
  //margin-left: 30px;
  align-items: flex-end;
`;

export const ChatTimeText = styled.Text`
  color: #8f8f8f;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */
`;
