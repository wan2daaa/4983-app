import * as styles from './NoticeLayout.styles';
import {Image, ScrollView} from 'react-native';
import {useEffect, useState} from 'react';
import {noticeBannerList} from '@/apis/notice/NoticeApi';

const NoticeLayout = ({navigation}) => {
  const [noticeBannerData, setNoticeBannerData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await noticeBannerList();
        console.log('noticeBannerData', res);
        setNoticeBannerData(res);
      } catch (error) {}
    };

    fetchData();
  }, [navigation]);

  return (
    <styles.Container>
      <ScrollView>
        {noticeBannerData.map(item => (
          <styles.ImageBox
            key={item.id}
            onPress={() => {
              navigation.navigate('NoticeDetail', {id: item.id});
            }}>
            <Image
              source={{uri: item.imageUrl}}
              style={{width: '100%', height: '100%', borderRadius: 10}}
            />
          </styles.ImageBox>
        ))}
      </ScrollView>
    </styles.Container>
  );
};

export default NoticeLayout;
