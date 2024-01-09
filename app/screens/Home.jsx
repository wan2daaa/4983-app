import {useEffect, useState} from 'react';
import {fetchBookList} from '@/apis/home/HomeApi';
import HomeLayout from '@components/home/layout/home-layout';

const Home = ({navigation}) => {
  const [isFastTradeChecked, setIsFastTradeChecked] = useState(false);
  const [bookListData, setBookListData] = useState([]);

  useEffect(() => {
    fetchBookList(isFastTradeChecked)
      .then(res => {
        console.log(res);
        setBookListData(res);
      })
      .catch(error => {
        console.log('이거에러', error);
      });
  }, [isFastTradeChecked]);
  return (
    <HomeLayout
      isFastTradeChecked={isFastTradeChecked}
      setIsFastTradeChecked={setIsFastTradeChecked}
      bookListData={bookListData}
      navigation={navigation}
    />
    // <styles.MainContainer>
    //   <styles.HeaderContainer>
    //     <styles.HeaderText>중고 서적 거래</styles.HeaderText>
    //   </styles.HeaderContainer>
    //   <styles.ConditionContainer>
    //     <SettingIcon width={49} height={35} />
    //   </styles.ConditionContainer>
    //   <styles.FastTradeContainer>
    //     <styles.FastTradeIcon
    //       onPress={() => {
    //         setIsFastTradeChecked(!isFastTradeChecked);
    //       }}>
    //       {isFastTradeChecked ? (
    //         <CheckedButton width={20} height={20} />
    //       ) : (
    //         <UnCheckedButton width={20} height={20} />
    //       )}
    //       <styles.FastTradeText>빠른 거래 날짜순으로 보기</styles.FastTradeText>
    //     </styles.FastTradeIcon>
    //   </styles.FastTradeContainer>
    //   <ScrollViewContainer>
    //     <View
    //       style={{
    //         height: 113,
    //         flexDirection: 'row',
    //         alignItems: 'center',
    //       }}>
    //       <Image
    //         width={100}
    //         height={100}
    //         source={require('@assets/images/home/test.png')}
    //         style={{
    //           left: 11,
    //         }}
    //       />
    //       <View style={{left: 17, gap: 4}}>
    //         <View
    //           style={{
    //             flexDirection: 'row',
    //             gap: 3,
    //           }}>
    //           <View
    //             style={{
    //               width: 42,
    //               height: 17.385,
    //               backgroundColor: '#02B878',
    //               borderRadius: 16,
    //               justifyContent: 'center',
    //             }}>
    //             <Text
    //               style={{
    //                 color: '#FFF',
    //                 textAlign: 'center',
    //                 fontSize: 9,
    //                 fontWeight: 600,
    //               }}>
    //               판매중
    //             </Text>
    //           </View>
    //           <Text
    //             style={{
    //               fontSize: 16,
    //               fontStyle: 'normal',
    //               fontWeight: 600,
    //             }}>
    //             사회과학통계방법
    //           </Text>
    //         </View>
    //         {/*  */}
    //         <View
    //           style={{
    //             flexDirection: 'row',
    //             gap: 3,
    //           }}>
    //           <Text
    //             style={{
    //               color: '#02B878',
    //               fontSize: 14,
    //               fontWeight: 700,
    //             }}>
    //             7월 29일 거래가능
    //           </Text>
    //           <Text
    //             style={{
    //               color: '#8F8F8F',
    //               fontSize: 12,
    //               fontWeight: 400,
    //             }}>
    //             • 5초전
    //           </Text>
    //         </View>
    //         <View>
    //           <Text
    //             style={{
    //               fontSize: 14,
    //               fontStyle: 'normal',
    //               fontWeight: 700,
    //             }}>
    //             13,000원
    //           </Text>
    //         </View>
    //       </View>
    //     </View>
    //     {/*  */}
    //     <View
    //       style={{
    //         height: 113,
    //         flexDirection: 'row',
    //         alignItems: 'center',
    //       }}>
    //       <Image
    //         width={100}
    //         height={100}
    //         source={require('@assets/images/home/test.png')}
    //         style={{
    //           left: 11,
    //         }}
    //       />
    //       <View style={{left: 17, gap: 4}}>
    //         <View
    //           style={{
    //             flexDirection: 'row',
    //             gap: 3,
    //           }}>
    //           <View
    //             style={{
    //               width: 42,
    //               height: 17.385,
    //               backgroundColor: '#FBC255',
    //               borderRadius: 16,
    //               justifyContent: 'center',
    //             }}>
    //             <Text
    //               style={{
    //                 color: '#FFF',
    //                 textAlign: 'center',
    //                 fontSize: 9,
    //                 fontWeight: 600,
    //               }}>
    //               거래중
    //             </Text>
    //           </View>
    //           <Text
    //             style={{
    //               fontSize: 16,
    //               fontStyle: 'normal',
    //               fontWeight: 600,
    //             }}>
    //             생명과학 길라잡이
    //           </Text>
    //         </View>
    //         {/*  */}
    //         <View
    //           style={{
    //             flexDirection: 'row',
    //             gap: 3,
    //           }}>
    //           <Text
    //             style={{
    //               color: '#8F8F8F',
    //               fontSize: 14,
    //               fontWeight: 700,
    //             }}>
    //             7월 29일 거래가능
    //           </Text>
    //           <Text
    //             style={{
    //               color: '#8F8F8F',
    //               fontSize: 12,
    //               fontWeight: 400,
    //             }}>
    //             • 5초전
    //           </Text>
    //         </View>
    //         <View>
    //           <Text
    //             style={{
    //               fontSize: 14,
    //               fontStyle: 'normal',
    //               fontWeight: 700,
    //             }}>
    //             13,000원
    //           </Text>
    //         </View>
    //       </View>
    //     </View>
    //     {/*  */}
    //     <View
    //       style={{
    //         height: 113,
    //         flexDirection: 'row',
    //         alignItems: 'center',
    //       }}>
    //       <Image
    //         width={100}
    //         height={100}
    //         source={require('@assets/images/home/test.png')}
    //         style={{
    //           left: 11,
    //         }}
    //       />
    //       <View style={{left: 17, gap: 4}}>
    //         <View
    //           style={{
    //             flexDirection: 'row',
    //             gap: 3,
    //           }}>
    //           <View
    //             style={{
    //               width: 42,
    //               height: 17.385,
    //               backgroundColor: 'background: rgba(171, 171, 171, 0.78);',
    //               borderRadius: 16,
    //               justifyContent: 'center',
    //             }}>
    //             <Text
    //               style={{
    //                 color: '#FFF',
    //                 textAlign: 'center',
    //                 fontSize: 9,
    //                 fontWeight: 600,
    //               }}>
    //               거래완료
    //             </Text>
    //           </View>
    //           <Text
    //             style={{
    //               fontSize: 16,
    //               fontStyle: 'normal',
    //               fontWeight: 600,
    //             }}>
    //             생명과학 길라잡이
    //           </Text>
    //         </View>
    //         {/*  */}
    //         <View
    //           style={{
    //             flexDirection: 'row',
    //             gap: 3,
    //           }}>
    //           <Text
    //             style={{
    //               color: '#8F8F8F',
    //               fontSize: 14,
    //               fontWeight: 700,
    //             }}>
    //             7월 29일 거래가능
    //           </Text>
    //           <Text
    //             style={{
    //               color: '#8F8F8F',
    //               fontSize: 12,
    //               fontWeight: 400,
    //             }}>
    //             • 5초전
    //           </Text>
    //         </View>
    //         <View>
    //           <Text
    //             style={{
    //               fontSize: 14,
    //               fontStyle: 'normal',
    //               fontWeight: 700,
    //             }}>
    //             13,000원
    //           </Text>
    //         </View>
    //       </View>
    //     </View>
    //     {/*  asdasd*/}
    //     <View
    //       style={{
    //         height: 113,
    //         flexDirection: 'row',
    //         alignItems: 'center',
    //       }}>
    //       <Image
    //         width={100}
    //         height={100}
    //         source={require('@assets/images/home/test.png')}
    //         style={{
    //           left: 11,
    //         }}
    //       />
    //       <View style={{left: 17, gap: 4}}>
    //         <View
    //           style={{
    //             flexDirection: 'row',
    //             gap: 3,
    //           }}>
    //           <View
    //             style={{
    //               width: 42,
    //               height: 17.385,
    //               backgroundColor: 'background: rgba(171, 171, 171, 0.78);',
    //               borderRadius: 16,
    //               justifyContent: 'center',
    //             }}>
    //             <Text
    //               style={{
    //                 color: '#FFF',
    //                 textAlign: 'center',
    //                 fontSize: 9,
    //                 fontWeight: 600,
    //               }}>
    //               거래완료
    //             </Text>
    //           </View>
    //           <Text
    //             style={{
    //               fontSize: 16,
    //               fontStyle: 'normal',
    //               fontWeight: 600,
    //             }}>
    //             생명과학 길라잡이
    //           </Text>
    //         </View>
    //         {/*  */}
    //         <View
    //           style={{
    //             flexDirection: 'row',
    //             gap: 3,
    //           }}>
    //           <Text
    //             style={{
    //               color: '#8F8F8F',
    //               fontSize: 14,
    //               fontWeight: 700,
    //             }}>
    //             7월 29일 거래가능
    //           </Text>
    //           <Text
    //             style={{
    //               color: '#8F8F8F',
    //               fontSize: 12,
    //               fontWeight: 400,
    //             }}>
    //             • 5초전
    //           </Text>
    //         </View>
    //         <View>
    //           <Text
    //             style={{
    //               fontSize: 14,
    //               fontStyle: 'normal',
    //               fontWeight: 700,
    //             }}>
    //             13,000원
    //           </Text>
    //         </View>
    //       </View>
    //     </View>
    //   </ScrollViewContainer>
    //   <View
    //     style={{
    //       position: 'absolute',
    //       flexDirection: 'row-reverse',
    //       right: 9,
    //       bottom: 28,
    //     }}>
    //     <View
    //       style={{
    //         width: 146,
    //         height: 62,
    //         backgroundColor: '#02B878',
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //         borderRadius: 30,
    //         // box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    //         // shadowColor: '#fff',
    //         // shadowOpacity: 0.25,
    //         // shadowOffset: {
    //         //   width: 4,
    //         //   height: 4,
    //         // },
    //         // elevation: 5,
    //         shadowColor: 'black',
    //         shadowOffset: {
    //           width: 0,
    //           height: 4,
    //         },
    //         shadowOpacity: 0.3,
    //         shadowRadius: 4,
    //       }}>
    //       <Text
    //         style={{
    //           color: '#FFF',
    //           textAlign: 'center',
    //           fontSize: 20,
    //           fontWeight: 700,
    //         }}>
    //         판매하기
    //       </Text>
    //     </View>
    //   </View>
    // </styles.MainContainer>
  );
};

export default Home;
