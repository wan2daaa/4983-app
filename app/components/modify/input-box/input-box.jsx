import * as styles from './input-box.styles';
import {ExplanationBox} from '@components/modify/input-box/explanation-box/explanation-box';
import {View} from 'react-native';
import SelectIcon from '@assets/images/common/select-icon.svg';
import NotSelectIcon from '@assets/images/common/not-select-icon.svg';
import {useState} from 'react';
import LeftArrow from '@assets/images/sell/left-arrow.svg';
import RightArrow from '@assets/images/sell/right-arrow.svg';
import DatePicker from 'react-native-date-picker';
export const InputBox = ({
  inputTitle,
  input,
  setInput,
  placeholder,
  isUsingDate,
  isUsingSelectBox,
  isCoverDamaged,
  isDiscolorationAndDamage,
  isUnderlinedOrWrite,
  setIsCoverDamaged,
  setIsDiscolorationAndDamage,
  setIsUnderlinedOrWrite,
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
}) => {
  const [isCalendarClicked, setIsCalendarClicked] = useState(false);
  const [isDatePickerClicked, setIsDatePickerClicked] = useState(false);

  return isUsingDate ? (
    <styles.InputBox>
      <styles.TitleBox>
        <styles.TitleText>{inputTitle}</styles.TitleText>
        <styles.InputEssentialIcon>*</styles.InputEssentialIcon>
        <View>
          <ExplanationBox />
        </View>
      </styles.TitleBox>
      <styles.TextInputListBox>
        <View>
          <styles.DateTimeTextInput
            value={selectedDate}
            onChangeText={setSelectedDate}
            placeholder={'yyyy.mm.dd'}
          />
          <styles.CalendarIconTouchableOpacity
            onPress={() => {
              setIsCalendarClicked(!isCalendarClicked);
              setIsDatePickerClicked(false);
            }}>
            <styles.CalenderIcon />
          </styles.CalendarIconTouchableOpacity>
        </View>
        <View>
          <styles.DateTimeTextInput
            value={`${selectedTime.getHours()}:${
              selectedTime.getMinutes() < 10
                ? `0${selectedTime.getMinutes()}`
                : `${selectedTime.getMinutes()}`
            }`}
            placeholder={'00:00'}
            style={{paddingLeft: 35}}
          />
          <styles.TimeIconTouchableOpacity
            onPress={() => {
              setIsDatePickerClicked(!isDatePickerClicked);
              setIsCalendarClicked(false);
            }}>
            <styles.TimeIcon />
          </styles.TimeIconTouchableOpacity>
          <DatePicker
            modal
            open={isDatePickerClicked}
            mode={'time'}
            date={selectedTime}
            minuteInterval={10}
            title={'거래 시간을 선택해주세요'}
            onConfirm={date => {
              setSelectedTime(date);
              setIsDatePickerClicked(false);
            }}
            onCancel={() => {
              setIsDatePickerClicked(false);
            }}
          />
        </View>
      </styles.TextInputListBox>
      {isCalendarClicked && (
        <styles.StyledCalendar
          renderArrow={direction =>
            direction === 'left' ? <LeftArrow /> : <RightArrow />
          }
          onDayPress={day => {
            setSelectedDate(day.dateString);
            setIsCalendarClicked(false);
          }}
          markedDates={{
            [selectedDate]: {
              selected: true,
            },
          }}
          theme={{
            textSectionTitleColor: '#000',
            selectedDayBackgroundColor: '#02B878',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#000',
            dayTextColor: '#2d4150',
          }}
        />
      )}
    </styles.InputBox>
  ) : isUsingSelectBox ? (
    <styles.InputBox style={{zIndex: -1, height: 105}}>
      <styles.TitleBox>
        <styles.TitleText>{inputTitle}</styles.TitleText>
        <styles.InputEssentialIcon>*</styles.InputEssentialIcon>
      </styles.TitleBox>
      <styles.SelectBox>
        <styles.SelectTouchableOpacity
          onPress={() => {
            setIsUnderlinedOrWrite(!isUnderlinedOrWrite);
          }}>
          {isUnderlinedOrWrite ? <SelectIcon /> : <NotSelectIcon />}
          <styles.SelectText>밑줄 및 필기 흔적</styles.SelectText>
        </styles.SelectTouchableOpacity>
      </styles.SelectBox>
      <styles.SelectBox>
        <styles.SelectTouchableOpacity
          onPress={() => {
            setIsDiscolorationAndDamage(!isDiscolorationAndDamage);
          }}>
          {isDiscolorationAndDamage ? <SelectIcon /> : <NotSelectIcon />}
          <styles.SelectText>페이지 변색 및 훼손</styles.SelectText>
        </styles.SelectTouchableOpacity>
      </styles.SelectBox>
      <styles.SelectBox>
        <styles.SelectTouchableOpacity
          onPress={() => {
            setIsCoverDamaged(!isCoverDamaged);
          }}>
          {isCoverDamaged ? <SelectIcon /> : <NotSelectIcon />}
          <styles.SelectText>겉표지 훼손</styles.SelectText>
        </styles.SelectTouchableOpacity>
      </styles.SelectBox>
    </styles.InputBox>
  ) : (
    <styles.InputBox style={{zIndex: -1}}>
      <styles.TitleBox>
        <styles.TitleText>{inputTitle}</styles.TitleText>
        <styles.InputEssentialIcon>*</styles.InputEssentialIcon>
      </styles.TitleBox>
      <styles.TextInput
        value={input}
        onChangeText={setInput}
        placeholder={placeholder}
      />
    </styles.InputBox>
  );
};
