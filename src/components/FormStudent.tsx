import React from 'react';
import {Text, View} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import * as Animatable from 'react-native-animatable';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/Ionicons';

import globalStyles from '../theme/globalStyles';
import {widthScale} from '../helpers/scale';
import {BackgroundGradient, StyledButton, InputComponent} from './';
import {useFormStudent} from '../hooks';

export const FormStudent = () => {
  const {
    colors,
    dividerColor,
    handlePress,
    id,
    name,
    onChange,
    surname,
    toggleModal,
  } = useFormStudent();
  const {t} = useTranslation();

  return (
    <BackgroundGradient type={2}>
      <Animatable.View
        animation="bounceInDown"
        delay={700}
        style={globalStyles.container}>
        <Icon
          name="person-add"
          size={widthScale(50)}
          color={dividerColor}
          style={{alignSelf: 'center'}}
        />
      </Animatable.View>
      <Animatable.View
        animation="bounceInUp"
        delay={1000}
        style={{...globalStyles.formContainer, backgroundColor: colors.card}}>
        <KeyboardAwareScrollView>
          <Text style={{...globalStyles.txtWelcome, color: colors.text}}>
            {t('form.register')}
          </Text>
          <View>
            <InputComponent
              title={t('form.enterDNI')}
              placeholder={t('form.dni')}
              value={id}
              onChangeText={value => onChange(value, 'id')}
            />
            <InputComponent
              title={t('form.enterName')}
              placeholder={t('form.enterName')}
              value={name}
              onChangeText={value => onChange(value, 'name')}
            />
            <InputComponent
              title={t('form.enterSurname')}
              placeholder={t('form.enterSurname')}
              value={surname}
              onChangeText={value => onChange(value, 'surname')}
            />
            <View style={{marginTop: 5}}>
              <StyledButton
                text="register"
                icon="log-in"
                animated
                disabled={false}
                onPress={handlePress}
              />

              <StyledButton
                text="goHome"
                icon="home"
                primary={false}
                style={{marginTop: 10, marginBottom: 70}}
                onPress={toggleModal}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </Animatable.View>
    </BackgroundGradient>
  );
};
