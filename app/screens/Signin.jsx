import SigninLayout from '../components/signin/signin-layout/SigninLayout';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SigninApi} from '@/apis/auth/signin/SigninApi';

const Signin = ({navigation}) => {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [LoginError, setLoginError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const checkAutoLogin = async () => {
      const ischecked = await AsyncStorage.getItem('isChecked');

      if (ischecked !== null) {
        setIsChecked(ischecked === 'true');

        if (ischecked === 'true') {
          let savedStudentId = '';
          let savedPassword = '';

          const savedId = await AsyncStorage.getItem('studentId');
          setStudentId(savedId ? savedId : '');
          savedStudentId = savedId;

          const savedPw = await AsyncStorage.getItem('password');
          setPassword(savedPw ? savedPw : '');
          savedPassword = savedPw;

          try {
            await SigninApi(savedStudentId, savedPassword);
            await navigation.navigate('BottomTabs');
          } catch (error) {
            setLoginError(true);
            setErrorMsg(error.response.data.message);
          }
        }
      }
    };

    checkAutoLogin();
  }, []);

  const handleLogin = async () => {
    try {
      await SigninApi(studentId, password);

      if (isChecked) {
        await AsyncStorage.setItem('studentId', studentId);
        await AsyncStorage.setItem('password', password);
      }

      await navigation.navigate('BottomTabs');
    } catch (error) {
      setLoginError(true);
      setErrorMsg(error.response.data.message);
    }
  };

  return (
    <SigninLayout
      navigation={navigation}
      isChecked={isChecked}
      setIsChecked={setIsChecked}
      studentId={studentId}
      setStudentId={setStudentId}
      password={password}
      setPassword={setPassword}
      LoginError={LoginError}
      setLoginError={setLoginError}
      errorMsg={errorMsg}
      setErrorMsg={setErrorMsg}
      handleLogin={handleLogin}
    />
  );
};

export default Signin;
