import {BASE_API} from '@/apis/common/CommonApi';

export const mainBannerList = async () => {
  try {
    const response = await BASE_API.get('/api/v1/notice/main');
    console.log('mainBannerList 가져오기 성공>>', response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const noticeBannerList = async () => {
  try {
    const response = await BASE_API.get('/api/v1/notice/list');
    console.log('noticeBannerList 가져오기 성공>>', response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const noticeDetail = async id => {
  try {
    const response = await BASE_API.get(`/api/v1/notice/detail/${id}`);
    console.log('noticeDetail 가져오기 성공>>', response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
