import styled from 'styled-components/native';

export const ButtonContainer = styled.View`
  width: 185px;
  height: 30px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 12px;
`;

export const RefuseButton = styled.TouchableOpacity`
  width: 87px;
  height: 30px;
  justify-content: center;
  border-radius: 30px;
  border: 1px solid #fff;
  background: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
`;

export const RefuseButtonText = styled.Text`
  color: #362d2d;
  text-align: center;
  font-size: 13px;
  font-weight: 700;
`;

export const AcceptButton = styled.TouchableOpacity`
  width: 87px;
  height: 30px;
  justify-content: center;
  border-radius: 30px;
  border: 1px solid #eee;
  background: #02b878;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
`;

export const AcceptButtonText = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 13px;
  font-weight: 700;
`;

export const Button = styled.TouchableOpacity`
  width: 192px;
  height: 30px;
  margin-top: 12px;
  justify-content: center;
  border-radius: 30px;
  border: 1px solid #eee;
  background: #02b878;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
`;

export const ButtonText = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 13px;
  font-weight: 700;
`;
