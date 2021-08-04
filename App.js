import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
          {/* search bar */}
          <View
            style={{
              marginTop: 17,
              marginHorizontal: 17,
              flexDirection: 'row',
            }}>
            <TextInput
              placeholder="What do you want to eat?"
              style={{
                borderRadius: 25,
                borderWidth: 1,
                borderColor: '#e8e8e8',
                height: 40,
                fontSize: 13,
                paddingLeft: 45,
                paddingRight: 18,
                backgroundColor: 'white',
                flex: 1,
                marginRight: 18,
              }}
            />
            <Image
              source={require('./icon/search.png')}
              style={{position: 'absolute', top: 5, left: 10}}
            />
            <Image
              source={require('./icon/promo.png')}
              style={{
                width: 35,
                height: 35,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
          </View>
          {/* gopay */}
          <View
            style={{
              marginHorizontal: 17,
              marginTop: 8,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#2c5fb8',
                padding: 14,
                borderTopLeftRadius: 4,
                borderTopRightRadius: 4,
              }}>
              <Image source={require('./icon/gopay.png')} />
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
                RP500.000
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#2f65bd',
                paddingTop: 20,
                paddingBottom: 14,
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
              }}>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                }}>
                <Image source={require('./icon/pay.png')} />
                <Text
                  style={{
                    color: 'white',
                    fontSize: 13,
                    fontWeight: 'bold',
                    marginTop: 5,
                  }}>
                  pay
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                }}>
                <Image source={require('./icon/nearby.png')} />
                <Text
                  style={{
                    color: 'white',
                    fontSize: 13,
                    fontWeight: 'bold',
                    marginTop: 5,
                  }}>
                  nearby
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                }}>
                <Image source={require('./icon/topup.png')} />
                <Text
                  style={{
                    color: 'white',
                    fontSize: 13,
                    fontWeight: 'bold',
                    marginTop: 5,
                  }}>
                  top up
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                }}>
                <Image source={require('./icon/more.png')} />
                <Text
                  style={{
                    color: 'white',
                    fontSize: 13,
                    fontWeight: 'bold',
                    marginTop: 5,
                  }}>
                  more
                </Text>
              </View>
            </View>
            <View></View>
          </View>
          {/* main feature */}
          <View
            style={{
              marginHorizontal: 17,
              flexWrap: 'wrap',
              marginTop: 18,
            }}>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                width: '100%',
                marginBottom: 18,
              }}>
              <View style={{alignItems: 'center'}}>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 1,
                    borderColor: '#efefef',
                    borderRadius: 18,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 4,
                    },
                    shadowOpacity: 0.32,
                    shadowRadius: 5.46,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={require('./icon/go-ride.png')} style={{}} />
                </View>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 11,
                    marginTop: 6,
                  }}>
                  GO RIDE
                </Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 1,
                    borderColor: '#efefef',
                    borderRadius: 18,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 4,
                    },
                    shadowOpacity: 0.32,
                    shadowRadius: 5.46,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={require('./icon/go-car.png')} style={{}} />
                </View>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 11,
                    marginTop: 6,
                  }}>
                  GO CAR
                </Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 1,
                    borderColor: '#efefef',
                    borderRadius: 18,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 4,
                    },
                    shadowOpacity: 0.32,
                    shadowRadius: 5.46,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('./icon/go-bluebird.png')}
                    style={{}}
                  />
                </View>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 11,
                    marginTop: 6,
                  }}>
                  GO BLUEBIRD
                </Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 1,
                    borderColor: '#efefef',
                    borderRadius: 18,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 4,
                    },
                    shadowOpacity: 0.32,
                    shadowRadius: 5.46,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={require('./icon/go-send.png')} style={{}} />
                </View>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 11,
                    marginTop: 6,
                  }}>
                  GO SEND
                </Text>
              </View>
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                width: '100%',
                marginBottom: 18,
              }}>
              <View>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 1,
                    borderColor: '#efefef',
                    borderRadius: 18,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 4,
                    },
                    shadowOpacity: 0.32,
                    shadowRadius: 5.46,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={require('./icon/go-deals.png')} style={{}} />
                </View>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 11,
                    marginTop: 6,
                  }}>
                  GO DEALS
                </Text>
              </View>
              <View>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 1,
                    borderColor: '#efefef',
                    borderRadius: 18,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 4,
                    },
                    shadowOpacity: 0.32,
                    shadowRadius: 5.46,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={require('./icon/go-pulsa.png')} style={{}} />
                </View>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 11,
                    marginTop: 6,
                  }}>
                  GO PULSA
                </Text>
              </View>
              <View>
                <View
                  style={{
                    width: 58,
                    height: 58,

                    borderWidth: 1,
                    borderColor: '#efefef',
                    borderRadius: 18,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 4,
                    },
                    shadowOpacity: 0.32,
                    shadowRadius: 5.46,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={require('./icon/go-food.png')} style={{}} />
                </View>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 11,
                    marginTop: 6,
                  }}>
                  GO FOOD
                </Text>
              </View>
              <View>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 1,
                    borderColor: '#efefef',
                    borderRadius: 18,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 4,
                    },
                    shadowOpacity: 0.32,
                    shadowRadius: 5.46,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={require('./icon/go-more.png')} style={{}} />
                </View>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 11,
                    marginTop: 6,
                  }}>
                  MORE
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              height: 17,
              marginTop: 20,
              backgroundColor: '#f2f2f4',
            }}></View>

          {/* news */}
          <View
            style={{
              paddingTop: 10,
              borderBottomWidth: 1,
              borderColor: '#e8e9ed',
              marginHorizontal: 16,
              paddingVertical: 10,
            }}>
            <View style={{position: 'relative'}}>
              <Image
                source={require('./dummy/sepak-bola.jpg')}
                style={{height: 170, width: '100%', borderRadius: 8}}
              />
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  backgroundColor: 'black',
                  opacity: 0.2,
                  borderRadius: 6,
                }}></View>
              <Image
                source={require('./logo/white.png')}
                style={{
                  height: 18,
                  width: 60,
                  position: 'absolute',
                  top: 16,
                  left: 16,
                }}
              />
            </View>
            <View>
              <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: 6}}>
                Go News
              </Text>
              <Text style={{fontSize: 15}}>
                Irvan bachdim latihan dengan Timnas di Jakarta bersama Evan
                Dimas, dkk
              </Text>
            </View>
            <View
              style={{
                marginTop: 10,
                marginRight: 10,
              }}>
              <TouchableOpacity
                style={{
                  alignItems: 'flex-end',
                }}>
                <Text
                  style={{
                    backgroundColor: 'green',
                    color: 'white',
                    padding: 7,
                    borderRadius: 6,
                  }}>
                  Read
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* gofoodbanner */}
          <View
            style={{
              paddingTop: 10,
              borderBottomWidth: 1,
              borderColor: '#e8e9ed',
              marginHorizontal: 16,
              paddingVertical: 10,
            }}>
            <View style={{position: 'relative'}}>
              <Image
                source={require('./dummy/food-banner.jpg')}
                style={{
                  height: 170,
                  width: '100%',
                  borderRadius: 8,
                }}
              />
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  backgroundColor: 'black',
                  opacity: 0.2,
                  borderRadius: 6,
                }}></View>
              <Image
                source={require('./logo/go-food.png')}
                style={{
                  height: 18,
                  width: 80,
                  position: 'absolute',
                  top: 16,
                  left: 16,
                }}
              />
              <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingBottom: 16,
                }}>
                <View style={{paddingHorizontal: 16}}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      color: 'white',
                      marginBottom: 8,
                    }}>
                    Free GO-FOOD Voucher
                  </Text>
                  <Text style={{fontSize: 11, color: 'white'}}>
                    Quick, before they run!
                  </Text>
                </View>
                <View style={{flex: 1, paddingLeft: 12}}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: 'green',
                      borderRadius: 6,
                      padding: 10,
                      alignSelf: 'stretch',
                    }}>
                    <Text style={{color: 'white'}}>Get Voucher</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          {/* connect with fb */}
          <View
            style={{
              paddingVertical: 20,
              borderBottomWidth: 1,
              borderColor: '#e8e9ed',
              marginHorizontal: 16,
              paddingVertical: 10,
            }}>
            <View>
              <Image
                source={require('./logo/gojek.png')}
                style={{
                  height: 18,
                  width: 60,
                }}
              />
              <Text
                style={{
                  fontWeight: 'bold',
                  marginTop: 14,
                  fontSize: 16,
                  color: '#1c1c1c',
                }}>
                Complete Your Profile
              </Text>
              <View style={{flexDirection: 'row'}}>
                <View style={{marginTop: 20}}>
                  <Image source={require('./dummy/facebook-connect.png')} />
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'bold',
                      color: '#4A4A4A',
                    }}>
                    Connect with Facebook
                  </Text>
                  <Text>Login faster without verification code</Text>
                </View>
              </View>
              <View style={{flex: 1, paddingLeft: 12}}>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'green',
                    borderRadius: 6,
                    padding: 10,
                    alignSelf: 'flex-end',
                  }}>
                  <Text style={{color: 'white'}}>Get Voucher</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>

        {/* navigation */}
        <View
          style={{height: 55, backgroundColor: 'red', flexDirection: 'row'}}>
          <View
            style={{
              backgroundColor: 'white',
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={{width: 26, height: 26, backgroundColor: 'black'}}>
              <Image source={require('./icon/home.png')} />
            </View>
            <Text style={{fontSize: 10, color: '#545454', marginTop: 3}}>
              Home
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={{width: 26, height: 26, backgroundColor: 'black'}}>
              <Image source={require('./icon/order.png')} />
            </View>
            <Text style={{fontSize: 10, color: '#545454', marginTop: 3}}>
              Order
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={{width: 26, height: 26, backgroundColor: 'black'}}>
              <Image source={require('./icon/help.png')} />
            </View>
            <Text style={{fontSize: 10, color: '#545454', marginTop: 3}}>
              Help
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={{width: 26, height: 26, backgroundColor: 'black'}}>
              <Image source={require('./icon/inbox.png')} />
            </View>
            <Text style={{fontSize: 10, color: '#545454', marginTop: 3}}>
              Inbox
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
            }}>
            <View style={{width: 26, height: 26, backgroundColor: 'black'}}>
              <Image source={require('./icon/account.png')} />
            </View>
            <Text style={{fontSize: 10, color: '#545454', marginTop: 3}}>
              Account
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
