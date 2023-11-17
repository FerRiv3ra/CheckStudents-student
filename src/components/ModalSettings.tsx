import React, {useContext} from 'react';
import {
  Pressable,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useTranslation} from 'react-i18next';

import SegmentedControl from './SegmentedControl';
import {modalStyles} from '../theme/modalStyles';
import {ThemeContext} from '../context/ThemeContext';
import {CustomSwitch} from './CustomSwitch';
import Icon from 'react-native-vector-icons/Ionicons';
import {AppContext} from '../context/AppContext';

interface Props {
  setModalVisible: (modalVisible: boolean) => void;
}

const ModalSettings = ({setModalVisible}: Props) => {
  const {t, i18n} = useTranslation();
  const {
    theme: {colors, dark},
    setTheme,
    autoTheme,
    setAutoTheme,
    actualTheme,
  } = useContext(ThemeContext);
  const {removeUsers} = useContext(AppContext);

  const setCurrentLang = async (lang: string) => {
    await AsyncStorage.setItem('lang', lang);

    i18n.changeLanguage(lang);
  };

  const handleClose = () => {
    setModalVisible(false);
  };

  return (
    <View
      style={{
        ...modalStyles.centeredView,
        backgroundColor: dark ? 'rgba(45, 212, 191, 0.3)' : 'rgba(0,0,0,0.5)',
      }}>
      <View
        style={{
          ...modalStyles.modalView,
          shadowColor: colors.text,
          backgroundColor: colors.card,
        }}>
        <Text
          style={{
            ...modalStyles.modalText,
            marginBottom: 15,
            color: colors.text,
          }}>
          {t('settings.chooseLang')}
        </Text>
        <SegmentedControl
          values={[
            {key: `🇪🇸 ${t('settings.spanish')}`, value: 'ES'},
            {key: `🇬🇧 ${t('settings.english')}`, value: 'EN'},
          ]}
          onChange={setCurrentLang}
          selectedIndex={i18n.language === 'ES' ? 0 : 1}
          backgroundColor={colors.primary}
          selectedTextColor={colors.primary}
          textColor={dark ? colors.card : colors.text}
          tintColor={colors.card}
        />
        <Text style={{...modalStyles.modalText, color: colors.text}}>
          {t('settings.theme')}
        </Text>

        <View style={styles.switch}>
          <Text style={{color: colors.primary, fontWeight: '500'}}>
            {t('settings.systemTheme')}
          </Text>
          <CustomSwitch
            isOn={autoTheme}
            onChange={setAutoTheme}
            backgrounColor={colors.primary}
            border={dark}
          />
        </View>
        {!autoTheme && (
          <SegmentedControl
            values={[
              {key: `😎 ${t('settings.light')}`, value: 'light'},
              {key: `🧛‍♂️ ${t('settings.dark')}`, value: 'dark'},
            ]}
            onChange={setTheme}
            selectedIndex={actualTheme === 'light' ? 0 : 1}
            backgroundColor={colors.primary}
            selectedTextColor={colors.primary}
            textColor={dark ? colors.card : colors.text}
            tintColor={colors.card}
          />
        )}
        <TouchableOpacity
          activeOpacity={0.6}
          style={{...styles.deleteBtn}}
          onPress={removeUsers}>
          <Icon name="trash" size={14} color={colors.text} />
          <Text style={{...styles.deleteText, color: colors.text}}>
            {' '}
            {t('settings.deleteUsers')}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center'}}>
        <Pressable
          style={{...modalStyles.button, backgroundColor: colors.card}}
          onPress={handleClose}>
          <Icon name="close" size={16} style={{alignSelf: 'center'}} />
          <Text style={{color: colors.text}}>{t('ui.close')}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ModalSettings;

const styles = StyleSheet.create({
  switch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deleteBtn: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    paddingVertical: 10,
    backgroundColor: '#FF7D63',
    borderRadius: 10,
  },
  deleteText: {
    fontWeight: '600',
    fontSize: 13,
  },
});
