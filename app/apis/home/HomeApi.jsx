import {BASE_API} from '@/apis/common/CommonApi';

export const fetchBookList = async isOrderByTradeAvailableDatetime => {
  return await BASE_API.get(
    `/api/v1/used-book-list?isOrderByTradeAvailableDatetime=` +
      isOrderByTradeAvailableDatetime,
  )
    .then(res => {
      return res.data;
    })
    .catch(error => {
      throw error;
    });
};
