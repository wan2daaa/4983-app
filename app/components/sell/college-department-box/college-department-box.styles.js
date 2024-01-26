import styled from 'styled-components/native';

export const Box = styled.View`
  height: 56px;
  background-color: #fff;

  align-items: center;
  flex-direction: row;
`;

export const CollegeDepartmentBox = styled.TouchableOpacity`
  height: 40px;

  margin-left: 12px;
  padding: 12px 14px 12px 19px;

  background-color: #f2f2f2;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-radius: 16px;
`;

export const CollegeDepartmentText = styled.Text`
  color: #50555c;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;

  margin-right: 12px;
`;

export const CollegeLiberalArtsOptionBox = styled.View`
  position: absolute;
  top: 56px;
  margin-left: 12px;
  height: 84px;
  width: 156px;

  border-radius: 16px;
  background-color: #f6f6f6;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);

  gap: 2px;
`;

export const CollegeOptionTouchableOpacity = styled.TouchableOpacity`
  height: 41px;
  justify-content: center;
  align-items: center;

  border-top-left-radius: 16px;
  border-top-right-radius: 16px;

  background-color: #fff;
`;

export const CollegeOptionText = styled.Text`
  color: #000;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const LiberalArtsTouchableOpacity = styled.TouchableOpacity`
  height: 41px;
  justify-content: center;
  align-items: center;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;

  background-color: #fff;
`;

export const LiberalArtsText = styled.Text`
  color: #000;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
