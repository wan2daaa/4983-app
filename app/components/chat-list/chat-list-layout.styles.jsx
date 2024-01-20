import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const HeaderContainer = styled.View`
  height: 56px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const HeaderText = styled.Text`
  color: #36332e;
  font-size: 20px;
  font-weight: 700;
`;

export const BackButtonTouchableOpacity = styled.TouchableOpacity`
  position: absolute;
  left: 12px;
`;

export const ScrollViewContainer = styled.ScrollView`
  flex: 1;
`;

export const BorderLine = styled.View`
  width: 100%;
  height: 1px;
  background-color: #e1e1e1;
`;
