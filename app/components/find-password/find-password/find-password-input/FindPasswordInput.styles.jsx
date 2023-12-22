import styled from 'styled-components';

export const Container = styled.View`
  width: 100%;
  height: 50%;
  align-items: center;
`;

export const InputBox = styled.View`
  width: 74.133333333333333%;
  height: 38.116591928251121%;
`;

export const InputTitle = styled.Text`
  padding-left: 6px;
  color: #02be7c;
  font-size: 15px;
  font-weight: 700;
  line-height: 32px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#818181',
})`
  width: 100%;
  height: 37.647058823529412%;
  padding-left: 5px;
  border-bottom-width: 0.5px;
  border-bottom-color: #818181;
  background: #ffffff;

  color: #36332e;
  font-size: 15px;
  font-weight: 400;
`;

export const PhoneInputBox = styled.View`
  width: 74.133333333333333%;
  height: 47.533632286995516%;
`;

export const PhoneContainer = styled.View`
  height: 37.647058823529412%;
  flex-direction: row;
  justify-content: space-between;
`;

export const PhoneInput = styled.TextInput.attrs({
  placeholderTextColor: '#818181',
})`
  width: 71.785714285714286%;
  padding-left: 5px;
  border-bottom-width: 0.5px;
  border-bottom-color: #818181;
  background: #ffffff;

  color: #36332e;
  font-size: 15px;
  font-weight: 400;
`;

export const ButtonBox = styled.TouchableOpacity`
  width: 25.714285714285714%;
  height: 33px;
  align-self: center;
  justify-content: center;
  border-radius: 15px;
  background: #d1d1d1;
`;

export const ButtonText = styled.Text`
  text-align: center;
  color: #50555c;
  font-size: 12px;
  font-weight: 500;
`;

export const CertificationInputBox = styled.View`
  width: 74.133333333333333%;
  height: 14.34977578475336%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 0.5px;
  border-bottom-color: #818181;
`;
export const CertificationInput = styled.TextInput.attrs({
  placeholderTextColor: '#818181',
})`
  height: 100%;
  padding-left: 5px;
  color: #36332e;
  font-size: 15px;
  font-weight: 400;
`;

export const LeftTime = styled.Text`
  color: #f61818;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
`;

export const ErrorText = styled.Text`
  padding-left: 5px;
  margin-top: 3px;
  color: #f61818;
  font-size: 10px;
  font-weight: 500;
`;
