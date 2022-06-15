import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  IcArrow,
  IcComment,
  IcLamp,
  IcShareGrey,
  IcSmile,
  IcViewer,
  ImgProfile,
} from '../../../assets';

const Index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.imgContainer}>
          <Image source={ImgProfile} style={styles.img} />
        </View>
        <View>
          <Text style={styles.title}>Julia Mareta</Text>
          <View style={styles.timeContent}>
            <Text style={styles.subTitle}>19 menit Lalu | </Text>
            <Text style={styles.idea}>Idea</Text>
          </View>
        </View>
      </View>
      <Text style={styles.textContent}>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur
      </Text>
      <View style={styles.iconContent}>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.iconValue}>
            <IcLamp />
            <Text style={styles.textValue}>32</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconValue}>
            <IcSmile />
            <Text style={styles.textValue}>32</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconValue}>
            <IcComment />
            <Text style={styles.textValue}>32</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconValue}>
            <IcViewer />
            <Text style={styles.textValue}>32</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconValue}>
            <IcArrow />
            <Text style={styles.textValue}>32</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <IcShareGrey />
        </TouchableOpacity>
      </View>
      <View style={styles.line} />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  img: {
    width: 34,
    height: 34,
    borderRadius: 34 / 2,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 7,
  },
  timeContent: {
    flexDirection: 'row',
  },
  imgContainer: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#05B1A1',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginRight: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  subTitle: {
    color: '#797979',
    fontSize: 12,
  },
  idea: {
    fontSize: 12,
    color: '#05B1A1',
  },
  textContent: {
    color: '#000000',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  iconValue: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  textValue: {
    color: '#05B1A1',
    fontSize: 14,
  },
  iconContent: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    borderWidth: 1,
    borderColor: '#797979',
    marginVertical: 12,
  },
});
