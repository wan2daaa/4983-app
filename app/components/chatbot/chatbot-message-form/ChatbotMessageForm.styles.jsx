import styled from 'styled-components/native';
import {Image} from 'react-native';
import ProfileImage from '@assets/images/chatbot/Profile.png';
import ChatbotImage from '@assets/images/chatbot/ChatbotImage.svg';

export const Container = styled.View`
  position: relative;
  bottom: 20px;
`;

export const ProfileIcon = styled(Image).attrs({
  source: ProfileImage,
})`
  position: absolute;
  top: 24px;
  left: 8px;
`;

export const ChatbotName = styled.Text`
  position: absolute;
  top: 38px;
  left: 59px;
  color: #000;
  font-size: 14px;
  font-weight: 400;
`;

export const ChatbotMessageContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ChatbotMessageBox = styled.View`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  top: 17px;
  left: 54px;
  padding: 12px 17px;
  width: 243px;
  height: auto;
  margin-top: 40px;
  border-radius: 10px;
  background: #f6f6f6;
`;

export const ChatbotMessage = styled.Text`
  color: #000;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

export const ChatbotMessageBr = styled.Text``;

export const ChatbotMessageTime = styled.Text`
  position: absolute;
  bottom: -10px;
  right: 34px;
  color: #8f8f8f;
  font-size: 12px;
  font-weight: 400;
`;
