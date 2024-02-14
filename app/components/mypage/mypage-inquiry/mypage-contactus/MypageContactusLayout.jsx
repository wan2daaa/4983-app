import * as styles from './MypageContactusLayout.styles';
import {ScrollView, ToastAndroid, Clipboard} from 'react-native';
import MypageQuestionLayout from '@components/mypage/mypage-inquiry/mypage-question/MypageQuestionLayout';

const MypageContactusLayout = ({navigation}) => {
  const handleCopyEmail = () => {
    Clipboard.setString('4983service@gmail.com');
  };

  const handleCopyPhone = () => {
    Clipboard.setString('050-6933-3122');
  };

  return (
    <styles.Container>
      <ScrollView>
        <styles.TitleBox>
          <styles.TitleText>자주 묻는 질문</styles.TitleText>
        </styles.TitleBox>
        <MypageQuestionLayout />
        <styles.TitleBox>
          <styles.TitleText>사용 방법이 궁금해요!</styles.TitleText>
          <styles.HelpButton onPress={() => navigation.navigate('Help')}>
            <styles.HelpButtonText>도움말 보기</styles.HelpButtonText>
          </styles.HelpButton>
        </styles.TitleBox>
        <styles.TitleBox>
          <styles.TitleText>이메일로 문의하기</styles.TitleText>
        </styles.TitleBox>
        <styles.CopyBox>
          <styles.CopyInput
            id="inputEmail"
            type="text"
            placeholder="4983service@gmail.com"
            readOnly
          />
          <styles.CopyButton onPress={handleCopyEmail}>
            <styles.CopyButtonText>복사하기</styles.CopyButtonText>
          </styles.CopyButton>
        </styles.CopyBox>
        <styles.ContentText>
          *이메일 문의 시, 응답은 최소 1-2일 소요될 수 있습니다.
        </styles.ContentText>
        <styles.TitleBox>
          <styles.TitleText>전화로 문의하기</styles.TitleText>
        </styles.TitleBox>
        <styles.CopyBox>
          <styles.CopyInput
            id="inputPhone"
            type="text"
            placeholder="050-6933-3122"
            readOnly
          />
          <styles.CopyButton onPress={handleCopyPhone}>
            <styles.CopyButtonText>복사하기</styles.CopyButtonText>
          </styles.CopyButton>
        </styles.CopyBox>
        <styles.ContentText>*문의 가능 시간대: 9:00~18:00</styles.ContentText>
      </ScrollView>
    </styles.Container>
  );
};

export default MypageContactusLayout;
