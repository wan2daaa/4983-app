import styled from 'styled-components/native';

export const Container = styled.View`
  height: 88px;
  margin-bottom: 8px;
`;

export const TitleBox = styled.View`
  height: 27px;
  margin-bottom: 6px;
  flex-direction: row;
  align-items: center;
`;

export const IconBox = styled.View`
  width: 33px;
  height: 27px;
  margin-left: 7px;
  margin-right: 2px;
`;

export const Title = styled.Text`
  color: #36332e;
  font-size: 14px;
  font-weight: 700;
`;

export const DateContainer = styled.View`
  height: 33px;
  margin-left: 7px;
  margin-bottom: 4px;
`;

export const DateBox = styled.View`
  position: absolute;
  height: 33px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 48px;
  align-items: center;
  justify-content: center;
  background: #ececec;
`;

export const DateText = styled.Text`
  color: #36332e;
  font-size: 14px;
  font-weight: 600;
`;

export const Content = styled.Text`
  height: 18px;
  padding-left: 16px;
  color: #36332e;
  font-size: 10px;
  font-weight: 500;
`;

export const ContentBold = styled.Text`
  color: #36332e;
  font-size: 10px;
  font-weight: 600;
`;
