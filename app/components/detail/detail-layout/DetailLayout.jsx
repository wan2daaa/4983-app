import * as styles from './DetailLayout.styles';
import {ScrollView} from 'react-native';
import DetailCollegeDepartmentBox from '@components/detail/detail-college-department-box/DetailCollegeDepartmentBox';
import DetailProfileBox from '@components/detail/detail-profile-box/DetailProfileBox';
import DetailImageBox from '@components/detail/detail-image-box/DetailImageBox';
import DetailBookNamePublisherBox from '@components/detail/detail-book-name-publisher-box/DetailBookNamePublisherBox';
import DetailPossibleDateBox from '@components/detail/detail-possible-date-box/DetailPossibleDateBox';
import DetailBookStatus from '@components/detail/detail-book-status/DetailBookStatus';
import {UsedBookView} from '@/apis/detail/DetailApi';
import {useEffect, useState} from 'react';

const NumberWithComma = data =>
  String(data).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');

const DetailLayout = ({usedBookId, navigation}) => {
  const [usedBookView, setUsedBookView] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await UsedBookView({usedBookId});
        setUsedBookView(data);
      } catch (error) {
        console.error('Error', error);
      }
    };

    if (usedBookId) {
      fetchData();
    }
  }, [usedBookId]);

  return (
    <styles.Container>
      {usedBookView && (
        <styles.Box>
          <ScrollView>
            <DetailCollegeDepartmentBox
              navigation={navigation}
              usedBookId={usedBookId}
              college={usedBookView.college}
              department={usedBookView.department}
              isBookOwner={usedBookView.isBookOwner}
            />
            <DetailProfileBox
              sellerUserNickname={usedBookView.sellerUserNickname}
              sellerProfileImageUrl={
                usedBookView.sellerProfileImageUrl === null
                  ? ''
                  : usedBookView.sellerProfileImageUrl
              }
              createdAt={usedBookView.createdAt}
            />
            <DetailImageBox bookImage={usedBookView.bookImage} />
            <DetailBookNamePublisherBox
              bookName={usedBookView.bookName}
              publisher={
                usedBookView.publisher === null ? '' : usedBookView.publisher
              }
            />
            <DetailPossibleDateBox
              tradeAvailableDatetime={usedBookView.tradeAvailableDatetime}
            />
            <DetailBookStatus
              underlinedOrWrite={usedBookView.underlinedOrWrite}
              discolorationAndDamage={usedBookView.discolorationAndDamage}
              coverDamaged={usedBookView.coverDamaged}
            />
          </ScrollView>
          <styles.BottomBox>
            <styles.PriceBox>
              <styles.Price>
                {NumberWithComma(usedBookView.price)}원
              </styles.Price>
            </styles.PriceBox>
            <styles.Button>
              <styles.ButtonText>구매하기</styles.ButtonText>
            </styles.Button>
          </styles.BottomBox>
        </styles.Box>
      )}
    </styles.Container>
  );
};

export default DetailLayout;
