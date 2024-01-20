import {BASE_API} from '@/apis/common/CommonApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserLogout = () => {
  BASE_API.get(`/api/v1/logout`)
    .then(response => {
      console.log('로그아웃 성공: ', response.data);
      AsyncStorage.removeItem('accessToken');
      return response.data;
    })
    .catch(error => {
      console.log('로그아웃 실패: ', error.response.data);
      throw error;
    });
};

export const UserSecede = () => {
  BASE_API.patch('/api/v1/withdraw', {})
    .then(response => {
      console.log('탈퇴 성공: ', response.data);
      AsyncStorage.clear();
      return response.data;
    })
    .catch(error => {
      console.log('탈퇴 실패: ', error.response.data);
      throw error;
    });
};

export const PasswordChangeCheck = async password => {
  try {
    const response = await BASE_API.post(
      '/api/v1/my-pages/change-password/verify-current-password',
      {
        password,
      },
    );
    console.log('비밀번호 확인 성공', response.data.isPasswordMatch);
    return response.data.isPasswordMatch;
  } catch (error) {
    return error;
  }
};

export const UseApiPasswordChange = async password => {
  await BASE_API.patch('/api/v1/my-pages/change-password', {
    password,
  });
};
