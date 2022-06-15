import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {IcBack, IcProfile, IcShare} from '../../../assets';

const Index = ({profilPress, onPress, sharePress, share, profile, title}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.icon} onPress={onPress}>
        <IcBack />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.content}>
        <TouchableOpacity style={styles.icon} onPress={sharePress}>
          {share && <IcShare />}
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon} onPress={profilPress}>
          {profile && <IcProfile />}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#06B1A1',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
  },
  icon: {
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    color: '#FFFFFF',
  },
});
