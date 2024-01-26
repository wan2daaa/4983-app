import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const DepartmentBox = styled.TouchableOpacity`
  height: 48px;
  align-items: center;
  justify-content: center;
  border-bottom-width: 1px;
  border-color: #e5e5e5;
`;

export const Button = styled.TouchableOpacity`
  margin-left: 17px;
  margin-right: 10px;
`;

export const DepartmentText = styled.Text`
  color: #36332e;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;
