import React, {Component} from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import SearchFeature from './src/componen/molekul/SearchFeature';
import News from './src/componen/molekul/News';
import Info from './src/componen/molekul/Info';
import Banner from './src/componen/molekul/Banner';
import ScrollableProduk from './src/container/organism/ScrollableProduk';
import NavigationBar from './src/container/organism/NavigationBar';
import MainFeatureOrganism from './src/container/organism/MainFeatureOrganism';
import HomeGopay from './src/container/organism/HomeGopay';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
          {/* search bar */}
          <SearchFeature />
          {/* gopay */}
          <HomeGopay />
          {/* main feature */}
          <MainFeatureOrganism />
          <View
            style={{
              height: 17,
              marginTop: 20,
              backgroundColor: '#f2f2f4',
            }}></View>

          {/* news */}
          <News />

          {/* gofoodbanner */}
          <Banner />
          {/* connect with fb */}
          <Info />

          {/* ScrollableProduk */}
          <ScrollableProduk />
        </ScrollView>

        {/* navigation */}

        <NavigationBar />
      </View>
    );
  }
}
