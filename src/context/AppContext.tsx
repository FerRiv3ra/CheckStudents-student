import {createContext, useContext, useEffect, useReducer} from 'react';
import {Alert} from 'react-native';

import {useTranslation} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {appReducer} from './';
import {AppContextProps, User} from '../types/appContextProps';

export const AppContext = createContext({} as AppContextProps);

const initialState = {
  showModalAdd: false,
  showProfile: false,
  users: [],
  activeUser: undefined,
};

export const AppProvider = ({children}: any) => {
  const [{showModalAdd, users, showProfile, activeUser}, dispatch] = useReducer(
    appReducer,
    initialState,
  );

  const {t} = useTranslation();

  useEffect(() => {
    setUsers();
  }, []);

  useEffect(() => {
    toggleProfile();
  }, [activeUser]);

  const setUsers = async () => {
    const users = await AsyncStorage.getItem('users');

    if (!!users) {
      dispatch({
        type: 'setUsers',
        payload: JSON.parse(users),
      });
    }
  };

  const addUser = async (user: User) => {
    if ([user.id, user.name, user.surname].includes('')) {
      Alert.alert('Error', `${t('alerts.allFieldsRequired')}`);
      return false;
    }
    if (user.id.length < 5) {
      Alert.alert('Error', `${t('alerts.idIsShort')}`);
      return false;
    }

    if (user.name.length < 2) {
      Alert.alert('Error', `${t('alerts.nameIsShort')}`);
      return false;
    }
    if (user.surname.length < 2) {
      Alert.alert('Error', `${t('alerts.surnameIsShort')}`);
      return false;
    }
    const listUsers: User[] = [...users, user];

    await AsyncStorage.setItem('users', JSON.stringify(listUsers));

    dispatch({
      type: 'addUser',
      payload: user,
    });

    Alert.alert('Error', `${t('alerts.userRegistered')}`);
    return true;
  };

  const removeUsers = () => {
    Alert.alert(t('alerts.alert'), `${t('alerts.deleteAll')}`, [
      {text: t('form.cancel')},
      {
        text: t('alerts.yesDelete'),
        onPress: async () => {
          await AsyncStorage.removeItem('users');

          dispatch({type: 'deleteUsers'});
        },
      },
    ]);
  };

  const setActiveUser = (id: string) => {
    if (!users.length) {
      Alert.alert(t('alerts.alert'), `${t('alerts.noUsers')}`);
      return false;
    }
    if (id.length < 5) {
      Alert.alert('Error', `${t('alerts.idIsShort')}`);
      return false;
    }

    const user = users.filter(us => us.id === id)[0];

    if (!user) {
      Alert.alert('Error', `${t('alerts.userNotFound')}`);
      return false;
    } else {
      dispatch({
        type: 'setActiveUser',
        payload: user,
      });

      toggleProfile();
      return true;
    }
  };

  const removeActiveUser = () => {
    dispatch({
      type: 'removeActiveUser',
    });
  };

  const toggleModal = () => {
    dispatch({type: 'toggleModal'});
  };

  const toggleProfile = () => {
    if ((!!activeUser && !showProfile) || showProfile) {
      dispatch({type: 'toggleProfile'});
    }
  };

  return (
    <AppContext.Provider
      value={{
        activeUser,
        addUser,
        removeActiveUser,
        removeUsers,
        setActiveUser,
        toggleProfile,
        showModalAdd,
        showProfile,
        toggleModal,
        users,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('AppContext must be used within a AppProvider');
  }

  return context;
};
