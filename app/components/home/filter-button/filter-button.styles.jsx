import styled from 'styled-components/native';
export const ConditionContainer = styled.View`
  height: 39px;
  flex-direction: row;
`;

export const CategoryDiv = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  margin-left: 16px;
  margin-right: 9px;
`;

export const filterDiv = styled.ScrollView`
  height: 39px;
  background-color: #fff;

  z-index: 1000;
`;

export const FilterButton = styled.TouchableOpacity`
  height: 35px;
  font-weight: 400;
  line-height: 20px;
  border-radius: 100px;
  border: 1px solid #c0c0c0;
  background: #fff;
  padding: 8px 12px;
  color: #8e8e8e;
`;

export const FilterButtonClicked = styled.TouchableOpacity`
  //width: 52px;
  height: 34px;
  font-weight: 400;
  line-height: 20px;
  border-radius: 100px;
  background-color: #3a3a3a;
  padding: 8px 12px;
  color: #fff;
  z-index: 1003;
`;

export const FilterText = styled.Text`
  color: #8e8e8e;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

export const FilterTextClicked = styled.Text`
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;
