import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Index = ({color = '#ffffff', title, icon, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.content(color)}>{icon}</View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Index;

const styles = StyleSheet.create({
  content: color => ({
    backgroundColor: color,
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#9B9B9B',
  }),
  title: {
    color: '#05B1A1',
    fontSize: 14,
    marginTop: 3,
  },
});
