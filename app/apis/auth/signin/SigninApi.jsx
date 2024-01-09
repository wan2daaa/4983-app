import AsyncStorage from '@react-native-async-storage/async-storage';
import {API} from '@/apis/common/CommonApi';

export const Signin = async (studentId, password) => {
  try {
    const response = await API.post(
      '/api/v1/login',
      {
        studentId,
        password,
      },
      {},
    ).then(response => {
      console.log('로그인 성공', response.headers.authorization);

      AsyncStorage.setItem('accessToken', response.headers.authorization);
      return response;
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
