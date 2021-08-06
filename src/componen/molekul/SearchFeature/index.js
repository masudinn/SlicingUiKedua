import React from 'react';
import {View, Text, TextInput, Image} from 'react-native';

const index = () => {
  return (
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
        source={require('../../../assets/icon/search.png')}
        style={{position: 'absolute', top: 5, left: 10}}
      />
      <Image
        source={require('../../../assets/icon/promo.png')}
        style={{
          width: 35,
          height: 35,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />
    </View>
  );
};

export default index;
