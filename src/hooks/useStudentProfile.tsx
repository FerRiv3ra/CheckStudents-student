import {useContext, useEffect, useRef, useState} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppContext} from '../context/AppContext';

export const useStudentProfile = () => {
  const [time, setTime] = useState(60);
  const timerRef = useRef(time);

  const {removeActiveUser, toggleProfile, activeUser} = useContext(AppContext);

  const today = new Date();

  useEffect(() => {
    const timerId = setInterval(() => {
      timerRef.current -= 1;
      if (timerRef.current < 0) {
        clearInterval(timerId);
        closeWindow();
      } else {
        setTime(timerRef.current);
        if (timerRef.current % 10 === 0) {
          setTimeInStg(timerRef.current);
        }
      }
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  const setTimeInStg = async (time: number) => {
    await AsyncStorage.setItem('timeLeft', time.toString());
  };

  const closeWindow = async () => {
    toggleProfile();
    removeActiveUser();
  };

  return {
    time,
    today,
    activeUser,
  };
};
