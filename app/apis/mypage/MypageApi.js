import {BASE_API} from '@/apis/common/CommonApi';

// export const getMemberInfo = async () => {
//   BASE_API.get('/api/v1/my-pages/member')
//     .then(response => response.data)
//     .catch(error => {
//       console.log('실패>>>>>>', error.response.data);
//       throw error;
//     });
// };

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
