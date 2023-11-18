import React from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';

import globalStyles from '../theme/globalStyles';
import {useThemeContext} from '../context/ThemeContext';

interface Props {
  title: string;
  placeholder: string;
  value: string;
  search?: boolean;
  password?: boolean;
  passVisible?: boolean;
  onChangeText?: ((text: string) => void) | undefined;
  onPress?: () => void;
}

export const InputComponent = ({
  onChangeText,
  onPress,
  passVisible,
  password = false,
  placeholder,
  search = false,
  title,
  value,
}: Props) => {
  const {
    theme: {colors, dark, dividerColor},
  } = useThemeContext();

  return (
    <View>
      <Text style={{...globalStyles.label, color: colors.text}}>{title}</Text>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          style={{
            ...globalStyles.input,
            borderBottomColor: dividerColor,
            flex: 1,
            color: colors.text,
            backgroundColor: colors.card,
          }}
          placeholder={placeholder}
          autoComplete={password ? 'password' : 'off'}
          secureTextEntry={password ? !passVisible : false}
          textContentType={password ? 'password' : 'none'}
          placeholderTextColor={dark ? '#DDD' : '#666'}
          value={value}
          onChangeText={onChangeText}
        />
        {(password || search) && (
          <Pressable
            style={{
              ...globalStyles.btnViewPass,
              backgroundColor: colors.card,
            }}
            onPress={onPress}>
            {/* <FontAwesomeIcon
              style={globalStyles.icon}
              color={colors.text}
              icon={search ? faSearch : passVisible ? faEyeSlash : faEye}
            /> */}
          </Pressable>
        )}
      </View>
    </View>
  );
};
