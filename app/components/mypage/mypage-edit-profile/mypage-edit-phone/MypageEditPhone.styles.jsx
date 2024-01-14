import styled from 'styled-components';

export const Container = styled.View`
  width: 326px;
  height: 119px;
  align-self: center;
`;

export const Title = styled.Text`
  margin-left: 3px;
  color: #36332e;
  font-size: 16px;
  font-weight: 700;
  line-height: 32px;
`;

export const InputBox = styled.View`
  width: 326px;
  height: 59px;
  flex-direction: row;
  align-items: center;
  border-radius: 15px;
  border: 1px solid #fff;
  background: rgba(236, 236, 236, 0.6);
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#818181',
})`
  width: 247px;
  height: 59px;
  padding-left: 20px;
`;

export const Button = styled.TouchableOpacity`
  width: 72px;
  height: 33px;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  background: #32c491;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: 500;
`;
