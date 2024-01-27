import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 237px;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

export const InputContainer = styled.View`
  width: 82.666666666666667%;
  height: 64px;
`;

export const InputTitle = styled.Text`
  padding-left: 6px;
  color: #02be7c;
  font-size: 15px;
  font-weight: 500;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#818181',
})`
  width: 100%;
  height: 32px;
  padding-left: 5px;
  border-bottom-width: 0.5px;
  border-bottom-color: #818181;
`;
export const BankListContainer = styled.View`
  width: 100%;
  height: 32px;
  flex-direction: row;
  border-bottom-width: 0.5px;
  border-bottom-color: #818181;
`;

export const BankInput = styled.TextInput.attrs({
  placeholderTextColor: '#818181',
})`
  width: 90%;
  height: 32px;
  padding-left: 5px;
`;

export const BankListBox = styled.View`
  width: 82.666666666666667%;
  height: 250px;
  position: absolute;
  top: 150px;
  border-radius: 50px;
  box-shadow: 0px -8px 8px rgba(0, 0, 0, 0.1);
`;
