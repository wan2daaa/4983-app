import BackButton from '@assets/images/common/BlackBackButton.svg';
import SearchButton from '@assets/images/search/search-icon.svg';

import * as styles from '@components/search/layout/search-layout.styles';
import {SearchBox} from '@components/search/search-box/search-box';
import {RecentSearchBox} from '@components/search/recent-search-box/recent-search-box';
import {useRef} from 'react';

export const SearchLayout = ({
  navigation,
  isSearchClicked,
  setIsSearchClicked,
  searchText,
  setSearchText,
  isFastTradeChecked,
  setIsFastTradeChecked,
  usedBookList,
  recentSearchTextList,
}) => {
  const textInputRef = useRef(null);

  const onPressSearchButton = () => {
    if (searchText === '') {
      return;
    }
    setIsSearchClicked(true);

    if (textInputRef.current.isFocused()) {
      textInputRef.current.blur();
    }
  };

  return (
    <styles.Container>
      <styles.HeaderContainer>
        <styles.SearchTextInput
          ref={textInputRef}
          placeholder="찾고자 하는 책을 입력해주세요."
          placeholderTextColor="#D1D1D1"
          value={searchText}
          onChangeText={setSearchText}
          onFocus={() => {
            setIsSearchClicked(false);
          }}
        />
        <styles.BackButtonTouchableOpacity
          onPress={() => navigation.navigate('Home')}
          hitSlop={{left: 10, right: 10, top: 10, bottom: 10}}>
          <BackButton
            width={20}
            height={20}
            onPress={() => navigation.navigate('Home')}
          />
        </styles.BackButtonTouchableOpacity>
        <styles.SearchButtonTouchableOpacity
          hitSlop={{left: 10, right: 10, top: 10, bottom: 10}}
          onPress={onPressSearchButton}>
          <SearchButton width={20} height={20} />
        </styles.SearchButtonTouchableOpacity>
      </styles.HeaderContainer>
      <styles.OtherContainer>
        {isSearchClicked ? (
          <SearchBox
            isFastTradeChecked={isFastTradeChecked}
            setIsFastTradeChecked={setIsFastTradeChecked}
            usedBookList={usedBookList}
            navigation={navigation}
          />
        ) : (
          <RecentSearchBox
            recentSearchTextList={recentSearchTextList}
            setIsSearchClicked={setIsSearchClicked}
            setSearchText={setSearchText}
            textInputRef={textInputRef}
          />
        )}
      </styles.OtherContainer>
    </styles.Container>
  );
};
