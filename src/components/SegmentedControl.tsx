import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';

import {Color} from '../types/colorType';

interface Props {
  values: {key: string; value: string}[];
  onChange: (text: string) => void;
  selectedIndex?: number;
  selectedTextColor?: Color;
  backgroundColor?: Color;
  tintColor?: Color;
  textColor?: Color;
}

const SegmentedControl = ({
  values,
  onChange,
  selectedIndex = 0,
  selectedTextColor,
  backgroundColor = '#CCCCCC',
  tintColor = '#FFFFFF',
  textColor = '#000000',
}: Props) => {
  const [selected, setSelected] = useState(selectedIndex);

  const handlePress = (idx: number) => {
    onChange(values[idx].value);
    setSelected(idx);
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 2,
        backgroundColor,
        borderRadius: 5,
        marginVertical: 5,
      }}>
      {values.map((value, index) => (
        <Pressable
          onPress={() => handlePress(index)}
          key={index}
          style={{
            flex: 1,
            backgroundColor: selected === index ? tintColor : backgroundColor,
            paddingVertical: 5,
            borderTopLeftRadius: index === 0 ? 5 : 0,
            borderBottomLeftRadius: index === 0 ? 5 : 0,
            borderTopRightRadius: index === values.length - 1 ? 5 : 0,
            borderBottomRightRadius: index === values.length - 1 ? 5 : 0,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: '600',
              color:
                index === selected && !!selectedTextColor
                  ? selectedTextColor
                  : textColor,
              fontSize: 12,
            }}>
            {value.key}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

export default SegmentedControl;
