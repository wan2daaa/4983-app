import * as styles from '@components/home/layout/home-layout.styles';
import BookListBox from '@components/home/book-list-box/book-list-box';
import SettingIcon from '@assets/images/home/SettingIcon.svg';
import CheckedButton from '@assets/images/signup/CheckedButton.svg';
import UnCheckedButton from '@assets/images/signup/UnCheckedButton.svg';
import SearchIcon from '@assets/images/home/SearchIcon.svg';
import {TouchableOpacity} from 'react-native';
import {SearchIconContainer} from '@components/home/layout/home-layout.styles';

const HomeLayout = ({
  isFastTradeChecked,
  setIsFastTradeChecked,
  bookListData,
  navigation,
}) => {
  return (
    <styles.MainContainer>
      <styles.HeaderContainer>
        <styles.HeaderText>중고 서적 거래</styles.HeaderText>
      </styles.HeaderContainer>
      <styles.SearchIconContainer>
        <SearchIcon width={20} height={20} />
      </styles.SearchIconContainer>
      <styles.ConditionContainer>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Category');
          }}>
          <SettingIcon width={49} height={35} />
        </TouchableOpacity>
      </styles.ConditionContainer>
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
        {bookListData.map((bookData, index) => {
          return <BookListBox bookData={bookData} />;
        })}
      </styles.ScrollViewContainer>
      <styles.SellButtonContainer>
        <styles.SellButtonBox>
          <styles.SellButtonText>판매하기</styles.SellButtonText>
        </styles.SellButtonBox>
      </styles.SellButtonContainer>
    </styles.MainContainer>
  );
};

export default HomeLayout;
