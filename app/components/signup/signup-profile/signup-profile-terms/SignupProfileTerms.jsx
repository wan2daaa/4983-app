import * as styles from './SignupProfileTerms.styles';
import AllNonCheckIcon from '@assets/images/signup/TermsAllNonCheck.svg';
import NonCheckIcon from '@assets/images/signup/TermsNonCheck.svg';
import {TouchableOpacity} from 'react-native';

const SignupProfileTerms = ({navigation, setMarketingAgreement}) => {
  return (
    <styles.Container>
      <styles.TermsBox>
        <styles.TermsItemBox>
          <styles.TermsItemAllBox>
            <TouchableOpacity hitSlop={{top: 20, bottom: 20}}>
              <styles.AllIconBox>
                <AllNonCheckIcon width={20} height={20} />
              </styles.AllIconBox>
            </TouchableOpacity>
            <styles.TermsText>모든 약관에 동의합니다.</styles.TermsText>
          </styles.TermsItemAllBox>
          <styles.TermsItem>
            <TouchableOpacity hitSlop={{top: 20, bottom: 20}}>
              <styles.IconBox>
                <NonCheckIcon width={18} height={15} />
              </styles.IconBox>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('ServiceTerms')}>
              <styles.TermsText style={{textDecorationLine: 'underline'}}>
                [필수] 이용약관
              </styles.TermsText>
            </TouchableOpacity>
          </styles.TermsItem>
          <styles.TermsItem>
            <TouchableOpacity hitSlop={{top: 20, bottom: 20}}>
              <styles.IconBox>
                <NonCheckIcon width={18} height={15} />
              </styles.IconBox>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('PrivacyTerms')}>
              <styles.TermsText style={{textDecorationLine: 'underline'}}>
                [필수] 개인정보 수집 이용동의
              </styles.TermsText>
            </TouchableOpacity>
          </styles.TermsItem>
          <styles.TermsItem>
            <TouchableOpacity hitSlop={{top: 20, bottom: 20}}>
              <styles.IconBox>
                <NonCheckIcon width={18} height={15} />
              </styles.IconBox>
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
