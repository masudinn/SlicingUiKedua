import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const News = () => {
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
          source={require('../../../assets/dummy/sepak-bola.jpg')}
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
          source={require('../../../assets/logo/white.png')}
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
          Irvan bachdim latihan dengan Timnas di Jakarta bersama Evan Dimas, dkk
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
  );
};

export default News;
