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

interface Props {
  text: string;
  size?: number;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  animated?: boolean;
  primary?: boolean;
  onPress: () => void;
}

const StyledButton = ({
  text,
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
        <Text style={{...globalStyles.textBtn, color: colors.card}}>
          {t(`${text}`)}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default StyledButton;
