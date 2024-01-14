import {TouchableWithoutFeedback, ScrollView} from 'react-native';
import * as styles from './MypageTermsLayout.styles';
import {MarketingTermsContent} from '@data/MarketingTermsContent';
import {Fragment} from 'react';
import {ServiceTermsContent} from '@data/ServiceTermsContent';
import {PrivacyTermsContent} from '@data/PrivacyTermsContent';

const MypageTermsLayout = () => {
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
            서비스 이용약관
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

          <styles.Title
            style={{
              color: '#36332E',
              fontSize: 15,
              fontWeight: '700',
            }}>
            개인정보 처리 방침
          </styles.Title>
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

          <styles.Title
            style={{
              color: '#36332E',
              fontSize: 15,
              fontWeight: '700',
            }}>
            홍보 마케팅 동의
          </styles.Title>
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

export default MypageTermsLayout;
