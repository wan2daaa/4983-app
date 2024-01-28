import {BASE_API} from '@/apis/common/CommonApi';

export const UsedBookView = ({usedBookId}) =>
  BASE_API.get(`/api/v1/used-book/${usedBookId}`)
    .then(response => response.data)

    .catch(error => {
      throw error;
    });

export const UsedBookDelete = ({usedBookId}) =>
  BASE_API.delete(`/api/v1/used-book/${usedBookId}`)
    .then(response => response.data)
    .catch(error => {
      console.log('삭제 실패: ', error.response.data);
      throw error;
    });
