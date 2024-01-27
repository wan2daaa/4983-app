import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const MapBox = styled.View`
  width: 100%;
  height: 113px;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.TouchableOpacity`
  width: 355px;
  height: 100px;
  flex-direction: row;
  justify-content: space-between;
`;
export const ImageBox = styled.Image`
  width: 100px;
  height: 100%;
  border-radius: 10px;
  background: bisque;
`;

export const ContentBox = styled.View`
  width: 240px;
  height: 100%;
  flex-direction: column;
  padding-top: 17px;
  padding-bottom: 17px;
`;

export const Content1 = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 4px;
`;

export const TagBox = styled.View`
  width: 42px;
  height: 17.385px;
  margin-right: 5px;
  justify-content: center;
  border-radius: 16px;
  //background: #02b878;
`;

export const TagText = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 9px;
  font-weight: 600;
`;

export const BookName = styled.Text`
  color: var(--B-100, #36332e);
  font-size: 16px;
  font-weight: 600;
`;

export const Content2 = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const DateText = styled.Text`
  margin-bottom: 2px;
  color: var(--B-100, #36332e);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
`;

export const Content3 = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PriceText = styled.Text`
  color: var(--B-100, #36332e);
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
`;
