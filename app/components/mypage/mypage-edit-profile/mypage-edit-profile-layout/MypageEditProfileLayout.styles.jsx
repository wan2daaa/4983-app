import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #ffffff;
`;

export const EditButton = styled.TouchableOpacity`
  margin-right: 5px;
  width: 80px;
  height: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background: ${props => (props.editButtonDisabled ? '#D1D1D1' : '#02B878')};
`;

export const EditButtonText = styled.Text`
  color: ${props => (props.editButtonDisabled ? '#50555C' : '#fff')};
  font-size: 14px;
  font-weight: 600;
`;

export const ProfileBox = styled.View`
  margin-bottom: 12px;
  width: 100%;
  height: 157px;
  align-items: center;
  border-bottom-width: 9px;
  border-bottom-color: #f6f6f6;
`;

export const ProfileImage = styled.TouchableOpacity`
  width: 84px;
  height: 84px;
  align-self: center;
  align-items: center;
  justify-content: flex-end;
  bottom: 8px;
  margin-top: 11px;
  margin-bottom: 11px;
  border-radius: 42px;
  background: #eee;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.15);
`;

export const PhotoEditBox = styled.TouchableOpacity`
  position: absolute;
  width: 26px;
  height: 25px;
  bottom: 0;
  right: 0;
`;

export const ProfileName = styled.Text`
  color: #36332e;
  font-size: 18px;
  font-weight: 700;
`;

export const ModalContainer = styled.View`
  flex: 1;
  background: rgba(54, 51, 46, 0.5);
  justify-content: center;
  align-items: center;
`;

export const ModalBox = styled.View`
  width: 326px;
  height: 134px;
  position: absolute;
  bottom: 39px;
`;

export const ModalSelectBox = styled.View`
  width: 100%;
  height: 41px;
  justify-content: center;
  border-bottom-width: 1px;
  border-bottom-color: rgba(54, 51, 46, 0.5);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: #ffffff;
`;

export const ModalSelectText = styled.Text`
  text-align: center;
  color: #02b878;
  font-size: 15px;
  font-weight: 400;
`;

export const ModalDeleteBox = styled.View`
  width: 100%;
  height: 41px;
  justify-content: center;
  border-top-width: 1px;
  border-top-color: rgba(54, 51, 46, 0.5);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background: #ffffff;
  margin-bottom: 9px;
`;

export const ModalDeleteText = styled.Text`
  text-align: center;
  color: #000;
  font-size: 15px;
  font-weight: 400;
`;

export const ModalCancelButton = styled.TouchableOpacity`
  width: 100%;
  height: 41px;
  justify-content: center;
  border-radius: 10px;
  background: #ffffff;
`;

export const ModalCancelText = styled.Text`
  text-align: center;
  color: #f61818;
  font-size: 15px;
  font-weight: 400;
`;
