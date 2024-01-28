import React from 'react';
import DetailLayout from '@components/detail/detail-layout/DetailLayout';

const Detail = ({route, navigation}) => {
  const {usedBookId} = route.params;

  return <DetailLayout usedBookId={usedBookId} navigation={navigation} />;
};

export default Detail;
