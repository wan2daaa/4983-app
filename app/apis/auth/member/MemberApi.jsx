import {BASE_API} from '@/apis/common/CommonApi';

export const getWithdraw = async () =>
  BASE_API.get(`/api/v1/withdraw`)
    .then(res => res.data.isWithdraw)
    .catch(err => {
      throw err;
    });
