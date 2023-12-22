import * as styles from './FindPasswordButton.styles';
import {TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FindPasswordButton = ({
  navigation,
  isCertificationCorrect,
  isStudentId,
  isPhoneNumber,
}) => {
  const handleConfirmButtonPress = async () => {
    try {
      await AsyncStorage.setItem('isStudentId', JSON.stringify(isStudentId));
      await AsyncStorage.setItem(
        'isPhoneNumber',
        JSON.stringify(isPhoneNumber),
      );
    } catch (error) {
      console.error('Error:', error);
    }

    navigation.navigate('FindPasswordReset');
  };

  return (
    <styles.ButtonBox
      style={{backgroundColor: isCertificationCorrect ? '#02B878' : '#d1d1d1'}}>
      <TouchableOpacity
        onPress={handleConfirmButtonPress}
        disabled={!isCertificationCorrect}>
        <styles.ButtonText
          style={{color: isCertificationCorrect ? '#FFF' : '#707479'}}>
          확인
        </styles.ButtonText>
      </TouchableOpacity>
    </styles.ButtonBox>
  );
};

export default FindPasswordButton;
