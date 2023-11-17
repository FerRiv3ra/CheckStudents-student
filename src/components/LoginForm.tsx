import {View, Text, TouchableOpacity, Modal} from 'react-native';
import React, {useContext} from 'react';

import {useTranslation} from 'react-i18next';

import InputComponent from './InputComponent';
import {useForm} from '../hooks/useForm';
import globalStyles from '../theme/globalStyles';
import {ThemeContext} from '../context/ThemeContext';
import StyledButton from './StyledButton';
import {FormStudent} from './FormStudent';
import {AppContext} from '../context/AppContext';

export const LoginForm = () => {
  const {dni, onChange, reset} = useForm({
    dni: '',
  });
  const {t} = useTranslation();
  const {showModalAdd, toggleModal, users, setActiveUser} =
    useContext(AppContext);
  const {
    theme: {colors},
  } = useContext(ThemeContext);

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
