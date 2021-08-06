import React, {Component} from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import ItemProduk from '../../../componen/molekul/ItemProduk';

export default class ScrollableProduk extends Component {
  render() {
    return (
      <View>
        <View style={{marginLeft: 16, marginTop: 16}}>
          <Image
            source={require('../../../assets/logo/go-food.png')}
            style={{
              height: 15,
              width: 70,
              marginLeft: -4,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              marginTop: 12,
              marginBottom: 16,
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 17,
                color: '#1c1c1c',
              }}>
              Nearby Restaurant
            </Text>
            <Text
              style={{
                color: 'green',
                fontSize: 15,
                fontWeight: 'bold',
                marginRight: 16,
              }}>
              See All
            </Text>
          </View>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <ItemProduk
            image={require('../../../assets/dummy/go-food-banka.jpg')}
            nama={'Makanan Banka'}
          />
          <ItemProduk
            image={require('../../../assets/dummy/go-food-banka.jpg')}
            nama={'Makanan Banka'}
          />
          <ItemProduk
            image={require('../../../assets/dummy/go-food-banka.jpg')}
            nama={'Makanan Banka'}
          />
          <ItemProduk
            image={require('../../../assets/dummy/go-food-banka.jpg')}
            nama={'Makanan Banka'}
          />
          <ItemProduk
            image={require('../../../assets/dummy/go-food-banka.jpg')}
            nama={'Makanan Banka'}
          />
        </ScrollView>
      </View>
    );
  }
}
