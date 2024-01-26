import {ScrollView, View} from 'react-native';
import {BorderLine} from '@components/common/border-line/border-line';
import {CollegeDepartmentBox} from '@components/sell/college-department-box/college-department-box';
import {ImagesListBox} from '@components/sell/images-list-box/images-list-box';
import {InputBox} from '@components/sell/input-box/input-box';
import * as styles from '@components/sell/layout/sell-layout.styles';

export const SellLayout = ({
  navigation,
  isCollegeLiberalArtsClicked,
  setIsCollegeLiberalArtsClicked,
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
  name,
  price,
  publisher,
  setName,
  setPrice,
  setPublisher,
  collegeLiberalArtLabel,
  collegeLiberalArtValue,
  departmentLabel,
  departmentValue,
  setCollegeLiberalArtLabel,
  setCollegeLiberalArtValue,
  setImageUris,
  imageUris,
  registerUsedBook,
}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <BorderLine />
      <ScrollView style={{flex: 1}}>
        <CollegeDepartmentBox
          navigation={navigation}
          isCollegeLiberalArtsClicked={isCollegeLiberalArtsClicked}
          setIsCollegeLiberalArtsClicked={setIsCollegeLiberalArtsClicked}
          collegeLiberalArtLabel={collegeLiberalArtLabel}
          departmentLabel={departmentLabel}
          setCollegeLiberalArtLabel={setCollegeLiberalArtLabel}
          setCollegeLiberalArtValue={setCollegeLiberalArtValue}
          collegeLiberalArtValue={collegeLiberalArtValue}
        />
        <ImagesListBox imageUris={imageUris} setImageUris={setImageUris} />
        <InputBox
          inputTitle="판매 가격"
          input={price}
          setInput={setPrice}
          placeholder="판매 가격을 입력해주세요"
        />
        <InputBox
          isUsingDate
          inputTitle="거래 날짜/시간 선택"
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
        />
        <InputBox
          inputTitle="전공서적명"
          input={name}
          setInput={setName}
          placeholder="판매하고자 하는 책의 이름을 입력해주세요"
        />
        <InputBox
          inputTitle="출판사"
          input={publisher}
          setInput={setPublisher}
          placeholder="책의 출판사를 입력해주세요"
        />
        <InputBox
          isUsingSelectBox
          inputTitle="서적 상태 체크란"
          isCoverDamaged={isCoverDamaged}
          isDiscolorationAndDamage={isDiscolorationAndDamage}
          isUnderlinedOrWrite={isUnderlinedOrWrite}
          setIsCoverDamaged={setIsCoverDamaged}
          setIsDiscolorationAndDamage={setIsDiscolorationAndDamage}
          setIsUnderlinedOrWrite={setIsUnderlinedOrWrite}
        />
        <styles.RegisterButton onPress={registerUsedBook}>
          <styles.RegisterButtonText>등록하기</styles.RegisterButtonText>
        </styles.RegisterButton>
      </ScrollView>
    </View>
  );
};
