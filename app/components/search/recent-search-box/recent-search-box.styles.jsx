import styled from 'styled-components/native';

export const RecentSearchBoxContainer = styled.View`
  flex: 1;
  padding-left: 16px;
  padding-top: 30px;
`;

export const RecentSearchHeaderText = styled.Text`
  padding-bottom: 10px;
  color: #36332e;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
`;

export const RecentSearchTextContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 11px;
  flex-basis: 12px;
`;

export const EachRecentSearchTextBox = styled.View`
  height: 28px;
  border-radius: 50px;
  background: #ebebeb;
  justify-content: center;
  padding-left: 10.5px;
  padding-right: 10.5px;
`;

export const EachRecentSearchText = styled.Text`
  height: 20px;

  color: #858176;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
`;
