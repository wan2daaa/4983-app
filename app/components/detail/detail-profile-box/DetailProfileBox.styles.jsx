import styled from 'styled-components/native';

export const Container = styled.View`
  height: 44px;
  margin-top: 12px;
  margin-bottom: 15px;
  flex-direction: row;
  padding-left: 16px;
`;

export const ImageBox = styled.View`
  width: 44px;
  height: 44px;
  margin-right: 8px;
  border-radius: 14px;
`;

export const Box = styled.View`
  width: 100%;
  height: 44px;
  flex-direction: column;
`;

export const NameBox = styled.View`
  height: 24px;
  justify-content: center;
`;
export const Name = styled.Text`
  color: #36332e;
  font-size: 16px;
  font-weight: 600;
`;

export const DateBox = styled.View`
  height: 20px;
  justify-content: center;
`;
export const Date = styled.Text`
  color: #8f8f8f;
  font-size: 14px;
  font-weight: 400;
`;
