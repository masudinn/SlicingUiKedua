import React from 'react';
import {View, Text, Image} from 'react-native';

const ItemProduk = props => {
  return (
    <View
      style={{
        marginLeft: 16,
        marginBottom: 20,
        flexDirection: 'row',
      }}>
      <View
        style={{
          width: 150,
          height: 150,
          marginRight: 10,
        }}>
        <Image
          source={props.image}
          style={{
            width: undefined,
            height: undefined,
            resizeMode: 'cover',
            flex: 1,
            borderRadius: 8,
          }}
        />
        <Text style={{fontSize: 15, fontWeight: '900'}}>{props.nama}</Text>
      </View>
    </View>
  );
};

export default ItemProduk;
