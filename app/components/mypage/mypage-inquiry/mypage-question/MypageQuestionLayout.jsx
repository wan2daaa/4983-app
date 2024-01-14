import * as styles from './MypageQuestionLayout.styles';
import {MypageFaqContent} from '@data/MypageFaqContent';
import {useState} from 'react';
import MoreButtonIcon from '@assets/images/mypage/MoreButton.svg';
import MoreCloseButtonIcon from '@assets/images/mypage/MoreCloseButton.svg';

const MypageQuestionLayout = () => {
  const [showMoreContent, setShowMoreContent] = useState(
    Array(MypageFaqContent.length).fill(false),
  );

  const toggleMoreContent = index => {
    const newShowMoreContent = [...showMoreContent];
    newShowMoreContent[index] = !newShowMoreContent[index];
    setShowMoreContent(newShowMoreContent);
  };

  return (
    <styles.Container>
      {MypageFaqContent.map((item, index) => (
        <styles.FaqBox key={index}>
          <styles.FaqHeader>
            <styles.FapQuestion>{item.question}</styles.FapQuestion>
            <styles.MoreButton
              onPress={() => toggleMoreContent(index)}
              hitSlop={{top: 20, bottom: 20}}>
              {showMoreContent[index] ? (
                <MoreCloseButtonIcon width={20} height={20} />
              ) : (
                <MoreButtonIcon width={20} height={20} />
              )}
            </styles.MoreButton>
          </styles.FaqHeader>
          {showMoreContent[index] && (
            <styles.FaqAnswer>{item.answer}</styles.FaqAnswer>
          )}
        </styles.FaqBox>
      ))}
    </styles.Container>
  );
};

export default MypageQuestionLayout;
