import {Text, StyleSheet} from 'react-native';
import React from 'react';

import * as Animatable from 'react-native-animatable';
import {useTranslation} from 'react-i18next';

import {useThemeContext} from '../context';
import {User} from '../types/appContextProps';

type Props = {
  user: User;
  date: string;
};

export const StudentInformation = ({user, date}: Props) => {
  const {
    theme: {colors},
  } = useThemeContext();
  const {t} = useTranslation();

  return (
    <Animatable.View animation="zoomInDown" delay={600} style={styles.info}>
      <Text style={{...styles.title, color: colors.text}}>
        {t('form.dni')}: <Text style={styles.userInfo}>{user.id}</Text>
      </Text>
      <Text style={{...styles.title, color: colors.text}}>
        {t('form.name')}: <Text style={styles.userInfo}>{user.name}</Text>
      </Text>
      <Text style={{...styles.title, color: colors.text}}>
        {t('form.surname')}: <Text style={styles.userInfo}>{user.surname}</Text>
      </Text>
      <Text style={{...styles.userInfo, color: colors.text}}>{date}</Text>
      <Text style={{...styles.userInfo, color: colors.text}}>
        {t('students.qrNotice')}
      </Text>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  info: {
    marginHorizontal: '3%',
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
  },
  userInfo: {
    fontWeight: '700',
    textAlign: 'center',
  },
});
