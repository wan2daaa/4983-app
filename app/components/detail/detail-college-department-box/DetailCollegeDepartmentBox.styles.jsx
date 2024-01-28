import styled from 'styled-components/native';

export const Container = styled.View`
  height: 28px;
  margin-top: 17px;
  flex-direction: row;
  padding-left: 16px;
`;

export const Box = styled.View`
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 48px;
  justify-content: center;
  background: #ececec;
  margin-right: 10px;
`;
export const Content = styled.Text`
  color: #414141;
  font-size: 14px;
  font-weight: 400;
`;

export const MoreButton = styled.TouchableOpacity`
  position: absolute;
  align-self: center;
  right: 9px;
`;

export const ModalContainer = styled.TouchableOpacity`
  flex: 1;
  background: rgba(54, 51, 46, 0.5);
`;

export const ModalBox = styled.View`
  position: absolute;
  width: 130px;
  height: 80px;
  top: 140px;
  right: 25px;
`;

export const ModalEditBox = styled.TouchableOpacity`
  height: 50%;
  justify-content: center;
  background: #ffffff;
  border-bottom-width: 1px;
  border-bottom-color: rgba(54, 51, 46, 0.5);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const ModalDeleteBox = styled.TouchableOpacity`
  height: 50%;
  justify-content: center;
  background: #ffffff;
  border-top-width: 1px;
  border-top-color: rgba(54, 51, 46, 0.5);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

export const ModalText = styled.Text`
  text-align: center;
  color: #000;
  font-size: 15px;
  font-weight: 400;
`;

export const DeleteModalContainer = styled.TouchableOpacity`
  flex: 1;
  background: rgba(54, 51, 46, 0.5);
  justify-content: center;
  align-items: center;
`;

export const DeleteModalBox = styled.View`
  width: 315px;
  height: 165px;
  align-items: center;
  border-radius: 34px;
  background: #fff;
`;

export const DeleteModalTitle = styled.Text`
  margin-top: 27px;
  height: 64px;
  color: #36332e;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
`;

export const DeleteButtonBox = styled.View`
  width: 281px;
  height: 42px;
  flex-direction: row;
  justify-content: space-between;
`;

export const DeleteButton = styled.TouchableOpacity`
  width: 132px;
  height: 42px;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  border: 1px solid #c0c0c0;
  background: #fff;
`;

export const DeleteButtonText = styled.Text`
  color: #8e8e8e;
  font-size: 14px;
  font-weight: 400;
`;

export const CancelButton = styled.TouchableOpacity`
  width: 131px;
  height: 42px;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  background: #3a3a3a;
`;

export const CancelButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: 400;
`;
