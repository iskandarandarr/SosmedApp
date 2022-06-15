import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {IcStar, ImgProfile} from '../../../assets';

const index = ({mengikutiPress, pengikutPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.profilContent}>
        <View style={styles.imgContainer}>
          <Image source={ImgProfile} style={styles.img} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.text}>Skylar Vaccaro</Text>
          <View style={styles.starContainer}>
            <IcStar />
            <IcStar />
            <IcStar />
            <IcStar />
            <IcStar />
          </View>
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Penulis | Politisi</Text>
        <Text style={styles.subTitle}>
          "Hidup itu sederhana, kita yang membuatnya sulit."
        </Text>
      </View>
      <View style={styles.content}>
        <TouchableOpacity style={styles.boxContainer}>
          <Text style={styles.titleBox}>Postingan</Text>
          <Text style={styles.subTitleBox}>26</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boxContainer} onPress={mengikutiPress}>
          <Text style={styles.titleBox}>Mengikuti</Text>
          <Text style={styles.subTitleBox}>30</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boxContainer} onPress={pengikutPress}>
          <Text style={styles.titleBox}>Pengikut</Text>
          <Text style={styles.subTitleBox}>29</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    marginHorizontal: 20,
    borderRadius: 7,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  content: {
    backgroundColor: '#05B1A1',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
  },
  img: {
    width: 77,
    height: 77,
    borderRadius: 77 / 2,
  },
  imgContainer: {
    marginTop: -40,
    marginLeft: 17,
  },
  starContainer: {
    flexDirection: 'row',
  },
  profilContent: {
    flexDirection: 'row',
  },
  titleContainer: {
    marginLeft: 10,
    marginTop: 17,
    marginBottom: 24,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 17,
  },
  title: {
    color: '#000000',
    fontSize: 14,
  },
  subTitle: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '600',
  },
  boxContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  titleBox: {
    fontSize: 14,
    color: '#ffffff',
  },
  subTitleBox: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
