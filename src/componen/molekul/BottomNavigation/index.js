import React from 'react';
import {View, Text, Image} from 'react-native';

const BottomNavigation = props => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image source={props.icon} style={{width: 26, height: 26}} />
      <Text
        style={{
          fontSize: 10,
          color: props.active ? 'green' : 'grey',
          marginTop: 3,
        }}>
        {props.name}
      </Text>
    </View>
  );
};

export default BottomNavigation;
