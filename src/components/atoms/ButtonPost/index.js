import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IcPen} from '../../../assets';

const Index = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <IcPen />
    </TouchableOpacity>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    position: 'absolute',
    backgroundColor: '#05B1A1',
    bottom: 10,
    right: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
});
