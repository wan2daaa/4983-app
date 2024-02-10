import styled from 'styled-components/native';

export const EachBookContainer = styled.TouchableOpacity`
  height: 113px;
  flex-direction: row;
  align-items: center;
`;

export const MainImage = styled.Image`
  left: 11px;
`;

export const BookInfoContainer = styled.View`
  left: 22px;
  gap: 4px;
`;

export const BookNameStatusContainer = styled.View`
  flex-direction: row;
  gap: 3px;
`;

export const BookName = styled.Text`
  color: #36332e;
  font-size: 16px;
  font-weight: 700;
`;

export const BookDateContainer = styled.View`
  flex-direction: row;
  gap: 3px;
`;

export const BookTradeAvailableDate = styled.Text`
  font-size: 14px;
  font-weight: 700;
`;
