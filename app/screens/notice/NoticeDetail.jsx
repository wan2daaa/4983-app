import NoticeDetailLayout from '@components/notice/notice-detail-layout/NoticeDetailLayout';

const NoticeDetail = ({route, navigation}) => {
  const {id} = route.params;

  return <NoticeDetailLayout id={id} navigation={navigation} />;
};

export default NoticeDetail;
