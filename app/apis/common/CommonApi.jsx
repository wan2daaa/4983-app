import axios from 'axios';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const BASE_API = axios.create({
  baseURL: 'https://dev-server.4983.link',
  responseType: 'json',
  withCredentials: true,
  timeout: 10000,
});

export const API = axios.create({
  baseURL: 'https://dev-server.4983.link',
  responseType: 'json',
  withCredentials: true,
  timeout: 2000,
});

// export const API = axios.create({
//   baseURL: 'https://dev.4983.link',
//   responseType: 'json',
//   withCredentials: true,
// });
//
// export const handleTokenExpirationError = () => {
//   // const navigation: NavigationProp<ParamListBase> = useNavigation();
//
//   Alert.alert('앗!', '로그인이 만료되었습니다.', [
//     {
//       text: '확인',
//       onPress: () => {
//         // navigation.navigate('Signin');
//         console.log('로그인 페이지로 이동');
//       },
//     },
//   ]);
// };
//
BASE_API.interceptors.request.use(async config => {
  const accessToken = await AsyncStorage.getItem('accessToken');

  // console.log('BASE_API : accessToken , ', accessToken);

  if (accessToken != null && accessToken !== '' && accessToken !== undefined) {
    config.headers.Authorization = accessToken;
  }

  return config;
});

// BASE_API.interceptors.response.use(
//   res => res,
//   async err => {
//     const {
//       config,
//       response: {status},
//     } = err;
//
//     console.log('error ', err);
//
//     if (status !== 401) {
//       return Promise.reject(err);
//     }
//
//     await axios
//       .get('https://dev-server.4983.link/api/v1/token/update', {
//         withCredentials: true,
//       })
//       .then(res => {
//         AsyncStorage.setItem('accessToken', res.headers.authorization);
//
//         console.log('res.headers.Authorization', res.headers.authorization);
//
//         if (typeof res.headers.Authorization === 'string') {
//           config.headers.Authorization = res.headers.Authorization;
//           return axios(config);
//         }
//       })
//       .catch(() => {
//         return Promise.reject(err);
//       });
//
//     return Promise.reject(err);
//   },
// );
