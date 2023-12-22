import {BASE_API} from '@/apis/common/CommonApi';

export const fetchCertificationNumber = (studentId, phoneNumber) =>
  BASE_API.get(
    `/api/v1/members/password/certification-number?studentId=${studentId}&phoneNumber=${phoneNumber}`,
  )
    .then(response => response.data.certificationNumber)
    .catch(error => {
      throw error;
    });

export const fetchPatchPassword = (studentId, phoneNumber, password) =>
  BASE_API.patch('/api/v1/members/password', {
    studentId,
    phoneNumber,
    password,
  }).catch(error => {
    throw error;
  });
