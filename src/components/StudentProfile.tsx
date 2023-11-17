import React, {useContext, useState} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

import QRCode from 'react-native-qrcode-svg';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import * as Animatable from 'react-native-animatable';
import {useTranslation} from 'react-i18next';

import {heigthPercent, widthPercent} from '../helpers/scale';
import BackgroundGradient from './BackgroundGradient';
import logoFromFile from '../assets/CheckStudentsRound.png';
import {ThemeContext} from '../context/ThemeContext';
import {StudentInformation} from './StudentInformation';
import {useStudentProfile} from '../hooks/useStudentProfile';
import {useFormatDate} from '../hooks/useFormatDate';

export const StudentProfile = () => {
  const {t, i18n} = useTranslation();
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const {time, today, activeUser} = useStudentProfile();
  const {format} = useFormatDate();

  const formatedDate = format(today, i18n.language as 'es');

  const user = JSON.stringify({
    ...activeUser,
    today: formatedDate,
  });

  return (
    <BackgroundGradient type={1}>
      <SafeAreaView>
        <KeyboardAwareScrollView>
          <Animatable.Text
            animation="zoomInDown"
            delay={700}
            style={{
              ...styles.countDown,
              color: colors.text,
              textAlign: 'center',
            }}>
            {t('students.msgClose')}{' '}
            <Text style={{...styles.time, color: colors.text}}>{time}</Text>{' '}
            {t('students.seconds')}
          </Animatable.Text>

          <Animatable.View animation="zoomIn" delay={500} style={styles.qrCode}>
            <QRCode
              color={colors.text}
              backgroundColor="transparent"
              value={user}
              logo={logoFromFile}
              logoSize={heigthPercent(7)}
              size={heigthPercent(30)}
            />
          </Animatable.View>
          <StudentInformation user={activeUser!} date={formatedDate} />
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </BackgroundGradient>
  );
};

const styles = StyleSheet.create({
  qrCode: {
    marginVertical: '3%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    height: heigthPercent(32),
    width: widthPercent(95),
  },
  countDown: {
    marginTop: '3%',
    fontSize: 16,
  },
  time: {
    fontWeight: '700',
  },
});
