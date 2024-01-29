import React from 'react';
import DetailLayout from '@components/detail/detail-layout/DetailLayout';
import {useIsFocused} from '@react-navigation/native';

const Detail = ({route, navigation}) => {
  const {usedBookId} = route.params;
  const isFocused = useIsFocused();

  return (
    <DetailLayout
      usedBookId={usedBookId}
      isFocused={isFocused}
      navigation={navigation}
    />
  );
};

export default Detail;
