import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #ffffff;
`;

export const TitleBold = styled.Text`
  margin-top: 13px;
  margin-bottom: 8px;
  color: #36332e;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
`;

export const TitleColor = styled.Text`
  color: #02be7c;
  font-size: 20px;
  font-weight: 700;
`;

export const Title = styled.Text`
  color: #818181;
  text-align: center;
  font-size: 15px;
  font-weight: 400;
`;

export const CollegeBox = styled.TouchableOpacity`
  flex-direction: row;
  height: 52px;
  align-items: center;
  border-bottom-width: 1px;
  border-color: #e5e5e5;
`;

export const Button = styled.TouchableOpacity`
  margin-left: 17px;
  margin-right: 10px;
`;

export const CollegeText = styled.Text`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  color: #36332e;
`;
