import * as styles from '@components/home/layout/home-layout.styles';
import BookListBox from '@components/home/book-list-box/book-list-box';
import CheckedButton from '@assets/images/signup/CheckedButton.svg';
import UnCheckedButton from '@assets/images/signup/UnCheckedButton.svg';
import SearchIcon from '@assets/images/home/SearchIcon.svg';
import FilterButton from '@components/home/filter-button/filter-button';
import {Dimensions, Image, Text} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const HomeLayout = ({
  isFastTradeChecked,
  setIsFastTradeChecked,
  bookListData,
  filterOptions,
  setParamCollege,
  setParamDepartment,
  navigation,
  mainBannerData,
}) => {
  const width = Dimensions.get('window').width;
  const renderBannerItem = ({item}) => (
    <styles.BannerContainer
      key={item.id}
      onPress={() => {
        navigation.navigate('NoticeDetail', {id: item.id});
      }}>
      {item.imageUrl ? (
        <Image
          source={{uri: item.imageUrl}}
          style={{width: '100%', height: '100%'}}
        />
      ) : (
        <Text>No Banner Image</Text>
      )}
    </styles.BannerContainer>
  );

  return (
    <styles.MainContainer>
      <styles.HeaderContainer>
        <styles.HeaderText>중고 서적 거래</styles.HeaderText>
      </styles.HeaderContainer>
      <styles.SearchIconContainer
        onPress={() => {
          navigation.navigate('Search');
        }}>
        <SearchIcon width={20} height={20} />
      </styles.SearchIconContainer>
      <FilterButton
        navigation={navigation}
        filterOptions={filterOptions}
        setParamCollege={setParamCollege}
        setParamDepartment={setParamDepartment}
      />
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
        <Carousel
          data={mainBannerData}
          renderItem={renderBannerItem}
          sliderWidth={width}
          itemWidth={width}
          keyExtractor={item => item.id.toString()}
        />
        {bookListData.map((bookData, index) => {
          return (
            <BookListBox
              key={`eachBook${index}`}
              bookData={bookData}
              index={index}
              navigation={navigation}
            />
          );
        })}
      </styles.ScrollViewContainer>
      <styles.SellButtonContainer>
        <styles.SellButtonBox
          onPress={() => {
            navigation.navigate('Sell');
          }}>
          <styles.SellButtonText>판매하기</styles.SellButtonText>
        </styles.SellButtonBox>
      </styles.SellButtonContainer>
    </styles.MainContainer>
  );
};

export default HomeLayout;
