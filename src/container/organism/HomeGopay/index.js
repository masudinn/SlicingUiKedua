import React from 'react';
import {View, Text, Image} from 'react-native';
import GopayFeature from '../../../componen/molekul/GopayFeature';

const HomeGopay = () => {
  return (
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
        <Image source={require('../../../assets/icon/gopay.png')} />
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
        <GopayFeature
          name="Pay"
          image={require('../../../assets/icon/pay.png')}
        />
        <GopayFeature
          name="Nearby"
          image={require('../../../assets/icon/nearby.png')}
        />
        <GopayFeature
          name="Top Up"
          image={require('../../../assets/icon/topup.png')}
        />
        <GopayFeature
          name="More"
          image={require('../../../assets/icon/more.png')}
        />
      </View>
    </View>
  );
};

export default HomeGopay;
