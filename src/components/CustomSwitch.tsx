import React, {useState} from 'react';
import {Platform, Switch, View} from 'react-native';

interface Props {
  isOn: boolean;
  onChange: (value: boolean) => void;
  backgrounColor?: string;
  border?: boolean;
}

export const CustomSwitch = ({
  isOn,
  onChange,
  backgrounColor = '#1DFF56',
  border,
}: Props) => {
  const [isEnabled, setIsEnabled] = useState(isOn);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled);
  };

  return (
    <View
      style={{
        borderColor: backgrounColor,
        borderWidth: border ? 2 : 0,
        borderRadius: 16,
      }}>
      <Switch
        trackColor={{false: '#D9D9DB', true: backgrounColor}}
        thumbColor={Platform.OS === 'android' ? backgrounColor : ''}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};
