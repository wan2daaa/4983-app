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
  height: 40px;
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

export const BannerContainer = styled.TouchableOpacity`
  height: 81px;
  background: #ffffff;
`;

export const ModalContainer = styled.View`
  flex: 1;
  background: rgba(54, 51, 46, 0.5);
  justify-content: center;
  align-items: center;
`;

export const ModalBox = styled.View`
  width: 315px;
  height: 165px;
  align-items: center;
  border-radius: 34px;
  background: #fff;
`;

export const ModalTitle = styled.Text`
  margin-top: 29px;
  margin-bottom: 13px;
  color: #36332e;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  line-height: 32px;
`;

export const ModalButton = styled.TouchableOpacity`
  width: 225px;
  height: 42px;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  background: #3a3a3a;
`;

export const ModalButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: 400;
`;
