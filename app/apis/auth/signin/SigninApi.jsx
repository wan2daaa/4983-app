import AsyncStorage from '@react-native-async-storage/async-storage';
import {BASE_API} from '@/apis/common/CommonApi';
export const Signin = async (studentId, password) => {
  try {
    const response = await BASE_API.post(
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
    throw error;
  }
};
