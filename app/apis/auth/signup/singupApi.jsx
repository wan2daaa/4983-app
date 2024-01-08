import {BASE_API} from '@/apis/common/CommonApi';
import {useRecoilState} from 'recoil';
import {
  recoilAccountBank,
  recoilAccountHolder,
  recoilAccountNumber,
  recoilDepartment,
  recoilMarketingAgreement,
  recoilNickname,
  recoilPassword,
  recoilPhoneNumber,
  recoilStudentId,
} from '@/recoil/atoms/SignupAtoms';

export const checkStudentIdDuplicate = studentId =>
  BASE_API.get(`/api/v1/register/duplicate/studentId?studentId=${studentId}`)
    .then(response => {
      // console.log('사용가능 학번:', response);
      return false;
    })
    .catch(error => {
      // console.error('사용불가 닉네임:', error.response.data.message);
      return true;
    });

export const checkNicknameDuplicate = nickname =>
  BASE_API.get(`/api/v1/register/duplicate/nickname?nickname=${nickname}`)
    .then(response => {
      // console.log('사용가능 닉네임:', response);
      return false;
    })
    .catch(error => {
      // console.error('사용불가 닉네임:', error.response.data.message);
      return true;
    });

export const sendPhoneNumber = async phoneNumber => {
  return await BASE_API.get(
    `/api/v1/my-pages/certification-number?phoneNumber=${phoneNumber}`,
  );
  // return res.data.certificationNumber;
};

export const registerMember = async (
  studentId,
  department,
  nickname,
  password,
  phoneNumber,
  marketingAgreement,
  accountHolder,
  accountBank,
  accountNumber,
) => {
  return await BASE_API.post('/api/v1/register', {
    studentId: studentId,
    department: department,
    yearOfAdmission: '',
    nickname: nickname,
    password: password,
    phoneNumber: phoneNumber,
    marketingAgree: marketingAgreement,
    accountHolder: accountHolder,
    accountBank: accountBank,
    accountNumber: accountNumber,
  });
};
