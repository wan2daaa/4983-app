import styled from 'styled-components';

export const Container = styled.View`
  width: 100%;
  height: 210px;
  align-items: center;
`;

export const InputContainer = styled.View`
  width: 280px;
  height: 105px;
`;

export const InputTitleColor = styled.Text`
  padding-left: 6px;
  color: #02be7c;
  font-size: 15px;
  font-weight: 500;
  line-height: 32px;
`;

export const InputTitle = styled.Text`
  padding-left: 6px;
  color: #36332e;
  font-size: 15px;
  font-weight: 500;
  line-height: 32px;
`;

export const PasswordBox = styled.View`
  width: 100%;
  height: 32px;
  margin-bottom: 1.5%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 0.5px;
  border-bottom-color: #818181;
`;

export const PasswordInput = styled.TextInput.attrs({
  placeholderTextColor: '#818181',
})`
  width: 80%;
  height: 50%;
  padding-left: 5px;
  color: #36332e;
  font-size: 15px;
  font-weight: 400;
`;

export const Content = styled.Text`
  padding-left: 6px;
  color: #50555c;
  font-size: 10px;
  font-weight: 500;
`;

export const ErrorText = styled.Text`
  padding-left: 6px;
  color: #f61818;
  font-size: 10px;
  font-weight: 500;
`;

export const SuccessText = styled.Text`
  padding-left: 6px;
  color: #02b878;
  font-size: 10px;
  font-weight: 500;
`;
