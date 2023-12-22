import * as styles from './FindPasswordResetButton.styles';
import {TouchableOpacity} from 'react-native';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {fetchPatchPassword} from '@/apis/find-password/FindPasswordApi';

const FindPasswordResetButton = ({
  navigation,
  newPassword,
  verifyPassword,
  verifySuccess,
}) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(newPassword && verifyPassword && verifySuccess);
  }, [newPassword, verifyPassword, verifySuccess]);

  const onClickSetPassword = async () => {
    let storedStudentId, storedPhoneNumber;

    try {
      storedStudentId = await AsyncStorage.getItem('isStudentId');
      storedPhoneNumber = await AsyncStorage.getItem('isPhoneNumber');

      storedStudentId = storedStudentId.replace(/"/g, '');
      storedPhoneNumber = storedPhoneNumber.replace(/"/g, '');

      await fetchPatchPassword(storedStudentId, storedPhoneNumber, newPassword);

      navigation.navigate('FindPasswordFinish');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <styles.ButtonBox
      style={{backgroundColor: isActive ? '#02B878' : '#D1D1D1'}}>
      <TouchableOpacity disabled={!isActive} onPress={onClickSetPassword}>
        <styles.ButtonText style={{color: isActive ? '#FFF' : '#707479'}}>
          변경
        </styles.ButtonText>
      </TouchableOpacity>
    </styles.ButtonBox>
  );
};

export default FindPasswordResetButton;
