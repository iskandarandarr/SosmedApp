import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from '../../atoms';

const Index = ({title, image, btnTitle, onPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.imgContainer}>
          <Image source={image} style={styles.img} />
        </View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <Button title={btnTitle} onPress={onPress} />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginHorizontal: 19,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 7,
    paddingVertical: 6,
    borderRadius: 30,
    marginBottom: 5,
  },
  img: {
    width: 26,
    height: 26,
    borderRadius: 26 / 2,
  },
  imgContainer: {
    width: 28,
    height: 28,
    borderWidth: 1,
    borderColor: '#05B1A1',
    borderRadius: 30 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginLeft: 17,
    fontSize: 15,
    color: '#000000',
  },
});
