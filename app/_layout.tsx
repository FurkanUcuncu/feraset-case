import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import 'react-native-reanimated';
import { Provider } from "react-redux";
import { useColorScheme } from '@/hooks/useColorScheme';
import { store } from '@/store';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    ManropeRegular: require('@/assets/fonts/Manrope-Regular.ttf'),
    ManropeBold: require('@/assets/fonts/Manrope-Bold.ttf'),
    ManropeExtraBold: require('@/assets/fonts/Manrope-ExtraBold.ttf')
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <Provider store={store}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name='index' options={{ headerShown: false }} />
          <Stack.Screen name='design' options={{ headerShown: false }} />
          <Stack.Screen name='+not-found' />
        </Stack>
      <StatusBar style={colorScheme === 'dark' ? 'dark' : 'light'} />
    </Provider>
  );
}
