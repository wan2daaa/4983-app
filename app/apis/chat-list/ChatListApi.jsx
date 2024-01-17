import {BASE_API} from '@/apis/common/CommonApi';

export const getChatList = async accessToken => {
  try {
    const response = await BASE_API.get(`/api/v1/chat/list`);

    return response.data;
  } catch (e) {
    console.log(e);
  }
};
