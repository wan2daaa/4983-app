import * as styles from './DetailBookNamePublisherBox.styles';

const DetailBookNamePublisherBox = ({bookName, publisher}) => {
  return (
    <styles.Container>
      <styles.BookNameBox>
        <styles.BookName>{bookName}</styles.BookName>
      </styles.BookNameBox>
      <styles.PublisherBox>
        <styles.Publisher>{publisher}</styles.Publisher>
      </styles.PublisherBox>
    </styles.Container>
  );
};

export default DetailBookNamePublisherBox;
