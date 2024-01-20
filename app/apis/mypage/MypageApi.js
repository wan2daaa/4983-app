import {BASE_API} from '@/apis/common/CommonApi';

export const getMemberInfo = async () => {
  try {
    const response = await BASE_API.get('/api/v1/my-pages/member');
    console.log('성공:', response.data);
    return response.data;
  } catch (error) {
    console.log('실패:', error);
    throw error;
  }
};

export const PasswordCheck = async password => {
  try {
    const response = await BASE_API.post('/api/v1/my-pages/member/password', {
      password,
    });
    console.log('성공', response.data.isPasswordMatch);
    return response.data.isPasswordMatch;
  } catch (error) {
    console.log('실패');
    return error;
  }
};
