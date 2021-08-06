import React from 'react';
import {View, Text} from 'react-native';
import MainFeature from '../../../componen/molekul/MainFeature';

const MainFeatureOrganism = () => {
  return (
    <View
      style={{
        marginHorizontal: 17,
        flexWrap: 'wrap',
        marginTop: 18,
      }}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          width: '100%',
        }}>
        <MainFeature
          img={require('../../../assets/icon/go-ride.png')}
          name="GO - RIDE"
        />
        <MainFeature
          img={require('../../..//assets/icon/go-car.png')}
          name="GO - CAR"
        />
        <MainFeature
          img={require('../../../assets/icon/go-bluebird.png')}
          name="GO - BLUEBIRD"
        />
        <MainFeature
          img={require('../../../assets/icon/go-send.png')}
          name="GO - SEND"
        />
      </View>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          width: '100%',
        }}>
        <MainFeature
          img={require('../../../assets/icon/go-deals.png')}
          name="GO - DEALS"
        />
        <MainFeature
          img={require('../../../assets/icon/go-pulsa.png')}
          name="GO - PULSA"
        />
        <MainFeature
          img={require('../../../assets/icon/go-food.png')}
          name="GO - FOOD"
        />
        <MainFeature
          img={require('../../../assets/icon/go-more.png')}
          name="MORE"
        />
      </View>
    </View>
  );
};

export default MainFeatureOrganism;
