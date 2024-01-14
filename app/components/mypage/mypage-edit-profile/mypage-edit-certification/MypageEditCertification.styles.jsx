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
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#818181',
})`
  width: 246px;
  height: 32px;
  margin-right: 1px;
  padding-left: 5px;
  border-bottom-width: 0.4px;
  border-bottom-color: #818181;
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
