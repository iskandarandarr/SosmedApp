import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IcNext, IcReward} from '../../../assets';

const Index = () => {
  return (
    <View style={styles.container}>
      <IcReward />
      <View style={styles.content}>
        <Text style={styles.title}>Total Poin Anda</Text>
        <View style={styles.subContent}>
          <Text style={styles.subTitle}>230</Text>
          <Text style={styles.klaim}>Klaim Reward</Text>
        </View>
      </View>
      <IcNext />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E4E4E4',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 7,
  },
  content: {
    flex: 1,
    paddingLeft: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
  },
  subContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#EA6C00',
    marginRight: 3,
  },
  klaim: {
    fontSize: 12,
    color: '#747474',
  },
});
