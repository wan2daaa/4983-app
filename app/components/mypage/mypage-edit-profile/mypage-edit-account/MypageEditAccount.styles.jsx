import styled from 'styled-components/native';

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

export const DropDown = styled.TouchableOpacity`
  width: 100px;
  height: 59px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  border: 1px solid #fff;
  background: rgba(236, 236, 236, 0.6);
`;

export const DropDownText = styled.Text`
  margin-right: 2px;
  color: #818181;
  font-size: 15px;
  font-weight: 400;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#818181',
})`
  width: 219px;
  height: 59px;
  padding-left: 20px;
  margin-left: 7px;
  border-radius: 15px;
  border: 1px solid #fff;
  background: rgba(236, 236, 236, 0.6);
`;

export const BankListBox = styled.View`
  width: 100px;
  height: 250px;
  margin-top: 10px;
  border-radius: 50px;
  box-shadow: 0px -8px 8px rgba(0, 0, 0, 0.1);
`;
