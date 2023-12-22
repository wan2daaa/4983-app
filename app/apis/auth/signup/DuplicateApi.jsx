import {BASE_API} from '@/apis/common/CommonApi';

export const checkStudentIdDuplicate = studentId =>
  BASE_API.get(`/api/v1/register/duplicate/studentId?studentId=${studentId}`)
    .then(response => {
      console.log('사용가능 학번:', response);
      return false;
    })
    .catch(error => {
      console.error('사용불가 닉네임:', error.response.data.message);
      return true;
    });
