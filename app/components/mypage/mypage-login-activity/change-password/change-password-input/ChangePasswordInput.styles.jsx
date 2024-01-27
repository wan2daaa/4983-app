import styled from 'styled-components/native';

export const InputContainer = styled.View`
  margin-top: 70px;
  width: 100%;
  height: 366px;
  align-items: center;
`;

export const InputBox = styled.View`
  width: 328px;
  height: 122px;
`;

export const Title = styled.Text`
  padding-left: 15px;
  color: #02be7c;
  font-size: 15px;
  font-weight: 400;
  line-height: 32px;
`;

export const InputButtonBox = styled.View`
  width: 100%;
  height: 53px;
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
  height: 100%;
  padding-left: 15px;
  color: #000000;
  font-size: 14px;
  font-weight: 400;
`;

export const InputButton = styled.TouchableOpacity`
  width: 72px;
  height: 29.773px;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  background: #d1d1d1;
`;

export const InputButtonText = styled.Text`
  color: #50555c;
  font-size: 14px;
  font-weight: 500;
`;

export const Message = styled.Text`
  padding-left: 15px;
  font-size: 12px;
  font-weight: 500;
  line-height: 32px;
`;
