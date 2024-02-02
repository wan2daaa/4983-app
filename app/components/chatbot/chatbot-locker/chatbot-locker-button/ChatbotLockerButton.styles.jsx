import styled from 'styled-components/native';

export const ButtonContainer = styled.View`
  height: 89px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const GuideBox = styled.View`
  width: 343px;
  height: 21px;
  align-items: center;
  flex-direction: row;
`;

export const UnavailableBox = styled.View`
  width: 21px;
  height: 21px;
  margin-right: 8px;
  border-radius: 5px;
  background: #d9d9d9;
`;

export const Text = styled.Text`
  margin-right: 19px;
  color: #000;
  font-size: 14px;
  font-weight: 700;
`;

export const AvailableBox = styled.View`
  width: 21px;
  height: 21px;
  margin-right: 8px;
  border-radius: 5px;
  background: #00d087;
`;

export const Button = styled.TouchableOpacity`
  width: 343px;
  height: 59px;
  justify-content: center;
  border-radius: 16px;
  background: ${props => (props.isLockerClicked ? '#02B878' : '#ccc')};
`;

export const ButtonText = styled.Text`
  color: ${props => (props.isLockerClicked ? '#fff' : '#898a8d')};
  text-align: center;
  font-size: 16px;
  font-weight: 700;
`;
