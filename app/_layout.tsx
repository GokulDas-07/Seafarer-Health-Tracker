import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import 'react-native-reanimated';

import { AppSplashScreen } from '@/components/ui/AppSplashScreen';
import { useColorScheme } from '@/hooks/use-color-scheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  anchor: '(drawer)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [isSplashAnimationFinished, setSplashAnimationFinished] = useState(false);

  if (!isSplashAnimationFinished) {
    return (
      <AppSplashScreen
        onAnimationFinish={() => setSplashAnimationFinished(true)}
      />
    );
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
