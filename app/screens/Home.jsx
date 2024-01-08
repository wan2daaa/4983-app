import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import SettingIcon from '@assets/images/home/settingIcon.svg';
import CheckedButton from '@assets/images/signup/CheckedButton.svg';
import UnCheckedButton from '@assets/images/signup/UnCheckedButton.svg';
import {useState} from 'react';

const Home = () => {
  const [isFastTradeChecked, setIsFastTradeChecked] = useState(false);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          height: 50.773,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#000',
            fontSize: 20,
            fontWeight: 700,
          }}>
          중고 서적 거래
        </Text>
      </View>
      <View
        style={{
          height: 39,
          flexDirection: 'row',
        }}>
        <SettingIcon width={49} height={35} />
      </View>
      <View
        style={{
          height: 56,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            left: 20,
            flexDirection: 'row',
            gap: 4,
          }}
          onPress={() => {
            setIsFastTradeChecked(!isFastTradeChecked);
          }}>
          {isFastTradeChecked ? (
            <CheckedButton width={20} height={20} />
          ) : (
            <UnCheckedButton width={20} height={20} />
          )}

          <Text
            style={{
              color: 'var(--B-100, #36332E)',
              fontSize: 14,
              fontWeight: 700,
            }}>
            빠른 거래 날짜순으로 보기{' '}
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={{
          flex: 1,
        }}>
        <View
          style={{
            height: 113,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            width={100}
            height={100}
            source={require('@assets/images/home/test.png')}
            style={{
              left: 11,
            }}
          />
          <View style={{left: 17, gap: 4}}>
            <View
              style={{
                flexDirection: 'row',
                gap: 3,
              }}>
              <View
                style={{
                  width: 42,
                  height: 17.385,
                  backgroundColor: '#02B878',
                  borderRadius: 16,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: '#FFF',
                    textAlign: 'center',
                    fontSize: 9,
                    fontWeight: 600,
                  }}>
                  판매중
                </Text>
              </View>
              <Text
                style={{
                  color: 'var(--B-100, #36332E)',
                  fontSize: 16,
                  fontStyle: 'normal',
                  fontWeight: 600,
                }}>
                사회과학통계방법
              </Text>
            </View>
            {/*  */}
            <View
              style={{
                flexDirection: 'row',
                gap: 3,
              }}>
              <Text
                style={{
                  color: '#02B878',
                  fontSize: 14,
                  fontWeight: 700,
                }}>
                7월 29일 거래가능
              </Text>
              <Text
                style={{
                  color: '#8F8F8F',
                  fontSize: 12,
                  fontWeight: 400,
                }}>
                • 5초전
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: 'var(--B-100, #36332E)',
                  fontSize: 14,
                  fontStyle: 'normal',
                  fontWeight: 700,
                }}>
                13,000원
              </Text>
            </View>
          </View>
        </View>
        {/*  */}
        <View
          style={{
            height: 113,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            width={100}
            height={100}
            source={require('@assets/images/home/test.png')}
            style={{
              left: 11,
            }}
          />
          <View style={{left: 17, gap: 4}}>
            <View
              style={{
                flexDirection: 'row',
                gap: 3,
              }}>
              <View
                style={{
                  width: 42,
                  height: 17.385,
                  backgroundColor: '#FBC255',
                  borderRadius: 16,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: '#FFF',
                    textAlign: 'center',
                    fontSize: 9,
                    fontWeight: 600,
                  }}>
                  거래중
                </Text>
              </View>
              <Text
                style={{
                  color: 'var(--B-100, #36332E)',
                  fontSize: 16,
                  fontStyle: 'normal',
                  fontWeight: 600,
                }}>
                생명과학 길라잡이
              </Text>
            </View>
            {/*  */}
            <View
              style={{
                flexDirection: 'row',
                gap: 3,
              }}>
              <Text
                style={{
                  color: '#8F8F8F',
                  fontSize: 14,
                  fontWeight: 700,
                }}>
                7월 29일 거래가능
              </Text>
              <Text
                style={{
                  color: '#8F8F8F',
                  fontSize: 12,
                  fontWeight: 400,
                }}>
                • 5초전
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: 'var(--B-100, #36332E)',
                  fontSize: 14,
                  fontStyle: 'normal',
                  fontWeight: 700,
                }}>
                13,000원
              </Text>
            </View>
          </View>
        </View>
        {/*  */}
        <View
          style={{
            height: 113,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            width={100}
            height={100}
            source={require('@assets/images/home/test.png')}
            style={{
              left: 11,
            }}
          />
          <View style={{left: 17, gap: 4}}>
            <View
              style={{
                flexDirection: 'row',
                gap: 3,
              }}>
              <View
                style={{
                  width: 42,
                  height: 17.385,
                  backgroundColor: 'background: rgba(171, 171, 171, 0.78);',
                  borderRadius: 16,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: '#FFF',
                    textAlign: 'center',
                    fontSize: 9,
                    fontWeight: 600,
                  }}>
                  거래완료
                </Text>
              </View>
              <Text
                style={{
                  color: 'var(--B-100, #36332E)',
                  fontSize: 16,
                  fontStyle: 'normal',
                  fontWeight: 600,
                }}>
                생명과학 길라잡이
              </Text>
            </View>
            {/*  */}
            <View
              style={{
                flexDirection: 'row',
                gap: 3,
              }}>
              <Text
                style={{
                  color: '#8F8F8F',
                  fontSize: 14,
                  fontWeight: 700,
                }}>
                7월 29일 거래가능
              </Text>
              <Text
                style={{
                  color: '#8F8F8F',
                  fontSize: 12,
                  fontWeight: 400,
                }}>
                • 5초전
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: 'var(--B-100, #36332E)',
                  fontSize: 14,
                  fontStyle: 'normal',
                  fontWeight: 700,
                }}>
                13,000원
              </Text>
            </View>
          </View>
        </View>
        {/*  asdasd*/}
        <View
          style={{
            height: 113,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            width={100}
            height={100}
            source={require('@assets/images/home/test.png')}
            style={{
              left: 11,
            }}
          />
          <View style={{left: 17, gap: 4}}>
            <View
              style={{
                flexDirection: 'row',
                gap: 3,
              }}>
              <View
                style={{
                  width: 42,
                  height: 17.385,
                  backgroundColor: 'background: rgba(171, 171, 171, 0.78);',
                  borderRadius: 16,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: '#FFF',
                    textAlign: 'center',
                    fontSize: 9,
                    fontWeight: 600,
                  }}>
                  거래완료
                </Text>
              </View>
              <Text
                style={{
                  color: 'var(--B-100, #36332E)',
                  fontSize: 16,
                  fontStyle: 'normal',
                  fontWeight: 600,
                }}>
                생명과학 길라잡이
              </Text>
            </View>
            {/*  */}
            <View
              style={{
                flexDirection: 'row',
                gap: 3,
              }}>
              <Text
                style={{
                  color: '#8F8F8F',
                  fontSize: 14,
                  fontWeight: 700,
                }}>
                7월 29일 거래가능
              </Text>
              <Text
                style={{
                  color: '#8F8F8F',
                  fontSize: 12,
                  fontWeight: 400,
                }}>
                • 5초전
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: 'var(--B-100, #36332E)',
                  fontSize: 14,
                  fontStyle: 'normal',
                  fontWeight: 700,
                }}>
                13,000원
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          flexDirection: 'row-reverse',
          right: 9,
          bottom: 28,
        }}>
        <View
          style={{
            width: 146,
            height: 62,
            backgroundColor: '#02B878',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 30,
            // box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            // shadowColor: '#fff',
            // shadowOpacity: 0.25,
            // shadowOffset: {
            //   width: 4,
            //   height: 4,
            // },
            // elevation: 5,
            shadowColor: 'black',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.3,
            shadowRadius: 4,
          }}>
          <Text
            style={{
              color: '#FFF',
              textAlign: 'center',
              fontSize: 20,
              fontWeight: 700,
            }}>
            판매하기
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Home;
