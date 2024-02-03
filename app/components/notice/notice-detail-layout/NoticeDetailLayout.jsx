import * as styles from './NoticeDetailLayout.styles';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {noticeDetail} from '@/apis/notice/NoticeApi';
import {Dimensions, Image, ScrollView} from 'react-native';

const NoticeDetailLayout = ({id, navigation}) => {
  const [noticeDetailData, setNoticeDetailData] = useState('');
  const [imageDimensions, setImageDimensions] = useState({width: 1, height: 1});
  const width = Dimensions.get('window').width;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await noticeDetail(id);
        console.log('noticeDetailData', res);
        setNoticeDetailData(res);
      } catch (error) {
        console.error('Error fetching notice detail:', error);
      }
    };

    fetchData();
  }, [navigation, id]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: noticeDetailData.title,
      headerTitleStyle: {fontSize: 20, fontWeight: '700'},
      headerTitleAlign: 'center',
    });
  }, [navigation, noticeDetailData.title]);

  const handleImageLoad = event => {
    const {width, height} = event.nativeEvent.source;
    if (width && height) {
      setImageDimensions({width, height});
    }
  };

  return (
    <styles.Container>
      <ScrollView>
        <styles.ImageBox>
          <Image
            source={{uri: noticeDetailData.imageUrl}}
            style={{
              width: width,
              height: (width / imageDimensions.width) * imageDimensions.height,
            }}
            onLoad={handleImageLoad}
          />
        </styles.ImageBox>
      </ScrollView>
    </styles.Container>
  );
};

export default NoticeDetailLayout;
