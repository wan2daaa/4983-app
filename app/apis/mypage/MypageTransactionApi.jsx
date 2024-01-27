import {BASE_API} from '@/apis/common/CommonApi';

export const getSalesUsedBookList = async canBuy =>
  BASE_API.get('/api/v1/my-pages/book-sales-detail-list', {
    params: {canBuy},
  })
    .then(response => response.data)
    .catch(error => {
      console.log('실패:', error.response.data);
      throw error;
    });

export const getPurchaseUsedBookList = async () =>
  BASE_API.get(`/api/v1/my-pages/book-purchase-detail-list?bookStatus=SOLD`)
    .then(response => response.data)
    .catch(error => {
      console.log('실패:', error.response.data);
      throw error;
    });
