import * as styles from '@components/home/book-status/book-status.styles';

export const BookStatus = ({status}) => {
  if (status === 'SALE') {
    return (
      <styles.BookStatusBox backgroundColor={'#02B878'}>
        <styles.BookStatusText>판매중</styles.BookStatusText>
      </styles.BookStatusBox>
    );
  } else if (status === 'TRADE') {
    return (
      <styles.BookStatusBox backgroundColor={'#FBC255'}>
        <styles.BookStatusText>거래중</styles.BookStatusText>
      </styles.BookStatusBox>
    );
  } else if (status === 'SOLD' || status === 'DELETE') {
    return (
      <styles.BookStatusBox backgroundColor={'rgba(171, 171, 171, 0.78)'}>
        <styles.BookStatusText>거래완료</styles.BookStatusText>
      </styles.BookStatusBox>
    );
  }
};
