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
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '@screens/Home';
import HomeIcon from '@assets/images/bottom-tabs/Home.svg';
import ChatListIcon from '@assets/images/bottom-tabs/ChatList.svg';
import HelpIcon from '@assets/images/bottom-tabs/Help.svg';
import SearchIcon from '@assets/images/bottom-tabs/Search.svg';
import MypageIcon from '@assets/images/bottom-tabs/Mypage.svg';
import Mypage from '@screens/mypage/Mypage';
import MypageTerms from '@screens/mypage/MypageTerms';
import Help from '@screens/Help';
import MypageContactus from '@screens/mypage/MypageContactus';
import ChangePassword from '@screens/mypage/ChangePassword';
import MypageEditProfile from '@screens/mypage/MypageEditProfile';
import MypageSalesHistory from '@screens/mypage/MypageSalesHistory';
import MypagePurchaseHistory from '@screens/mypage/MypagePurchaseHistory';
import SignupDepartment from '@screens/signup/Signup-Department';
import SignupComplete from '@screens/signup/Signup-Complete';
import Category from '@screens/Category';
import {ChatList} from '@screens/ChatList';
import {Search} from '@screens/Search';
import {Sell} from '@screens/sell/Sell';
import {LocaleConfig} from 'react-native-calendars/src/index';
import {College} from '@screens/College';
import {Department} from '@screens/Department';
import Detail from '@screens/Detail';
import Chatbot from '@screens/chatbot/Chatbot';
import {Modify} from '@screens/modify/Modify';
import ChatbotLocker from '@screens/chatbot/ChatbotLocker';
import ChatbotLockerPassword from '@screens/chatbot/ChatbotLockerPassword';
import {useEffect} from 'react';
import {firebase} from '@react-native-firebase/messaging';
import Notice from '@screens/notice/Notice';
import NoticeDetail from '@screens/notice/NoticeDetail';
import BackButton from '@assets/images/common/BackButton.svg';
import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function getTabBarIcon(routeName, focused) {
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
        component={ChatList}
        options={{
          unmountOnBlur: true,
          tabBarLabel: '',
          tabBarStyle: {display: 'none'},
        }}
      />

      <Tab.Screen
        name="도움말"
        component={Help}
        options={{
          tabBarStyle: {display: 'none'},
          unmountOnBlur: true,
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name="검색"
        component={Search}
        options={{
          unmountOnBlur: true,
          tabBarLabel: '',
          tabBarStyle: {display: 'none'},
        }}
      />
      <Tab.Screen
        name="마이페이지"
        component={Mypage}
        options={{
          unmountOnBlur: true,
          tabBarLabel: '',
          tabBarStyle: {display: 'none'},
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  useEffect(() => {
    const ac = new AbortController();

    setTimeout(() => {
      SplashScreen.hide();
    }, 1500);

    return function cleanup() {
      ac.abort();
    };
  }, []);

  useEffect(() => {
    firebase.messaging().setBackgroundMessageHandler(() => {
      console.log('background Alarm received');
    });
  }, []);

  LocaleConfig.locales.kr = {
    monthNames: [
      '1월',
      '2월',
      '3월',
      '4월',
      '5월',
      '6월',
      '7월',
      '8월',
      '9월',
      '10월',
      '11월',
      '12월',
    ],
    monthNamesShort: [
      '1월',
      '2월',
      '3월',
      '4월',
      '5월',
      '6월',
      '7월',
      '8월',
      '9월',
      '10월',
      '11월',
      '12월',
    ],
    dayNames: ['일', '월', '화', '수', '목', '금', '토'],
    dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
    today: '오늘',
  };

  LocaleConfig.defaultLocale = 'kr';

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
            <Stack.Screen name="Category" component={Category} options={{}} />
            <Stack.Screen name="BottomTabs" component={BottomTabs} />
            <Stack.Screen
              name="MypageTerms"
              component={MypageTerms}
              options={{
                headerShown: true,
                headerShadowVisible: false,
                headerTitle: '이용약관',
                headerTitleStyle: {fontSize: 20, fontWeight: '700'},
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerTintColor: '#414141',
              }}
            />
            <Stack.Screen
              name="Help"
              component={Help}
              options={{
                headerShown: true,
                headerShadowVisible: false,
                headerTitle: '',
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerTintColor: '#414141',
                headerStyle: {
                  backgroundColor: '#1DAE73',
                },
              }}
            />
            <Stack.Screen
              name="MypageContactus"
              component={MypageContactus}
              options={{
                headerShown: true,
                headerShadowVisible: false,
                headerTitle: '문의하기',
                headerTitleStyle: {fontSize: 20, fontWeight: '700'},
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerTintColor: '#414141',
              }}
            />
            <Stack.Screen
              name="ChangePassword"
              component={ChangePassword}
              options={{
                headerShown: true,
                headerShadowVisible: false,
                headerTitle: '비밀번호 변경',
                headerTitleStyle: {fontSize: 20, fontWeight: '700'},
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerTintColor: '#414141',
              }}
            />
            <Stack.Screen
              name="MypageEditProfile"
              component={MypageEditProfile}
              options={{
                headerShown: true,
                headerShadowVisible: false,
                headerTitle: '회원 정보 수정',
                headerTitleStyle: {fontSize: 20, fontWeight: '700'},
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerTintColor: '#414141',
              }}
            />
            <Stack.Screen
              name="MypageSalesHistory"
              component={MypageSalesHistory}
              options={{
                headerShown: true,
                headerShadowVisible: false,
                headerTitle: '판매 내역',
                headerTitleStyle: {fontSize: 20, fontWeight: '700'},
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerTintColor: '#414141',
              }}
            />
            <Stack.Screen
              name="MypagePurchaseHistory"
              component={MypagePurchaseHistory}
              options={{
                headerShown: true,
                headerShadowVisible: false,
                headerTitle: '구매 내역',
                headerTitleStyle: {fontSize: 20, fontWeight: '700'},
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerTintColor: '#414141',
              }}
            />
            <Stack.Screen
              name="ChatList"
              component={ChatList}
              options={{
                headerShown: true,
                headerShadowVisible: false,
                headerTitle: '중고 서적 거래 채팅',
                headerTitleStyle: {fontSize: 20, fontWeight: '700'},
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerTintColor: '#414141',
              }}
            />
            <Stack.Screen
              name="Search"
              component={Search}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Sell"
              component={Sell}
              options={{
                headerShown: true,
                headerShadowVisible: false,
                headerTitle: '전공서적 판매 글쓰기',
                headerTitleStyle: {fontSize: 20, fontWeight: '700'},
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerTintColor: '#414141',
                unmountOnBlur: true,
              }}
            />
            <Stack.Screen
              name="College"
              component={College}
              options={{
                headerShown: true,
                headerTitle: '단과대 선택',
                headerTitleStyle: {fontSize: 20, fontWeight: '700'},
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerTintColor: '#414141',
              }}
            />
            <Stack.Screen
              name="Department"
              component={Department}
              options={{
                headerShown: true,
                headerTitle: '학과 선택',
                headerTitleStyle: {fontSize: 20, fontWeight: '700'},
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerTintColor: '#414141',
              }}
            />
            <Stack.Screen
              name="Detail"
              component={Detail}
              options={{
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerTintColor: '#414141',
                unmountOnBlur: true,
              }}
            />
            <Stack.Screen
              name="Modify"
              component={Modify}
              options={{
                headerShown: true,
                headerShadowVisible: false,
                headerTitle: '수정하기',
                headerTitleStyle: {fontSize: 20, fontWeight: '700'},
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerTintColor: '#414141',
              }}
            />
            <Stack.Screen
              name="Chatbot"
              component={Chatbot}
              options={{
                headerShown: true,
                headerTitle: '거래 채팅봇',
                headerTitleStyle: {fontSize: 20, fontWeight: '700'},
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerTintColor: '#414141',
                headerShadowVisible: false,
              }}
            />
            <Stack.Screen
              name="ChatbotLocker"
              component={ChatbotLocker}
              options={{
                headerShown: true,
                headerTitle: '사물함 선택',
                headerTitleStyle: {fontSize: 20, fontWeight: '700'},
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerTintColor: '#414141',
                headerShadowVisible: false,
              }}
            />
            <Stack.Screen
              name="ChatbotLockerPassword"
              component={ChatbotLockerPassword}
              options={{
                headerShown: true,
                headerTitle: '사물함 비밀번호 입력',
                headerTitleStyle: {fontSize: 20, fontWeight: '700'},
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerTintColor: '#414141',
                headerShadowVisible: false,
              }}
            />
            <Stack.Screen
              name="Notice"
              component={Notice}
              options={{
                headerShown: true,
                headerTitle: '이벤트/공지사항',
                headerTitleStyle: {fontSize: 20, fontWeight: '700'},
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerTintColor: '#414141',
                headerShadowVisible: true,
              }}
            />
            <Stack.Screen
              name="NoticeDetail"
              component={NoticeDetail}
              options={{
                headerShown: true,
                headerTitle: '',
                headerTitleStyle: {fontSize: 20, fontWeight: '700'},
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerTintColor: '#414141',
                headerShadowVisible: true,
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
