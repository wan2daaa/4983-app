import styled from 'styled-components/native';

export const BookStatusBox = styled.View`
  width: 42px;
  height: 17.385px;
  background-color: ${props => props.backgroundColor};
  border-radius: 16px;
  justify-content: center;
`;

export const BookStatusText = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 9px;
  font-weight: 600;
`;
