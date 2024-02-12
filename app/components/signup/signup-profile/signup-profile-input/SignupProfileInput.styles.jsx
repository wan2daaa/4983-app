import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 170px;
  align-items: center;
`;

export const InputBox = styled.View`
  width: 82.666666666666667%;
  height: 50%;
`;

export const InputTitle = styled.Text`
  padding-left: 6px;
  color: #02be7c;
  font-size: 15px;
  font-weight: 500;
  line-height: 32px;
`;

export const InputButtonBox = styled.View`
  width: 100%;
  height: 30px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#818181',
})`
  width: 232px;
  padding-left: 5px;
  border-bottom-width: 0.5px;
  border-bottom-color: #818181;
`;

export const ButtonBox = styled.View`
  width: 72px;
  justify-content: center;
  border-radius: 15px;
  background: #d1d1d1;
`;

export const ButtonText = styled.Text`
  text-align: center;
  color: #50555c;
  font-size: 14px;
  font-weight: 500;
`;

export const MessageText = styled.Text`
  margin-top: 3px;
  padding-left: 6px;
  color: ${props => (props.isStudentIdDuplicate ? '#f61818' : '#02be7c')};
  font-size: 10px;
  font-weight: 500;
`;

export const MessageText2 = styled.Text`
  margin-top: 3px;
  padding-left: 6px;
  color: ${props => (props.isNicknameDuplicate ? '#f61818' : '#02be7c')};
  font-size: 10px;
  font-weight: 500;
`;
