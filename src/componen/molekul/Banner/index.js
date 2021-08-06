import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const Banner = () => {
  return (
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
          source={require('../../../assets/dummy/food-banner.jpg')}
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
          source={require('../../../assets/logo/go-food.png')}
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
  );
};

export default Banner;
