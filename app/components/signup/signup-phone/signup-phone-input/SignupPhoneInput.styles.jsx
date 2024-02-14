import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 171px;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

export const InputContainer = styled.View`
  width: 82.666666666666667%;
  height: 66px;
`;

export const InputTitle = styled.Text`
  padding-left: 6px;
  color: #36332e;
  font-size: 15px;
  font-weight: 500;
`;

export const InputButtonBox = styled.View`
  width: 100%;
  height: 32px;
  flex-direction: row;
  justify-content: space-between;
`;

export const InputBox = styled.View`
  width: 232px;
  height: 32px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 0.5px;
  border-bottom-color: #818181;
`;

export const PhoneInput = styled.TextInput.attrs({
  placeholderTextColor: '#818181',
})`
  width: 232px;
  padding-left: 5px;
  border-bottom-width: 0.5px;
  border-bottom-color: #818181;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#818181',
})`
  width: 170px;
  height: 32px;
  padding-left: 5px;
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
  color: ${props => (props.isCertificationNumberMatch ? '#02B878' : '#f61818')};
  font-size: 10px;
  font-weight: 500;
`;

export const LeftTime = styled.Text`
  color: #f61818;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
`;
