import { StyleSheet, Text } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import {IThemedTextProps} from "@/types/props.types";
import {Colors} from "@/constants/Colors";

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: IThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Text
      style={[
        { color } as object,
        type === 'default' ? styles.default : undefined,
        type === 'defaultBold' ? styles.defaultBold : undefined,
        type === 'defaultExtraBold' ? styles.defaultBold : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontFamily: 'ManropeRegular',
    fontSize: 16,
    lineHeight: 24,
    color: Colors.light.background
  },
  defaultBold: {
    fontFamily: 'ManropeBold',
    fontSize: 16,
    lineHeight: 24,
    color: Colors.light.background,
    fontWeight: '700',
  },
  defaultExtraBold: {
    fontFamily: 'ManropeExtraBold',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '800',
    color: Colors.light.background
  }
});