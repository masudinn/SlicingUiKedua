import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const Info = () => {
  return (
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
          source={require('../../../assets/logo/gojek.png')}
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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{marginTop: 20, marginRight: 16}}>
            <Image
              source={require('../../..//assets/dummy/facebook-connect.png')}
            />
          </View>
          <View style={{flex: 1, width: '70%'}}>
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
        <View style={{flex: 1, paddingLeft: 12, marginBottom: 16}}>
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
  );
};

export default Info;
