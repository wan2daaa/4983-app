import styled from 'styled-components';

export const Container = styled.View`
  width: 100%;
  height: 170px;
  align-items: center;
  margin-bottom: 3%;
`;

export const InputContainer = styled.View`
  width: 82.666666666666667%;
  height: 50%;
`;

export const InputBox = styled.View`
  width: 100%;
  height: 30px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 0.5px;
  border-bottom-color: #818181;
`;

export const InputTitle = styled.Text`
  padding-left: 6px;
  color: #02be7c;
  font-size: 15px;
  font-weight: 500;
  line-height: 32px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#818181',
})`
  width: 260px;
  height: 100%;
  padding-left: 5px;
`;

export const Content = styled.Text`
  margin-top: 2px;
  padding-left: 6px;
  color: #50555c;
  font-size: 10px;
  font-weight: 500;
`;

export const ErrorText = styled.Text`
  margin-top: 2px;
  padding-left: 6px;
  color: #f61818;
  font-size: 10px;
  font-weight: 500;
`;

export const SuccessText = styled.Text`
  margin-top: 2px;
  padding-left: 6px;
  color: #02b878;
  font-size: 10px;
  font-weight: 500;
`;
