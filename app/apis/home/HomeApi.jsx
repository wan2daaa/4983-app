import {BASE_API} from '@/apis/common/CommonApi';

export const fetchBookList = async (
  isOrderByTradeAvailableDatetime,
  college,
  department,
) => {
  if (college === '' && department === '') {
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
  } else {
    return await BASE_API.get(
      `/api/v1/used-book-list/college-and-department?isOrderByTradeAvailableDatetime=${isOrderByTradeAvailableDatetime}&department=${department}&college=${college}`,
    )
      .then(res => {
        return res.data;
      })
      .catch(error => {
        throw error;
      });
  }
};
