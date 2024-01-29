import {useEffect, useState} from 'react';
import {useIsFocused} from '@react-navigation/native';
import {findCategoryNameByValue} from '@data/categories';
import {useRecoilState} from 'recoil';
import {
  recoilSellCollege,
  recoilSellDepartment,
} from '@/recoil/atoms/SignupAtoms';
import {ModifyLayout} from '@components/modify/layout/modify-layout';
import {UsedBookView} from '@/apis/detail/DetailApi';
import {modifyUsedBook} from '@/apis/modify/ModifyApi';

export const Modify = ({navigation, route}) => {
  const [isCollegeLiberalArtsClicked, setIsCollegeLiberalArtsClicked] =
    useState(false);

  const [savedImages, setSavedImages] = useState([]);
  const [imageUris, setImageUris] = useState([]);

  const [isUnderlinedOrWrite, setIsUnderlinedOrWrite] = useState(false);
  const [isDiscolorationAndDamage, setIsDiscolorationAndDamage] =
    useState(false);
  const [isCoverDamaged, setIsCoverDamaged] = useState(false);

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState(new Date());

  const [price, setPrice] = useState();
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
    UsedBookView({usedBookId: route.params.usedBookId}).then(data => {
      console.log('data: ', data);

      if (data.college === 'GE') {
        setCollegeLiberalArtLabel('교양');
        setCollegeLiberalArtValue('GE');
        setDepartmentLabel('');
        setDepartmentValue('GE');
      } else {
        setCollegeLiberalArtLabel(findCategoryNameByValue(data.college, false));
        setCollegeLiberalArtValue(data.college);
        setDepartmentLabel(findCategoryNameByValue(data.department, true));
        setDepartmentValue(data.department);
      }
      setSavedImages(data.bookImage);
      setPrice(String(data.price));
      setSelectedDate(data.tradeAvailableDatetime.split('T')[0]);
      setSelectedTime(new Date(data.tradeAvailableDatetime));
      setName(data.bookName);
      setPublisher(data.publisher);
      setIsUnderlinedOrWrite(data.underlinedOrWrite);
      setIsDiscolorationAndDamage(data.discolorationAndDamage);
      setIsCoverDamaged(data.coverDamaged);
    });
  }, []);

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
      selectedDate !== '' &&
      imageUris.length + savedImages.length !== 0 &&
      selectedTime &&
      price !== '' &&
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
    modifyUsedBook(
      route.params.usedBookId,
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
      navigation.navigate('Detail', {
        usedBookId: usedBookId,
      });
    });
  };

  return (
    <ModifyLayout
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
      savedImages={savedImages}
      setSavedImages={setSavedImages}
      usedBookId={route.params.usedBookId}
    />
  );
};
