import * as styles from './ServiceTermsLayout.styles';
import {ServiceTermsContent} from '/data/ServiceTermsContent';
import {ScrollView, TouchableWithoutFeedback} from 'react-native';
import {Fragment} from 'react';

const ServiceTermsLayout = () => {
  return (
    <styles.Container>
      <TouchableWithoutFeedback>
        <ScrollView>
          <styles.Title
            style={{
              color: '#36332E',
              fontSize: 15,
              fontWeight: '700',
            }}>
            사고파삼 서비스 이용약관
          </styles.Title>
          {Object.keys(ServiceTermsContent).map(sectionKey => (
            <Fragment key={sectionKey}>
              <styles.SectionTitle>
                {ServiceTermsContent[sectionKey].title}
              </styles.SectionTitle>
              <styles.SectionContent>
                {ServiceTermsContent[sectionKey].content}
              </styles.SectionContent>
            </Fragment>
          ))}
        </ScrollView>
      </TouchableWithoutFeedback>
    </styles.Container>
  );
};

export default ServiceTermsLayout;
