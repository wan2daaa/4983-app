import {SearchLayout} from '@components/search/layout/search-layout';
import {useEffect, useState} from 'react';
import {fetchUsedBookListWithSearchKeyword} from '@/apis/search/SearchApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Search = ({navigation}) => {
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  const [searchText, setSearchText] = useState('');
  const [isFastTradeChecked, setIsFastTradeChecked] = useState(false);

  const [usedBookList, setUsedBookList] = useState([]);

  const [recentSearchTextList, setRecentSearchTextList] = useState([]);

  useEffect(() => {
    fetchUsedBookListWithSearchKeyword(searchText, isFastTradeChecked)
      .then(res => {
        setUsedBookList(res);
      })
      .catch(err => {
        setUsedBookList([]);
      });
  }, [isFastTradeChecked]);

  useEffect(() => {
    if (isSearchClicked) {
      fetchUsedBookListWithSearchKeyword(searchText, isFastTradeChecked)
        .then(res => {
          setUsedBookList(res);
        })
        .catch(err => {
          setUsedBookList([]);
        });

      let tempRecentSearchTextList = [];
      if (recentSearchTextList.includes(searchText)) {
        tempRecentSearchTextList = recentSearchTextList.filter(
          text => text !== searchText,
        );
        tempRecentSearchTextList = [searchText, ...tempRecentSearchTextList];
      } else {
        tempRecentSearchTextList = [searchText, ...recentSearchTextList];
      }

      setRecentSearchTextList(tempRecentSearchTextList);
      AsyncStorage.setItem(
        'recentSearch',
        JSON.stringify(tempRecentSearchTextList),
      );
    } else {
      AsyncStorage.getItem('recentSearch').then(recentText => {
        if (recentText === null) {
          return;
        }
        setRecentSearchTextList(JSON.parse(recentText));
      });
    }
  }, [isSearchClicked]);

  return (
    <SearchLayout
      navigation={navigation}
      isSearchClicked={isSearchClicked}
      setIsSearchClicked={setIsSearchClicked}
      searchText={searchText}
      setSearchText={setSearchText}
      isFastTradeChecked={isFastTradeChecked}
      setIsFastTradeChecked={setIsFastTradeChecked}
      usedBookList={usedBookList}
      recentSearchTextList={recentSearchTextList}
    />
  );
};
