import styled from 'styled-components/native';
import CalendarSvgIcon from '@assets/images/sell/calendar-icon.svg';
import TimeSvgIcon from '@assets/images/sell/time-icon.svg';
import LeftArrow from '@assets/images/sell/left-arrow.svg';
import RightArrow from '@assets/images/sell/right-arrow.svg';
import {Calendar} from 'react-native-calendars';

export const InputBox = styled.View`
  height: 71px;
  margin-top: 10px;
  margin-left: 12px;
  margin-right: 12px;
`;

export const TitleBox = styled.View`
  padding-left: 12px;
  padding-bottom: 5px;

  flex-direction: row;
  z-index: 1300;
`;

export const TitleText = styled.Text`
  color: #50555c;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
`;

export const InputEssentialIcon = styled.Text`
  width: 13px;
  height: 14px;

  color: #ffdb57;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
`;

export const TextInputListBox = styled.View`
  flex-direction: row;
`;

export const TextInput = styled.TextInput`
  height: 40px;

  padding-left: 15px;

  border-radius: 16px;
  border: 1px solid #fff;

  background: #f6f6f6;

  z-index: 100;

  &::placeholder {
    color: #d1d1d1;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }
`;

export const DateTimeTextInput = styled.TextInput`
  height: 40px;
  width: 135px;

  padding-left: 15px;

  border-radius: 16px;
  border: 1px solid #fff;

  background: #f6f6f6;
  justify-content: center;
  align-items: center;

  &::placeholder {
    color: #d1d1d1;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }
`;

export const CalendarIconTouchableOpacity = styled.TouchableOpacity`
  position: absolute;
  top: 9px;
  left: 101px;
`;

export const CalenderIcon = styled(CalendarSvgIcon)``;

export const StyledCalendar = styled(Calendar)`
  position: absolute;
`;

export const CalendarLeftArrow = styled(LeftArrow);
export const CalendarRightArrow = styled(RightArrow);

export const TimeIconTouchableOpacity = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  left: 107px;
`;
export const TimeIcon = styled(TimeSvgIcon)``;

export const SelectBox = styled.TouchableOpacity`
  height: 25px;
  margin-top: 5px;
`;

export const SelectTouchableOpacity = styled.TouchableOpacity`
  flex-direction: row;
  gap: 4px;

  margin-left: 12px;
`;

export const SelectText = styled.Text`
  color: #818181;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;
