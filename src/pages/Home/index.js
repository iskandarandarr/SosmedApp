import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  IcAll,
  IcArticle,
  IcCamera,
  IcIdea,
  IcPetisi,
  IcPoling,
  ImgProfile,
} from '../../assets';
import {
  BoxMenu,
  ButtonPost,
  Gap,
  Header,
  Modal,
  PostingList,
  ProfileCard,
  RewardList,
} from '../../components';

const Index = ({navigation}) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <View style={styles.page}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.pageContainer}>
        <Header
          profilPress={() => navigation.navigate('ProfileDetail')}
          title="Profile"
          profile
          share
        />
        <View style={styles.container}>
          <ImageBackground source={ImgProfile} style={styles.imgBackground}>
            <TouchableOpacity
              style={styles.camera}
              onPress={() => setOpenModal(true)}>
              <IcCamera />
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <View style={styles.content}>
          <View style={styles.profile}>
            <ProfileCard
              pengikutPress={() => navigation.navigate('Pengikut')}
              mengikutiPress={() => navigation.navigate('Mengikuti')}
            />
          </View>
          <Gap height={17} />
          <RewardList />
          <Gap height={15} />
          <Text style={styles.notif}>Lengkapi Profil Anda 2/3</Text>
          <View style={styles.lineNotif}>
            <View style={styles.line} />
          </View>
          <Gap height={15} />
          <View style={styles.menuContainer}>
            <BoxMenu color="#05B1A1" title="Semua" icon={<IcAll />} />
            <BoxMenu color="white" title="Semua" icon={<IcIdea />} />
            <BoxMenu color="white" title="Semua" icon={<IcArticle />} />
            <BoxMenu color="white" title="Semua" icon={<IcPoling />} />
            <BoxMenu color="white" title="Semua" icon={<IcPetisi />} />
          </View>
          <Gap height={19} />
          <PostingList />
          <PostingList />
        </View>
      </ScrollView>
      <ButtonPost />
      <Modal
        visible={openModal}
        setState={() => setOpenModal(false)}
        title="Info Form Komisi Diskon"
      />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  pageContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  imgBackground: {
    width: '100%',
    height: 300,
  },
  container: {
    marginHorizontal: -7,
  },
  content: {
    backgroundColor: '#ffffff',
    flex: 1,
    marginTop: -90,
  },
  camera: {
    backgroundColor: '#05B1A1',
    width: 36,
    height: 36,
    position: 'absolute',
    right: 20,
    top: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 36 / 2,
  },
  profile: {
    marginTop: -30,
  },
  notif: {
    marginLeft: 19,
    fontSize: 14,
    color: '#797979',
    marginBottom: 6,
  },
  lineNotif: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#05B1A1',
    marginHorizontal: 20,
  },
  line: {
    backgroundColor: '#EA6C00',
    paddingVertical: 2,
    width: '75%',
  },
  menuContainer: {
    paddingHorizontal: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
