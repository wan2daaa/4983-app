import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #f6f6f6;
  align-items: center;
`;

export const Box = styled.View`
  width: 360px;
  height: 100%;
  margin-top: 6px;
  border-radius: 10px;
  background: #ffffff;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #000;
  margin-top: 20px;
  margin-left: 20px;
`;

export const BottomBox = styled.View`
  width: 100%;
  height: 59px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-top-width: 1px;
  border-top-color: #eee;
`;

export const PriceBox = styled.View`
  width: 140px;
  height: 24px;
`;

export const Price = styled.Text`
  color: #000;
  font-size: 18px;
  font-weight: 700;
`;

export const Button = styled.TouchableOpacity`
  width: 179px;
  height: 44px;
  justify-content: center;
  border-radius: 40px;
  background: #02b878;
`;

export const ButtonText = styled.Text`
  text-align: center;
  color: #fff;
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
