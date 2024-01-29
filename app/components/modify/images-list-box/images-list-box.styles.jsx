import styled from 'styled-components/native';

export const ImageListContainer = styled.View`
  height: 200px;
`;
export const ImageListScrollView = styled.ScrollView`
  flex: 1;
  padding-left: 12px;
  gap: 5px;
`;

export const EachImageBox = styled.TouchableOpacity`
  width: 330px;
  height: 200px;

  margin-right: 5px;

  border-radius: 15px;
  background: #f6f6f6;

  justify-content: center;
  align-items: center;
`;

export const EachImage = styled.Image`
  width: 330px;
  height: 200px;
  border-radius: 15px;
`;

export const DeleteButtonBox = styled.TouchableOpacity`
  position: absolute;
  top: -5px;
  right: -6px;
  z-index: 1000;
`;

export const EachImageText = styled.Text`
  color: #818181;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;
