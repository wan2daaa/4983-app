import styled from 'styled-components/native';

export const ButtonBox = styled.View`
  width: 312px;
  height: 51px;
  margin-bottom: 10px;
  align-self: center;
  justify-content: center;
  border-radius: 15px;
  border: 1px solid #d1d1d1;
  //background: #d1d1d1;
  background: ${props => (props.canGoNextPage ? '#02B878' : '#D1D1D1')};
`;

export const ButtonText = styled.Text`
  text-align: center;
  color: ${props => (props.canGoNextPage ? '#fff' : '#707479')};
  font-size: 15px;
  font-weight: 700;
`;
