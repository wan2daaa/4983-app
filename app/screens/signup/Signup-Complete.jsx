import {View, Text, Image, TouchableOpacity} from 'react-native';
import SignUpCompleteIcon from '@assets/images/signup/SignUpCompleteIcon.svg';

const SignupComplete = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '88.8020833333%',
        }}>
        <SignUpCompleteIcon width={150} height={150} />
        <Text
          style={{
            marginTop: 29,
            color: '#02B878',
            fontSize: 20,
            fontWeight: 700,
          }}>
          회원가입이 완료되었습니다!
        </Text>
      </View>
      <View style={{flex: 1, alignItems: 'center'}}>
        <TouchableOpacity
          style={{
            width: 309,
            height: 52,
            borderRadius: 15,
            backgroundColor: '#02B878',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 15,
              fontWeight: 700,
              textAlign: 'center',
            }}
            onPress={() => navigation.navigate('Help')}>
            사용법 보러 가기
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupComplete;
