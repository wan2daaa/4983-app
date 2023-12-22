import * as styles from './MarketingTermsLayout.styles';
import {MarketingTermsContent} from '/data/MarketingTermsContent';
import {ScrollView, TouchableWithoutFeedback} from 'react-native';
import {Fragment} from 'react';

const MarketingTermsLayout = () => {
  return (
    <styles.Container>
      <TouchableWithoutFeedback>
        <ScrollView>
          {Object.keys(MarketingTermsContent).map(sectionKey => (
            <Fragment key={sectionKey}>
              <styles.SectionTitle>
                {MarketingTermsContent[sectionKey].title}
              </styles.SectionTitle>
              <styles.SectionContent>
                {MarketingTermsContent[sectionKey].content}
              </styles.SectionContent>
            </Fragment>
          ))}
        </ScrollView>
      </TouchableWithoutFeedback>
    </styles.Container>
  );
};

export default MarketingTermsLayout;
