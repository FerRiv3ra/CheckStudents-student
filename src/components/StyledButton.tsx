import React, {useContext} from 'react';
import {
  ActivityIndicator,
  StyleProp,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

import {useTranslation} from 'react-i18next';

import globalStyles from '../theme/globalStyles';
import {ThemeContext} from '../context/ThemeContext';
import Icon from 'react-native-vector-icons/Ionicons';
import {View} from 'react-native-animatable';

interface Props {
  text: string;
  icon: string;
  size?: number;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  animated?: boolean;
  primary?: boolean;
  onPress: () => void;
}

const StyledButton = ({
  text,
  icon,
  size = 16,
  style,
  disabled = false,
  animated = false,
  primary = true,
  onPress,
}: Props) => {
  const {t} = useTranslation();
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      disabled={disabled}
      style={[
        globalStyles.button,
        animated && disabled
          ? globalStyles.gray
          : primary
          ? globalStyles.primary
          : globalStyles.cancel,
        style,
      ]}>
      {disabled ? (
        <ActivityIndicator animating={disabled} />
      ) : (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name={icon} color={colors.card} size={size} />
          <Text style={{...globalStyles.textBtn, color: colors.card}}>
            {' '}
            {t(`form.${text}`)}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default StyledButton;
