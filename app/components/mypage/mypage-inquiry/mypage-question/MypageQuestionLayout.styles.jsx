import styled from 'styled-components';

export const Container = styled.View`
  width: 329px;
  align-self: center;
`;
export const FaqBox = styled.View`
  justify-content: center;
  border-bottom-width: 1px;
  border-bottom-color: #f6f6f6;
`;

export const FaqHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const FapQuestion = styled.Text`
  color: #000;
  font-size: 14px;
  font-weight: 500;
  line-height: 42px;
`;

export const FaqAnswer = styled.Text`
  margin-bottom: 10px;
  color: #818181;
  font-size: 14px;
  font-weight: 500;
`;

export const MoreButton = styled.TouchableOpacity`
  margin-right: 15px;
`;
