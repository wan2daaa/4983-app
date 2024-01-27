import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #ffffff;
`;

export const TitleBox = styled.View`
  margin-top: 24px;
  width: 329px;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  align-items: center;
`;

export const TitleText = styled.Text`
  color: #000;
  font-size: 18px;
  font-weight: 700;
  line-height: 52px;
`;

export const HelpButton = styled.TouchableOpacity`
  width: 89px;
  height: 33px;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  background: rgba(2, 184, 120, 0.8);
`;

export const HelpButtonText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: 500;
`;

export const CopyBox = styled.View`
  width: 329px;
  height: 52px;
  flex-direction: row;
  align-self: center;
  align-items: center;
  border-radius: 15px;
  background: rgba(236, 236, 236, 0.6);
`;

export const CopyInput = styled.TextInput`
  width: 249px;
  height: 52px;
  padding: 0 16px;
  font-size: 14px;
  font-weight: 500;
  color: #818181;
`;

export const CopyButton = styled.TouchableOpacity`
  width: 72px;
  height: 33px;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  background: rgba(2, 184, 120, 0.8);
`;

export const CopyButtonText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: 500;
`;

export const ContentText = styled.Text`
  width: 329px;
  margin-top: 10px;
  margin-left: 20px;
  align-self: center;
  color: #818181;
  font-size: 12px;
  font-weight: 400;
`;
