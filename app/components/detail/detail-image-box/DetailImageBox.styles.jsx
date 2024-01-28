import styled from 'styled-components/native';

export const ImageContainer = styled.View`
  height: 200px;
  margin-bottom: 4px;
`;

export const ImageScrollView = styled.ScrollView`
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
