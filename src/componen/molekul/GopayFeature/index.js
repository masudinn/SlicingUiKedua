import React from 'react';
import {View, Text, Image} from 'react-native';

const GopayFeature = props => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
      }}>
      <Image source={props.image} />
      <Text
        style={{
          color: 'white',
          fontSize: 13,
          fontWeight: 'bold',
          marginTop: 5,
        }}>
        {props.name}
      </Text>
    </View>
  );
};

export default GopayFeature;
