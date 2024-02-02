import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  width: 343px;
  height: 59px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background: ${props => (props.isPassword ? '#02B878' : '#ccc')};
`;

export const ButtonText = styled.Text`
  color: ${props => (props.isPassword ? '#fff' : '#898a8d')};
  text-align: center;
  font-size: 16px;
  font-weight: 600;
`;
