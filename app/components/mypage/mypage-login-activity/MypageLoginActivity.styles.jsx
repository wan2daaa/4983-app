import styled from 'styled-components';

export const Container = styled.View`
  width: 100%;
  height: 204px;
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

export const ModalContainer = styled.View`
  flex: 1;
  background: rgba(54, 51, 46, 0.5);
  justify-content: center;
  align-items: center;
`;

export const ModalBox = styled.View`
  width: 315px;
  height: 165px;
  border-radius: 34px;
  background: #fff;
  align-items: center;
`;

export const ModalContentText = styled.Text`
  margin-top: 46px;
  margin-bottom: 20px;
  color: #000;
  font-size: 18px;
  font-weight: 500;
`;

export const ModalButtonContainer = styled.View`
  width: 281px;
  height: 42px;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
`;

export const ModalButton = styled.TouchableOpacity`
  width: 132px;
  height: 42px;
  justify-content: center;
  border-radius: 100px;
  border: 1px solid #c0c0c0;
  background: #fff;
`;

export const ModalButtonText = styled.Text`
  text-align: center;
  color: #8e8e8e;
  font-size: 16px;
  font-weight: 400;
`;
export const ModalCancelButton = styled.TouchableOpacity`
  width: 132px;
  height: 42px;
  justify-content: center;
  border-radius: 100px;
  background: #3a3a3a;
`;

export const ModalCancelButtonText = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
`;
