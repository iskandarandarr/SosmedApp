import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  IcBackBlack,
  IcEducation,
  IcHoby,
  IcJob,
  IcMap,
  IcWeb,
  ImgBackground,
} from '../../assets';
import {ProfileList} from '../../components';

const Index = ({navigation}) => {
  return (
    <ImageBackground source={ImgBackground} style={styles.page}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
        <IcBackBlack />
      </TouchableOpacity>
      <ProfileList
        icon={<IcJob />}
        title="Pekerjaan"
        subTitle="Graphic Design"
        label="Opinia"
        subLable="(2008-Sekarang)"
      />
      <ProfileList
        icon={<IcEducation />}
        title="Pendidikan"
        subTitle="Design Engineering"
        label="Politeknik Manufaktur negeri Bandung"
        subLable="(2011-2013)"
      />
      <ProfileList
        icon={<IcMap />}
        title="Tempat Tinggal"
        subTitle="Kota Bekasi"
        label="(2011-2013)"
      />
      <ProfileList icon={<IcHoby />} title="Hobi" subTitle="Musik" />
      <ProfileList
        icon={<IcWeb />}
        title="Website:"
        subTitle="www.gdsagdsagdsa.com"
      />
    </ImageBackground>
  );
};

export default Index;

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 20,
    paddingTop: 15,
    flex: 1,
  },
  back: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 21,
  },
});
