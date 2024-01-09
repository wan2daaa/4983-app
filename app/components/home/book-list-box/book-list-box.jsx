import {Text, View} from 'react-native';
import * as styles from '@components/home/book-list-box/book-list-box.styles';
import {BookStatus} from '@components/home/book-status/book-status';
import useFormatTimeAgo from '@/hooks/use-format-time-ago';
import {useFormatPrice} from '@/hooks/use-format-price';

const BookListBox = ({bookData}) => {
  const dateTime = new Date(bookData.tradeAvailableDatetime);

  return (
    <styles.EachBookContainer>
      <styles.MainImage
        width={100}
        height={100}
        source={{
          uri: bookData.imageUrl,
        }}
      />
      <styles.BookInfoContainer>
        <styles.BookNameStatusContainer>
          <BookStatus status={bookData.bookStatus} />
          <styles.BookName>{bookData.name}</styles.BookName>
        </styles.BookNameStatusContainer>
        <styles.BookDateContainer>
          <styles.BookTradeAvailableDate>
            {dateTime.getMonth() + 1}월 {dateTime.getDate()}일 거래가능
          </styles.BookTradeAvailableDate>
          <Text
            style={{
              color: '#8F8F8F',
              fontSize: 12,
              fontWeight: 400,
            }}>
            • {useFormatTimeAgo(bookData.createdAt)}
          </Text>
        </styles.BookDateContainer>
        <View>
          <Text
            style={{
              color: 'var(--B-100, #36332E)',
              fontSize: 14,
              fontStyle: 'normal',
              fontWeight: 700,
            }}>
            {useFormatPrice(bookData.price)}원
          </Text>
        </View>
      </styles.BookInfoContainer>
    </styles.EachBookContainer>
  );
};

export default BookListBox;
