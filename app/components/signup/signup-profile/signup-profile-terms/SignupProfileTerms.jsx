import * as styles from './SignupProfileTerms.styles';
import AllNonCheckIcon from '@assets/images/signup/TermsAllNonCheck.svg';
import AllCheckIcon from '@assets/images/signup/TermsAllCheck.svg';
import NonCheckIcon from '@assets/images/signup/TermsNonCheck.svg';
import CheckIcon from '@assets/images/signup/TermsCheck.svg';

import {TouchableOpacity} from 'react-native';

const SignupProfileTerms = ({
  navigation,
  termsOfUse,
  setTermsOfUse,
  personalInformationCollection,
  setPersonalInformationCollection,
  marketingAgreement,
  setMarketingAgreement,
}) => {
  const handleCheckAllAgreements = () => {
    setTermsOfUse(!termsOfUse);
    setPersonalInformationCollection(!personalInformationCollection);
    setMarketingAgreement(!marketingAgreement);
  };

  const handleTermsOfUse = () => {
    setTermsOfUse(!termsOfUse);
  };

  const handlePersonalInformationCollection = () => {
    setPersonalInformationCollection(!personalInformationCollection);
  };

  const handleMarketingAgreement = () => {
    setMarketingAgreement(!marketingAgreement);
  };

  return (
    <styles.Container>
      <styles.TermsBox>
        <styles.TermsItemBox>
          <styles.TermsItemAllBox>
            <TouchableOpacity
              onPress={handleCheckAllAgreements}
              hitSlop={{top: 20, bottom: 20}}>
              {termsOfUse &&
              personalInformationCollection &&
              marketingAgreement ? (
                <styles.AllIconBox>
                  <AllCheckIcon width={20} height={20} />
                </styles.AllIconBox>
              ) : (
                <styles.AllIconBox>
                  <AllNonCheckIcon width={20} height={20} />
                </styles.AllIconBox>
              )}
            </TouchableOpacity>
            <styles.TermsText>모든 약관에 동의합니다.</styles.TermsText>
          </styles.TermsItemAllBox>
          <styles.TermsItem>
            <TouchableOpacity
              onPress={handleTermsOfUse}
              hitSlop={{top: 20, bottom: 20}}>
              {termsOfUse ? (
                <styles.IconBox>
                  <CheckIcon width={18} height={15} />
                </styles.IconBox>
              ) : (
                <styles.IconBox>
                  <NonCheckIcon width={18} height={15} />
                </styles.IconBox>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('ServiceTerms')}>
              <styles.TermsText style={{textDecorationLine: 'underline'}}>
                [필수] 이용약관
              </styles.TermsText>
            </TouchableOpacity>
          </styles.TermsItem>
          <styles.TermsItem>
            <TouchableOpacity
              onPress={handlePersonalInformationCollection}
              hitSlop={{top: 20, bottom: 20}}>
              {personalInformationCollection ? (
                <styles.IconBox>
                  <CheckIcon width={18} height={15} />
                </styles.IconBox>
              ) : (
                <styles.IconBox>
                  <NonCheckIcon width={18} height={15} />
                </styles.IconBox>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('PrivacyTerms')}>
              <styles.TermsText style={{textDecorationLine: 'underline'}}>
                [필수] 개인정보 수집 이용동의
              </styles.TermsText>
            </TouchableOpacity>
          </styles.TermsItem>
          <styles.TermsItem>
            <TouchableOpacity
              onPress={handleMarketingAgreement}
              hitSlop={{top: 20, bottom: 20}}>
              {marketingAgreement ? (
                <styles.IconBox>
                  <CheckIcon width={18} height={15} />
                </styles.IconBox>
              ) : (
                <styles.IconBox>
                  <NonCheckIcon width={18} height={15} />
                </styles.IconBox>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('MarketingTerms')}>
              <styles.TermsText style={{textDecorationLine: 'underline'}}>
                [선택] 홍보 마케팅 동의
              </styles.TermsText>
            </TouchableOpacity>
          </styles.TermsItem>
        </styles.TermsItemBox>
      </styles.TermsBox>
    </styles.Container>
  );
};

export default SignupProfileTerms;
