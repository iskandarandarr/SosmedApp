import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IcCameraWhite, IcGaleryWhite, IcNext} from '../../../assets';
import {Gap} from '../../atoms';

function Index({visible, setState, subTitle, title}) {
  const PopUpModal = ({visible, children}) => {
    const [showModal, setShowModal] = useState(visible);
    const scaleValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      toggleModal();
    }, [visible]);

    const toggleModal = () => {
      if (visible) {
        setShowModal(true);
        Animated.spring(scaleValue, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      } else {
        setTimeout(() => setShowModal(false), 200);
        Animated.timing(scaleValue, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    };
    return (
      <Modal transparent visible={showModal}>
        <View style={styles.modalBackGround}>
          <Animated.View
            style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
            {children}
          </Animated.View>
        </View>
      </Modal>
    );
  };

  return (
    <PopUpModal visible={visible}>
      <View style={styles.content}>
        <TouchableOpacity style={styles.iconContent}>
          <IcCameraWhite />
          <Text style={styles.title}>Kamera</Text>
        </TouchableOpacity>
        <Gap width={76} />
        <TouchableOpacity style={styles.iconContent}>
          <IcGaleryWhite />
          <Text style={styles.title}>Galeri</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.line} />
      <Text style={styles.label}>HAPUS GAMBAR BANNER</Text>
      <TouchableOpacity
        style={styles.cancleContainer}
        activeOpacity={0.7}
        onPress={setState}>
        <Text style={styles.cancle}>BATAL</Text>
      </TouchableOpacity>
    </PopUpModal>
  );
}

const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#05B1A1',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  iconContent: {
    alignItems: 'center',
  },
  line: {
    borderWidth: 0.3,
    borderColor: '#ffffff',
    marginVertical: 13,
  },
  title: {
    color: '#ffffff',
    marginTop: 11,
    fontSize: 13,
  },
  label: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
  },
  cancleContainer: {
    backgroundColor: '#ffffff',
    marginHorizontal: -20,
    paddingBottom: 20,
    marginBottom: -30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancle: {
    color: '#46B29C',
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 20,
  },
});

export default Index;
