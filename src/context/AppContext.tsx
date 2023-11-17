import {createContext, useEffect, useReducer} from 'react';
import {Alert} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {User, appReducer} from './appReducer';
import {AppContextProps} from '../types/appContextProps';

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
    // TODO: usar i18next
    if ([user.id, user.name, user.surname].includes('')) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return false;
    }
    if (user.id.length < 5) {
      Alert.alert('Error', 'Id muy corto');
      return false;
    }

    if (user.name.length < 5) {
      Alert.alert('Error', 'Nombre muy corto');
      return false;
    }
    if (user.surname.length < 5) {
      Alert.alert('Error', 'Apellido muy corto');
      return false;
    }
    const listUsers: User[] = [...users, user];

    await AsyncStorage.setItem('users', JSON.stringify(listUsers));

    dispatch({
      type: 'addUser',
      payload: user,
    });

    Alert.alert('Exito', 'Usuario registrado correctamente');
    return true;
  };

  const removeUsers = () => {
    Alert.alert('Eliminar', 'Desea eliminar todo?', [
      {text: 'Cancel'},
      {
        text: 'Si, eliminar',
        onPress: async () => {
          await AsyncStorage.removeItem('users');

          dispatch({type: 'deleteUsers'});
        },
      },
    ]);
  };

  const setActiveUser = (id: string) => {
    // TODO: usar i18next
    if (!users.length) {
      Alert.alert('Aviso', 'No hay usuarios registrados');
      return false;
    }
    if (id.length < 5) {
      Alert.alert('Error', 'Id muy corto');
      return false;
    }

    const user = users.filter(us => us.id === id)[0];

    if (!user) {
      Alert.alert('Error', 'Usuario no encontrado');
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
