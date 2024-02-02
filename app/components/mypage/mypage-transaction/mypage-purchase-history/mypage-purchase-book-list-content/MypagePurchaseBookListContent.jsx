import * as styles from './MypagePurchaseBookListContent.styles';
import {ScrollView} from 'react-native';
import MypagePurchaseBookListNoContent from '@components/mypage/mypage-transaction/mypage-purchase-history/mypage-purchase-book-list-no-content/MypagePurchaseBookListNoContent';
import useformatDate from '@/hooks/use-for-mat-date';
import useFormatTimeAgo from '@/hooks/use-format-time-ago';

const MypagePurchaseBookListContent = ({navigation, usedBooks}) => {
  const formatDate = useformatDate;
  const formatTimeAgo = useFormatTimeAgo;

  return (
    <styles.Container>
      <ScrollView>
        {usedBooks.length === 0 ? (
          <MypagePurchaseBookListNoContent navigation={navigation} />
        ) : (
          usedBooks.map(book => (
            <styles.MapBox
              key={book.usedBookId}
              onPress={() =>
                navigation.navigate('Detail', {
                  usedBookId: book.usedBookId,
                })
              }>
              <styles.Box>
                <styles.ImageBox
                  width={100}
                  height={100}
                  source={{
                    uri: book.imageUrl,
                  }}
                />
                <styles.ContentBox>
                  <styles.Content1>
                    <styles.TagBox
                      style={{
                        backgroundColor:
                          book.bookStatus === 'SALE' ? '#02b878' : '#8F8F8F',
                      }}
                      status={book.bookStatus}>
                      <styles.TagText>
                        {book.bookStatus === 'SALE' ? '판매중' : '거래 완료'}
                      </styles.TagText>
                    </styles.TagBox>
                    <styles.BookName>{book.name}</styles.BookName>
                  </styles.Content1>
                  <styles.Content2>
                    <styles.DateText>
                      {formatDate(book.tradeAvailableDatetime)} 거래 가능 •{' '}
                      {formatTimeAgo(book.createdAt)}
                    </styles.DateText>
                  </styles.Content2>
                  <styles.Content3>
                    <styles.PriceText>{`${book.price}원`}</styles.PriceText>
                  </styles.Content3>
                </styles.ContentBox>
              </styles.Box>
            </styles.MapBox>
          ))
        )}
      </ScrollView>
    </styles.Container>
  );
};

export default MypagePurchaseBookListContent;
