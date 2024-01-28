import styled from 'styled-components/native';

export const Container = styled.View`
  height: 104px;
`;

export const TitleText = styled.Text`
  margin-left: 13px;
  color: #36332e;
  font-size: 14px;
  font-weight: 700;
`;

export const StatusBox = styled.TouchableOpacity`
  height: 20px;
  margin-left: 16px;
  margin-top: 9px;
  flex-direction: row;
`;

export const IconBox = styled.View`
  width: 20px;
  height: 20px;
  flex-direction: row;
`;

export const ContentBox = styled.View`
  margin-left: 4px;
  justify-content: center;
`;

export const Content = styled.Text`
  color: #818181;
  font-size: 14px;
  font-weight: 400;
`;
