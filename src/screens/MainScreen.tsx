import React, {useContext} from 'react';
import {Modal} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons';

import globalStyles from '../theme/globalStyles';
// import BottomBannerAd from '../components/BottomBannerAd';
import BackgroundGradient from '../components/BackgroundGradient';

import {ThemeContext} from '../context/ThemeContext';
import {widthScale} from '../helpers/scale';
import {LoginForm} from '../components/LoginForm';
import {StudentProfile} from '../components/StudentProfile';
import SettingsButton from '../components/SettingsButton';
import {AppContext} from '../context/AppContext';

export const MainScreen = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const {showProfile} = useContext(AppContext);

  return (
    <BackgroundGradient type={2}>
      <SettingsButton />
      <Animatable.View
        animation="bounceInDown"
        delay={700}
        style={{marginBottom: 20}}>
        <Icon
          name="school"
          size={widthScale(80)}
          color="#FFF"
          style={{alignSelf: 'center'}}
        />
      </Animatable.View>
      <Animatable.View
        animation="bounceInUp"
        delay={1000}
        style={{...globalStyles.formContainer, backgroundColor: colors.card}}>
        <KeyboardAwareScrollView>
          <LoginForm />
        </KeyboardAwareScrollView>
      </Animatable.View>
      <Modal
        onRequestClose={() => null}
        animationType="slide"
        visible={showProfile}>
        <StudentProfile />
      </Modal>
      {/* <BottomBannerAd /> */}
    </BackgroundGradient>
  );
};
