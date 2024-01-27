import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  border-top-width: 6px;
  border-top-color: #f6f6f6;
  background: #ffffff;
`;

export const TabsContainer = styled.View`
  width: 100%;
  height: 43px;
  margin-bottom: 19px;
  flex-direction: row;
`;

export const TabBox = styled.View`
  width: 50%;
  height: 100%;
  align-items: center;
`;

export const Tab = styled.TouchableOpacity`
  width: 67px;
  height: 100%;
  border-bottom-width: ${({active}) => (active ? '1px' : '0')};
  border-bottom-color: ${({active}) => (active ? '#000' : 'transparent')};
  justify-content: center;
  align-items: center;
`;

export const TabText = styled.Text`
  color: #000;
  font-size: 15px;
  font-weight: 500;
`;
