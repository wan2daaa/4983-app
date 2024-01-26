import styled from 'styled-components/native';

export const ExplanationTextBox = styled.View`
  position: absolute;
  top: 21px;

  padding-top: 22px;

  width: 189px;
  height: 100px;
  border-radius: 17px;
  background: #fff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  align-items: center;

  z-index: 2000;
`;

export const CancelButtonTouchableOpacity = styled.TouchableOpacity`
  position: absolute;
  left: 14px;
  top: 8px;
`;

export const ExplanationText = styled.Text`
  color: #000;
  text-align: center;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
`;

export const ExplanationTextBold = styled.Text`
  color: #000;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
`;

export const ExplanationTextGreen = styled.Text`
  color: #0fd08d;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
`;
