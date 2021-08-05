import React from 'react';
import {View, Text, Image} from 'react-native';

const MainFeature = props => {
  return (
    <View style={{alignItems: 'center', marginBottom: 18}}>
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
        <Image source={props.img} />
      </View>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 11,
          marginTop: 6,
        }}>
        {props.name}
      </Text>
    </View>
  );
};

export default MainFeature;
