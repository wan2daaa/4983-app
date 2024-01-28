import {SellLayout} from '@components/sell/layout/sell-layout';
import {useEffect, useState} from 'react';
import {useIsFocused} from '@react-navigation/native';
import {findCategoryNameByValue} from '@data/categories';
import {useRecoilState} from 'recoil';
import {
  recoilSellCollege,
  recoilSellDepartment,
} from '@/recoil/atoms/SignupAtoms';
import {postUsedBook} from '@/apis/sell/sell-api';

export const Sell = ({navigation}) => {
  const [isCollegeLiberalArtsClicked, setIsCollegeLiberalArtsClicked] =
    useState(false);

  const [imageUris, setImageUris] = useState([]);

  const [isUnderlinedOrWrite, setIsUnderlinedOrWrite] = useState(false);
  const [isDiscolorationAndDamage, setIsDiscolorationAndDamage] =
    useState(false);
  const [isCoverDamaged, setIsCoverDamaged] = useState(false);

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState(new Date());

  const [price, setPrice] = useState(0);
  const [name, setName] = useState('');
  const [publisher, setPublisher] = useState('');

  const [collegeLiberalArtLabel, setCollegeLiberalArtLabel] =
    useState('전공/교양');
  const [collegeLiberalArtValue, setCollegeLiberalArtValue] = useState('');
  const [departmentLabel, setDepartmentLabel] = useState('학과');
  const [departmentValue, setDepartmentValue] = useState('');

  const [canPostBook, setCanPostBook] = useState(false);

  const [sellCollege, setSellCollege] = useRecoilState(recoilSellCollege);
  const [sellDepartment, setSellDepartment] =
    useRecoilState(recoilSellDepartment);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (!sellDepartment) {
      return;
    }

    setDepartmentValue(sellDepartment);
    setDepartmentLabel(findCategoryNameByValue(sellDepartment, true));

    setSellDepartment('');

    if (!sellCollege) {
      return;
    }
    setCollegeLiberalArtValue(sellCollege);
    setCollegeLiberalArtLabel(findCategoryNameByValue(sellCollege, false));
    setSellCollege('');
  }, [isFocused]);

  useEffect(() => {
    if (
      collegeLiberalArtValue !== '' &&
      departmentValue !== '' &&
      imageUris.length > 0 &&
      selectedDate !== '' &&
      selectedTime &&
      price !== 0 &&
      name !== '' &&
      publisher !== ''
    ) {
      setCanPostBook(true);
    } else {
      setCanPostBook(false);
    }
  }, [
    collegeLiberalArtValue,
    departmentValue,
    imageUris,
    selectedDate,
    selectedTime,
    price,
    name,
    publisher,
  ]);

  const registerUsedBook = () => {
    postUsedBook(
      collegeLiberalArtValue,
      departmentValue,
      price,
      `${selectedDate}T${
        selectedTime.getHours() < 10
          ? `0${selectedTime.getHours()}`
          : selectedTime.getHours()
      }:${
        selectedTime.getMinutes() < 10
          ? `0${selectedTime.getMinutes()}`
          : selectedTime.getMinutes()
      }:00`,
      name,
      publisher,
      isUnderlinedOrWrite,
      isDiscolorationAndDamage,
      isCoverDamaged,
      imageUris,
    ).then(usedBookId => {
      console.log('usedBookId: ', usedBookId);
      navigation.navigate('Detail', {
        usedBookId,
      });
    });
  };

  return (
    <SellLayout
      navigation={navigation}
      isCollegeLiberalArtsClicked={isCollegeLiberalArtsClicked}
      setIsCollegeLiberalArtsClicked={setIsCollegeLiberalArtsClicked}
      isUnderlinedOrWrite={isUnderlinedOrWrite}
      isDiscolorationAndDamage={isDiscolorationAndDamage}
      isCoverDamaged={isCoverDamaged}
      setIsUnderlinedOrWrite={setIsUnderlinedOrWrite}
      setIsDiscolorationAndDamage={setIsDiscolorationAndDamage}
      setIsCoverDamaged={setIsCoverDamaged}
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}
      selectedTime={selectedTime}
      setSelectedTime={setSelectedTime}
      price={price}
      name={name}
      publisher={publisher}
      setPrice={setPrice}
      setName={setName}
      setPublisher={setPublisher}
      collegeLiberalArtLabel={collegeLiberalArtLabel}
      collegeLiberalArtValue={collegeLiberalArtValue}
      departmentLabel={departmentLabel}
      setDepartmentLabel={setDepartmentLabel}
      setDepartmentValue={setDepartmentValue}
      setCollegeLiberalArtLabel={setCollegeLiberalArtLabel}
      setCollegeLiberalArtValue={setCollegeLiberalArtValue}
      imageUris={imageUris}
      setImageUris={setImageUris}
      registerUsedBook={registerUsedBook}
      canPostBook={canPostBook}
    />
  );
};
