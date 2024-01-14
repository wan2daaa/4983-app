import styled from 'styled-components';

export const Container = styled.View`
  width: 100%;
  height: 256px;
  border-bottom-width: 7px;
  border-bottom-color: #f6f6f6;
  background: #ffffff;
`;

export const TitleContainer = styled.View`
  width: 100%;
  height: 41px;
  padding-left: 16px;
  justify-content: center;
`;
export const Title = styled.Text`
  color: #36332e;
  font-size: 18px;
  font-weight: 700;
`;

export const BoxContainer = styled.TouchableOpacity`
  width: 100%;
  height: 52px;
  flex-direction: row;
  align-items: center;
  padding-left: 16px;
`;

export const ContentText = styled.Text`
  margin-left: 6px;
  color: #36332e;
  font-size: 18px;
  font-weight: 500;
`;
