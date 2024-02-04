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
