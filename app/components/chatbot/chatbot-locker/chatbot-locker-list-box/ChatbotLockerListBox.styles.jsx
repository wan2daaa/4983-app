import styled from 'styled-components/native';

export const Container = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  height: 510px;
`;

export const ListBox = styled.TouchableOpacity`
  width: 78px;
  height: 45px;
  margin-top: 15px;
  margin-left: 15px;
  border-radius: 5px;
  background: ${props =>
    props.isSelected ? '#50555C' : props.isExists ? '#ccc' : '#02B878'};
`;

export const ListBoxNumber = styled.Text`
  position: absolute;
  width: 21px;
  height: 15px;
  margin-top: 5px;
  margin-left: 09px;
  color: ${props => (props.isSelected ? '#fff' : '#000')};
  font-size: 14px;
  font-weight: 700;
`;
