import {BASE_API} from '@/apis/common/CommonApi';

export const fetchUsedBookListWithSearchKeyword = async (
  searchKeyword,
  isOrderByTradeAvailableDatetime,
) => {
  try {
    const response = await BASE_API.get('/api/v1/used-book-list/search', {
      params: {
        isOrderByTradeAvailableDatetime,
        searchKeyword,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
