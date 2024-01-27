import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const ProfileContainer = styled.View`
  width: 100%;
  height: 139.46px;
  align-items: center;
  justify-content: center;
  border-bottom-width: 7px;
  border-bottom-color: #f6f6f6;
  background: #ffffff;
`;

export const ProfileBox = styled.View`
  width: 352px;
  height: 99px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 30px;
  background: #fff;
  box-shadow: -1px 2px 9px rgba(0, 0, 0, 0.1);
`;

export const ProfileImage = styled.View`
  width: 84px;
  height: 84px;
  align-self: center;
  margin-left: 17px;
  margin-right: 13px;
  border-radius: 42px;
  background: #eee;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.15);
`;

export const NameBox = styled.View`
  width: 130px;
`;
export const Name = styled.Text`
  color: #36332e;
  font-size: 18px;
  font-weight: 700;
`;

export const EditProfileButton = styled.TouchableOpacity`
  width: 93px;
  height: 30px;
  margin-right: 16px;
  justify-content: center;
  border-radius: 50px;
  background: #02b878;
`;

export const EditProfileButtonText = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
`;

export const ModalContainer = styled.View`
  flex: 1;
  background: rgba(54, 51, 46, 0.5);
  justify-content: center;
  align-items: center;
`;

export const ModalBox = styled.View`
  width: 330px;
  height: 250px;
  align-items: center;
  border-radius: 33px;
  background: #fff;
`;

export const ModalTitle = styled.Text`
  margin-top: 40px;
  margin-bottom: 15px;
  color: #000;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
`;

export const ModalTitleColor = styled.Text`
  color: #32c491;
  font-size: 16px;
  font-weight: 700;
`;

export const ModalInputBox = styled.View`
  width: 285px;
  height: 73px;
`;

export const ModalInput = styled.TextInput.attrs({
  placeholderTextColor: '#818181',
})`
  padding-left: 15px;
  width: 285px;
  height: 41px;
  border-radius: 10px;
  background: #f6f6f6;
`;

export const ModalButtonBox = styled.View`
  margin-bottom: 7px;
  width: 283px;
  height: 42px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ModalCancelButton = styled.TouchableOpacity`
  width: 132px;
  height: 42px;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  border: 1px solid #c0c0c0;
  background: #fff;
`;

export const ModalCancelButtonText = styled.Text`
  color: #8e8e8e;
  font-size: 16px;
  font-weight: 400;
`;

export const ModalButton = styled.TouchableOpacity`
  width: 131px;
  height: 42px;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  background: #32c491;
`;

export const ModalButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 400;
`;

export const FindPasswordButton = styled.TouchableOpacity``;

export const FindPasswordButtonText = styled.Text`
  color: #969393;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  line-height: 25px;
  text-decoration-line: underline;
`;

export const ErrorMessage = styled.Text`
  padding-left: 15px;
  color: #f00;
  font-size: 10px;
  font-weight: 500;
  line-height: 32px;
`;
