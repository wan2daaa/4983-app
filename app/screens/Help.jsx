import HelpLayout from '@components/mypage/mypage-inquiry/help/help-layout/HelpLayout';

const Help = ({navigation, route}) => {
  const isSignup = !!route.params?.isSignup;

  return <HelpLayout navigation={navigation} isSignup={isSignup} />;
};

export default Help;
