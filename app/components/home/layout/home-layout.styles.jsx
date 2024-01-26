import styled from 'styled-components/native';

export const MainContainer = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const HeaderContainer = styled.View`
  height: 50.733px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const HeaderText = styled.Text`
  color: #000;
  font-size: 20px;
  font-weight: 700;
`;

export const SearchIconContainer = styled.TouchableOpacity`
  position: absolute;
  top: 15px;
  right: 12px;
`;

export const FastTradeContainer = styled.View`
  height: 56px;
  flex-direction: row;
  align-items: center;
`;

export const FastTradeIcon = styled.TouchableOpacity`
  left: 20px;
  flex-direction: row;
  gap: 4px;
`;

export const FastTradeText = styled.Text`
  color: #36332e;
  font-size: 14px;
  font-weight: 700;
`;

export const ScrollViewContainer = styled.ScrollView`
  flex: 1;
`;

export const SellButtonContainer = styled.View`
  position: absolute;
  flex-direction: row-reverse;
  right: 9px;
  bottom: 12px;
`;

export const SellButtonBox = styled.TouchableOpacity`
  width: 146px;
  height: 62px;
  background-color: #02b878;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const SellButtonText = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
`;
