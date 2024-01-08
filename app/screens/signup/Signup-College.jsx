import SignupCollegeLayout from '@components/signup/signup-college/signup-college-layout/SignupCollegeLayout';
import {useState} from 'react';

const SignupCollege = ({navigation}) => {
  const [selectedCollegeId, setSelectedCollegeId] = useState(-1);

  return (
    <SignupCollegeLayout
      navigation={navigation}
      selectedCollegeId={selectedCollegeId}
      setSelectedCollegeId={setSelectedCollegeId}
    />
  );
};

export default SignupCollege;
