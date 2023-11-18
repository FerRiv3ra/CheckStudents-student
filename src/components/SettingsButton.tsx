import {Modal, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

import {widthScale} from '../helpers/scale';
import {ModalSettings} from './';
import {useThemeContext} from '../context';

export const SettingsButton = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const {top} = useSafeAreaInsets();
  const {
    theme: {dividerColor},
  } = useThemeContext();

  return (
    <View style={{flexDirection: 'row'}}>
      <View style={{flex: 1}} />
      <TouchableOpacity
        style={{...styles.btn, paddingTop: top + 10}}
        onPress={() => setModalVisible(true)}
        activeOpacity={0.6}>
        <Icon name="cog" size={widthScale(35)} color={dividerColor} />
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType="fade" transparent>
        <ModalSettings setModalVisible={setModalVisible} />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    padding: 10,
  },
});
