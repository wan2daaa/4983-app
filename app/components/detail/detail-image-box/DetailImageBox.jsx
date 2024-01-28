import * as styles from './DetailImageBox.styles';

const DetailImageBox = ({bookImage}) => {
  return (
    <styles.ImageContainer>
      <styles.ImageScrollView horizontal>
        {bookImage.map((bookImages, index) => (
          <styles.EachImageBox>
            <styles.EachImage source={{uri: bookImages}} />
          </styles.EachImageBox>
        ))}
      </styles.ImageScrollView>
    </styles.ImageContainer>
  );
};

export default DetailImageBox;
