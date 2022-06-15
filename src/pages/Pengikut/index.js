import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {FlatList, Gap, Header} from '../../components';
import {ImgBackground, ImgProfile} from '../../assets';

const Index = ({navigation}) => {
  const [action1, setAction1] = useState('Ikuti');
  const [action2, setAction2] = useState('Ikuti');
  const [action3, setAction3] = useState('Ikuti');
  return (
    <View style={styles.page}>
      <Header title="Pengikut" onPress={() => navigation.goBack()} />
      <ImageBackground source={ImgBackground} style={styles.container}>
        <Gap height={20} />
        <FlatList
          title="Julia Mareta"
          image={ImgProfile}
          btnTitle={action1}
          onPress={() => setAction1(action1 == 'Ikuti' ? 'Mengikuti' : 'Ikuti')}
        />
        <FlatList
          title="Julia Mareta"
          image={ImgProfile}
          btnTitle={action2}
          onPress={() => setAction2(action2 == 'Ikuti' ? 'Mengikuti' : 'Ikuti')}
        />
        <FlatList
          title="Julia Mareta"
          image={ImgProfile}
          btnTitle={action3}
          onPress={() => setAction3(action3 == 'Ikuti' ? 'Mengikuti' : 'Ikuti')}
        />
      </ImageBackground>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});
