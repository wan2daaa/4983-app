import {BASE_API} from '@/apis/common/CommonApi';

export const mypageGetMemberInfo = async () => {
  try {
    const response = await BASE_API.get('/api/v1/my-pages/member/modify');
    console.log('성공:', response.data);
    return response.data;
  } catch (error) {
    console.log('실패:', error);
    throw error;
  }
};

export const ImageDelete = async imageUrl => {
  try {
    const response = await BASE_API.delete('/api/v1/my-pages/delete/image', {
      data: {imageUrl},
    });

    console.log('빨리 보고 시퍼 힝구 뿌뿌ㅜ ㅜ');
    console.log('내가 더 보고시포 보고싶으면 빨리유ㅏ언제돼?');
    console.log('이미지 삭제 성공', response.data);
    return response.data;
  } catch (error) {
    console.log('이미지 삭제 실패', error);
    throw error;
  }
};

export const nickNameDuplicates = async nickname => {
  try {
    const encodedNickname = encodeURIComponent(nickname);
    const response = await BASE_API.get(
      `/api/v1/my-pages/nicknames/duplicates?nickname=${encodedNickname}`,
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const myPageCertification = async phoneNumber => {
  try {
    const encodedPhoneNumber = encodeURIComponent(phoneNumber);
    const response = await BASE_API.get(
      `/api/v1/my-pages/certification-number?phoneNumber=${encodedPhoneNumber}`,
    );
    return response.data.certificationNumber;
  } catch (error) {
    return error;
  }
};

export const EditProfile = async (
  nickname,
  accountBank,
  accountNumber,
  phoneNumber,
  fileList,
) => {
  const formData = new FormData();

  formData.append(
    'member',
    JSON.stringify({nickname, accountBank, accountNumber, phoneNumber}),
  );

  if (fileList === []) {
    const files = fileList.map(file => {
      return {
        name: file.fileName,
        type: 'image/jpeg',
        uri: file.uri,
      };
    });

    files.forEach(file => {
      formData.append('fileImage', file);
    });
  }

  try {
    const response = await BASE_API.post('/api/v1/my-pages/update', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log('프로필 수정 성공!!!', response.data);
  } catch (error) {
    console.log('프로필 수정 실패다!!!', error);
    console.error(error);
  }
};
