import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RootComponent from './NavigationScreens'
import DeviceInfo from 'react-native-device-info';
import { useDispatch, useSelector } from 'react-redux';
import NetInfo from "@react-native-community/netinfo";
import { NetworkConsumer } from 'react-native-offline';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const notchStatus = DeviceInfo.hasNotch();

const MiniOfflineSign = ({ show }) => (
  show ?
    <View style={styles.offlineContainer}>
      <Text style={styles.offlineText}>No Internet Connection</Text>
    </View> :
    <View style={{ height: 1 }} />
);

export default App = () => {

  return (
    <View style={{ flex: 1, marginTop: notchStatus === true ? 40 : 0 }}>
      <NetworkConsumer>
        {({ isConnected }) => (
          isConnected ?
            <MiniOfflineSign show={false} /> :
            <MiniOfflineSign show={true} />
        )}
      </NetworkConsumer>
      <RootComponent />
      {/* GLOBAL COMPONENTS ALSO CAN BE ADDED HERE TO BE USED WITH REDUX  */}
    </View>
  );
}

const styles = StyleSheet.create({
  offlineContainer: {
    marginTop: notchStatus === true ? 40 : 0,
    backgroundColor: '#b52424',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: wp('100%'),
  },
  offlineText: { color: '#fff' },
});

