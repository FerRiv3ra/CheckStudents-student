import React, {useContext} from 'react';
import {Modal, Pressable, Text, View} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import * as Animatable from 'react-native-animatable';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/Ionicons';

import globalStyles from '../theme/globalStyles';
import {useForm} from '../hooks/useForm';
// import StudentProfile from '../components/StudentProfile';
// import BottomBannerAd from '../components/BottomBannerAd';
import BackgroundGradient from '../components/BackgroundGradient';
import StyledButton from '../components/StyledButton';

import {ThemeContext} from '../context/ThemeContext';
import InputComponent from '../components/InputComponent';

export const MainScreen = () => {
  const {dni, password, onChange, reset} = useForm({
    dni: '',
    password: '',
  });

  // const {
  //   modalVisible,
  //   handleLogin,
  //   loading,
  //   passVisible,
  //   setModalVisible,
  //   setPassVisible,
  // } = useUserScreen();
  const {t} = useTranslation();
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const handlePress = () => {
    // handleLogin(dni, password, reset);
  };

  return (
    <BackgroundGradient type={2}>
      <Animatable.View
        animation="bounceInDown"
        delay={700}
        style={globalStyles.container}>
        <Icon name="school" />
      </Animatable.View>
      <Animatable.View
        animation="bounceInUp"
        delay={1000}
        style={{...globalStyles.formContainer, backgroundColor: colors.card}}>
        <KeyboardAwareScrollView>
          <Text style={{...globalStyles.txtWelcome, color: colors.text}}>
            {t('ui.welcome')}
          </Text>
          <View>
            <InputComponent
              title={t('form.enterDNI')}
              placeholder={t('form.dni')}
              value={dni}
              onChangeText={value => onChange(value, 'dni')}
            />
            <InputComponent
              title={t('form.password')}
              placeholder={t('form.password')}
              value={password}
              onChangeText={value => onChange(value, 'password')}
              password
              // passVisible={true}
              onPress={() => {}}
            />
            <View style={{marginTop: 5}}>
              <StyledButton
                text="login"
                animated
                size={14}
                // disabled={true}
                onPress={handlePress}
              />
              <View style={globalStyles.signUp}>
                <Text style={{color: colors.text}}>
                  {t('form.haveAccount')}
                </Text>
                <Pressable onPress={() => {}}>
                  <Text style={globalStyles.btnSignUp}>
                    {' '}
                    {t('form.create')}
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </Animatable.View>
      <Modal onRequestClose={() => null} animationType="slide" visible={false}>
        {/* <StudentProfile setModalVisible={setModalVisible} /> */}
      </Modal>
      {/* <BottomBannerAd /> */}
    </BackgroundGradient>
  );
};
