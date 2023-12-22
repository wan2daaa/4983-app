import styled from 'styled-components';

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
