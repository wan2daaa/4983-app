import styled from 'styled-components/native';

export const ButtonBox = styled.View`
  width: 312px;
  height: 51px;
  margin-bottom: 10px;
  align-self: center;
  justify-content: center;
  border-radius: 15px;
  background: ${props =>
    props.selectedCollegeId === -1 ? '#D1D1D1' : '#02B878'};
`;

export const ButtonText = styled.Text`
  text-align: center;
  color: ${props => (props.selectedCollegeId === -1 ? '#707479' : '#FFF')};
  font-size: 15px;
  font-weight: 700;
`;
