import * as styles from './PrivacyTermsLayout.styles';
import {PrivacyTermsContent} from '/data/PrivacyTermsContent';
import {ScrollView, TouchableWithoutFeedback} from 'react-native';
import {Fragment} from 'react';

const PrivacyTermsLayout = () => {
  return (
    <styles.Container>
      <TouchableWithoutFeedback>
        <ScrollView>
          {Object.keys(PrivacyTermsContent).map(sectionKey => (
            <Fragment key={sectionKey}>
              <styles.SectionTitle>
                {PrivacyTermsContent[sectionKey].title}
              </styles.SectionTitle>
              <styles.SectionContent>
                {PrivacyTermsContent[sectionKey].content}
              </styles.SectionContent>
            </Fragment>
          ))}
        </ScrollView>
      </TouchableWithoutFeedback>
    </styles.Container>
  );
};

export default PrivacyTermsLayout;
