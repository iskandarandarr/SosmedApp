import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Index = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.btn}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#46B29C',
    width: 106,
    height: 30,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    color: '#ffffff',
    fontSize: 15,
  },
});
