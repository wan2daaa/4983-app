import styled from 'styled-components/native';

export const CategoryContainer = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const HeaderContainer = styled.View`
  height: 44px;
  justify-content: center;
`;

export const HeaderText = styled.Text`
  color: #36332e;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
`;

export const CancelButtonBox = styled.TouchableOpacity`
  position: absolute;
  left: 12px;
  top: 12px;
`;

export const AllSelectContainer = styled.View`
  height: 40px;
  background-color: #f6f6f6;
  flex-direction: row;
  align-items: center;
`;

export const AllSelectButton = styled.TouchableOpacity`
  left: 16px;
`;

export const AllSelectText = styled.Text`
  left: 22px;
  color: #36332e;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
`;
