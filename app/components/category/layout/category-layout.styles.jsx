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
  justify-content: center;
  background-color: #f6f6f6;
`;

export const AllSelectButton = styled.TouchableOpacity`
  left: 16px;
`;
