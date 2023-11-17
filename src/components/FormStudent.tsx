import React, {useContext} from 'react';
import {Text, View} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import * as Animatable from 'react-native-animatable';
import {useTranslation} from 'react-i18next';

import globalStyles from '../theme/globalStyles';
import {widthScale} from '../helpers/scale';
import {useForm} from '../hooks/useForm';
import BackgroundGradient from '../components/BackgroundGradient';
import StyledButton from '../components/StyledButton';

import {ThemeContext} from '../context/ThemeContext';
import InputComponent from '../components/InputComponent';
import Icon from 'react-native-vector-icons/Ionicons';
import {AppContext} from '../context/AppContext';
import {User} from '../context/appReducer';

export const FormStudent = () => {
  const {name, id, surname, onChange, reset} = useForm({
    name: '',
    id: '',
    surname: '',
  });
  const {t} = useTranslation();
  const {
    theme: {colors, dividerColor},
  } = useContext(ThemeContext);
  const {toggleModal, addUser} = useContext(AppContext);

  const handlePress = async () => {
    const user: User = {
      id,
      name,
      surname,
    };

    const isOk = await addUser(user);

    if (isOk) {
      reset();
      toggleModal();
    }
  };

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
            {t('students.register')}
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
                text="signUp"
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
