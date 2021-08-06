import React from 'react';
import {View, Text} from 'react-native';
import BottomNavigation from '../../../componen/molekul/BottomNavigation';

const NavigationBar = () => {
  return (
    <View
      style={{
        height: 54,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: '#f2f2f4',
      }}>
      <BottomNavigation
        name="Home"
        icon={require('../../../assets/icon/home-active.png')}
        active={true}
      />
      <BottomNavigation
        name="Orders"
        icon={require('../../../assets/icon/order.png')}
      />
      <BottomNavigation
        name="Help"
        icon={require('../../../assets/icon/help.png')}
      />
      <BottomNavigation
        name="Inbox"
        icon={require('../../../assets/icon/inbox.png')}
      />
      <BottomNavigation
        name="Account"
        icon={require('../../../assets/icon/account.png')}
      />
    </View>
  );
};

export default NavigationBar;
