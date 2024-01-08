import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {
  NavigationContainer,
  useIsFocused,
  useRoute,
} from '@react-navigation/native';
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
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '@screens/Home';
import HomeIcon from '@assets/images/bottom-tabs/Home.svg';
import ChatListIcon from '@assets/images/bottom-tabs/ChatList.svg';
import HelpIcon from '@assets/images/bottom-tabs/Help.svg';
import SearchIcon from '@assets/images/bottom-tabs/Search.svg';
import MypageIcon from '@assets/images/bottom-tabs/Mypage.svg';
import SignupDepartment from '@screens/signup/Signup-Department';
import SignupComplete from '@screens/signup/Signup-Complete';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function getTabBarIcon(routeName: string, focused: boolean) {
  switch (routeName) {
    case '홈':
      return focused ? (
        <HomeIcon width={39} height={48} />
      ) : (
        <HomeIcon width={39} height={48} />
      );
    case '채팅리스트':
      return focused ? (
        <ChatListIcon width={38} height={40} />
      ) : (
        <ChatListIcon width={38} height={40} />
      );
    case '도움말':
      return focused ? (
        <HelpIcon width={45} height={42} />
      ) : (
        <HelpIcon width={45} height={42} />
      );
    case '검색':
      return focused ? (
        <SearchIcon
          width={35.17}
          height={49.266}
          style={{transform: [{rotate: '-42.957deg'}], marginTop: 10}}
        />
      ) : (
        <SearchIcon
          width={35.17}
          height={49.266}
          style={{transform: [{rotate: '-42.957deg'}], marginTop: 10}}
        />
      );
    case '마이페이지':
      return focused ? (
        <MypageIcon width={41} height={49} style={{marginTop: 8}} />
      ) : (
        <MypageIcon width={41} height={49} style={{marginTop: 8}} />
      );
    default:
      return null;
  }
}

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused}) => getTabBarIcon(route.name, focused),
        tabBarStyle: {
          borderTopLeftRadius: 6,
          borderTopRightRadius: 6,
          height: 60,
        },
      })}>
      <Tab.Screen
        name="홈"
        component={Home}
        options={{unmountOnBlur: true, tabBarLabel: ''}}
      />
      <Tab.Screen
        name="채팅리스트"
        component={Home}
        options={{unmountOnBlur: true, tabBarLabel: ''}}
      />

      <Tab.Screen
        name="도움말"
        component={Home}
        options={{unmountOnBlur: true, tabBarLabel: ''}}
      />
      <Tab.Screen
        name="검색"
        component={Home}
        options={{unmountOnBlur: true, tabBarLabel: ''}}
      />
      <Tab.Screen
        name="마이페이지"
        component={Home}
        options={{unmountOnBlur: true, tabBarLabel: ''}}
      />
    </Tab.Navigator>
  );
}

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
            <Stack.Screen
              name="SignupDepartment"
              component={SignupDepartment}
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
              name="SignupComplete"
              component={SignupComplete}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="BottomTabs" component={BottomTabs} />
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
