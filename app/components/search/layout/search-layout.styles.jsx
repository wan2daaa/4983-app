import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const HeaderContainer = styled.View`
  height: 56px;
  flex-direction: row;
  align-items: center;
`;

export const BackButtonTouchableOpacity = styled.TouchableOpacity`
  position: absolute;
  left: 12px;
`;

export const SearchTextInput = styled.TextInput`
  height: 24px;
  width: 280px;

  position: absolute;
  left: 50px;

  font-size: 16px;
  text-align: left;
`;

export const SearchButtonTouchableOpacity = styled.TouchableOpacity`
  position: absolute;
  right: 16px;
`;

export const OtherContainer = styled.View`
  flex: 1;
`;
