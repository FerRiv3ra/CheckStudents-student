import {View, Text, TouchableOpacity, Modal} from 'react-native';
import React from 'react';

import {useTranslation} from 'react-i18next';

import {InputComponent, StyledButton, FormStudent} from './';
import {useForm} from '../hooks';
import globalStyles from '../theme/globalStyles';
import {useThemeContext, useAppContext} from '../context';

export const LoginForm = () => {
  const {dni, onChange, reset} = useForm({
    dni: '',
  });
  const {t} = useTranslation();
  const {showModalAdd, toggleModal, users, setActiveUser} = useAppContext();
  const {
    theme: {colors},
  } = useThemeContext();

  const handlePress = () => {
    const isOk = setActiveUser(dni);

    if (isOk) {
      reset();
    }
  };

  return (
    <View>
      <Text style={{...globalStyles.txtWelcome, color: colors.text}}>
        {t('ui.welcome')}
      </Text>
      <InputComponent
        title={t('form.enterDNI')}
        placeholder={t('form.dni')}
        value={dni}
        onChangeText={value => onChange(value, 'dni')}
      />
      <View style={{marginTop: 5}}>
        <StyledButton
          text="login"
          icon="log-in"
          animated
          size={16}
          onPress={handlePress}
        />
        <View style={globalStyles.signUp}>
          <Text style={{color: colors.text}}>
            {t('form.registeredUsers')}
            {` ${users.length}`}
          </Text>
          <TouchableOpacity onPress={toggleModal}>
            <Text style={globalStyles.btnSignUp}> {t('ui.add')}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal visible={showModalAdd} animationType="fade">
        <FormStudent />
      </Modal>
    </View>
  );
};
