import {useAppContext, useThemeContext} from '../context';
import {User} from '../types/appContextProps';
import {useForm} from './useForm';

export const useFormStudent = () => {
  const {name, id, surname, onChange, reset} = useForm({
    name: '',
    id: '',
    surname: '',
  });
  const {
    theme: {colors, dividerColor},
  } = useThemeContext();
  const {toggleModal, addUser} = useAppContext();

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

  return {
    colors,
    dividerColor,
    handlePress,
    id,
    name,
    onChange,
    surname,
    toggleModal,
  };
};
