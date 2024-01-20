import * as styles from '@components/search/search-box/search-box.styles';
import CheckedButton from '@assets/images/signup/CheckedButton.svg';
import UnCheckedButton from '@assets/images/signup/UnCheckedButton.svg';
import BookListBox from '@components/home/book-list-box/book-list-box';

export const SearchBox = ({
  isFastTradeChecked,
  setIsFastTradeChecked,
  usedBookList,
}) => {
  return (
    <styles.Container>
      <styles.FastTradeContainer>
        <styles.FastTradeIcon
          onPress={() => {
            setIsFastTradeChecked(!isFastTradeChecked);
          }}>
          {isFastTradeChecked ? (
            <CheckedButton width={20} height={20} />
          ) : (
            <UnCheckedButton width={20} height={20} />
          )}
          <styles.FastTradeText>빠른 거래 날짜순으로 보기</styles.FastTradeText>
        </styles.FastTradeIcon>
      </styles.FastTradeContainer>
      <styles.ScrollViewContainer>
        {usedBookList.map((bookData, index) => {
          return (
            <BookListBox
              key={`eachBook${index}`}
              bookData={bookData}
              index={index}
            />
          );
        })}
      </styles.ScrollViewContainer>
    </styles.Container>
  );
};
