import * as styles from './DetailProfileBox.styles';
import formatTimeDifference from '@/hooks/use-format-time';
import {Image} from 'react-native';

const DetailProfileBox = ({
  sellerProfileImageUrl,
  sellerUserNickname,
  createdAt,
}) => {
  const createdDate = new Date(createdAt);
  const currentDate = new Date();
  const timeDifference = (currentDate.getTime() - createdDate.getTime()) / 1000;
  const dateString = formatTimeDifference(timeDifference);

  return (
    <styles.Container>
      <styles.ImageBox>
        <Image
          source={{
            uri: sellerProfileImageUrl,
          }}
          width={44}
          height={44}
          style={{borderRadius: 42}}
        />
      </styles.ImageBox>
      <styles.Box>
        <styles.NameBox>
          <styles.Name>{sellerUserNickname}</styles.Name>
        </styles.NameBox>
        <styles.DateBox>
          <styles.Date>{dateString}</styles.Date>
        </styles.DateBox>
      </styles.Box>
    </styles.Container>
  );
};

export default DetailProfileBox;
