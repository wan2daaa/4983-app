import * as styles from './MypageInquiry.styles';
import HelpIcon from '@assets/images/mypage/HelpIcon.svg';
import AnnouncementIcon from '@assets/images/mypage/AnnouncementIcon.svg';
import InquiryIcon from '@assets/images/mypage/InquiryIcon.svg';
import TermsIcon from '@assets/images/mypage/TermsIcon.svg';

const MypageInquiry = ({navigation}) => {
  return (
    <styles.Container>
      <styles.TitleContainer>
        <styles.Title>문의</styles.Title>
      </styles.TitleContainer>

      <styles.BoxContainer onPress={() => navigation.navigate('Help')}>
        <HelpIcon width={33} height={29} />
        <styles.ContentText>도움말</styles.ContentText>
      </styles.BoxContainer>

      <styles.BoxContainer onPress={() => navigation.navigate('Notice')}>
        <AnnouncementIcon width={33} height={24} />
        <styles.ContentText>공지사항</styles.ContentText>
      </styles.BoxContainer>

      <styles.BoxContainer
        onPress={() => navigation.navigate('MypageContactus')}>
        <InquiryIcon width={33} height={26} />
        <styles.ContentText>문의하기</styles.ContentText>
      </styles.BoxContainer>

      <styles.BoxContainer onPress={() => navigation.navigate('MypageTerms')}>
        <TermsIcon width={33} height={29} />
        <styles.ContentText>이용약관</styles.ContentText>
      </styles.BoxContainer>
    </styles.Container>
  );
};

export default MypageInquiry;
