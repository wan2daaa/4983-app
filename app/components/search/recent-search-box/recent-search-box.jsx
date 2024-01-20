import React from 'react';
import * as styles from '@components/search/recent-search-box/recent-search-box.styles';
import {TouchableOpacity} from 'react-native';

export const RecentSearchBox = ({
  recentSearchTextList,
  setSearchText,
  setIsSearchClicked,
  textInputRef,
}) => {
  return (
    <styles.RecentSearchBoxContainer>
      <styles.RecentSearchHeaderText>최근 검색어</styles.RecentSearchHeaderText>
      <styles.RecentSearchTextContainer>
        {recentSearchTextList.map(recentSearchText => (
          <TouchableOpacity
            onPress={() => {
              setSearchText(recentSearchText);
              setIsSearchClicked(true);

              if (textInputRef.current.isFocused()) {
                textInputRef.current.blur();
              }
            }}
            hitSlop={{left: 0, right: 0, top: 5, bottom: 5}}>
            <styles.EachRecentSearchTextBox>
              <styles.EachRecentSearchText>
                {recentSearchText}
              </styles.EachRecentSearchText>
            </styles.EachRecentSearchTextBox>
          </TouchableOpacity>
        ))}
      </styles.RecentSearchTextContainer>
    </styles.RecentSearchBoxContainer>
  );
};
