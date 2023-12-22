import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {RecoilRoot} from 'recoil';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signin from '@screens/Signin';
import FindPassword from '@screens/find-password/Find-Password';
import FindPasswordReset from '@screens/find-password/Find-Password-Reset';
import FindPasswordFinish from '@screens/find-password/Find-Password-Finish';
import SignupProfile from '@screens/signup/Signup-Profile';
import ServiceTerms from '@screens/terms/signup-terms/ServiceTerms';
import PrivacyTerms from '@screens/terms/signup-terms/PrivacyTerms';
import MarketingTerms from '@screens/terms/signup-terms/MarketingTerms';
import SignupPhone from '@screens/signup/Signup-Phone';
import SignupAccount from '@screens/signup/Signup-Account';
import SignupCollege from '@screens/signup/Signup-College';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <RecoilRoot>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'light-content'} />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              gestureEnabled: false,
            }}>
            <Stack.Screen name="Signin" component={Signin} />
            <Stack.Screen
              name="FindPassword"
              component={FindPassword}
              options={{
                headerShown: true,
                headerShadowVisible: false,
                headerTitle: '',
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerTintColor: '#414141',
              }}
            />
            <Stack.Screen
              name="FindPasswordReset"
              component={FindPasswordReset}
              options={{
                headerShown: true,
                headerShadowVisible: false,
                headerTitle: '',
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerTintColor: '#414141',
              }}
            />
            <Stack.Screen
              name="FindPasswordFinish"
              component={FindPasswordFinish}
            />
            <Stack.Screen
              name="SignupProfile"
              component={SignupProfile}
              options={{
                headerShown: true,
                headerShadowVisible: false,
                headerTitle: '',
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerTintColor: '#414141',
              }}
            />
            <Stack.Screen
              name="ServiceTerms"
              component={ServiceTerms}
              options={{
                headerShown: true,
                headerTitle: '서비스 이용약관',
                headerTitleStyle: {fontSize: 20, fontWeight: '700'},
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerTintColor: '#414141',
              }}
            />
            <Stack.Screen
              name="PrivacyTerms"
              component={PrivacyTerms}
              options={{
                headerShown: true,
                headerTitle: '개인정보 처리 방침',
                headerTitleStyle: {fontSize: 20, fontWeight: '700'},
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerTintColor: '#414141',
              }}
            />
            <Stack.Screen
              name="MarketingTerms"
              component={MarketingTerms}
              options={{
                headerShown: true,
                headerTitle: '홍보 마케팅 동의',
                headerTitleStyle: {fontSize: 20, fontWeight: '700'},
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerTintColor: '#414141',
              }}
            />
            <Stack.Screen
              name="SignupPhone"
              component={SignupPhone}
              options={{
                headerShown: true,
                headerShadowVisible: false,
                headerTitle: '',
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerTintColor: '#414141',
              }}
            />
            <Stack.Screen
              name="SignupAccount"
              component={SignupAccount}
              options={{
                headerShown: true,
                headerShadowVisible: false,
                headerTitle: '',
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerTintColor: '#414141',
              }}
            />
            <Stack.Screen
              name="SignupCollege"
              component={SignupCollege}
              options={{
                headerShown: true,
                headerShadowVisible: false,
                headerTitle: '',
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerTintColor: '#414141',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#fff',
  },
});

export default App;
