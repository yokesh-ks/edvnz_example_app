/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  LightTheme as LightThemeColors,
  DarkTheme as DarkThemeColors,
} from '@edvnz/theme';
import EdvnzTheme from '@edvnz/provider';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {navigationRef} from './src/navigation/RootNavigator';
import AppNavigator from './src/navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

const customLightTheme = {
  ...DefaultTheme.colors,
  ...LightThemeColors,
  colors: {
    ...DefaultTheme.colors,
    ...LightThemeColors.colors,
  },
};

const customDarkTheme = {
  ...DarkTheme.colors,
  ...DarkThemeColors,
  colors: {
    ...DarkTheme.colors,
    ...DarkThemeColors.colors,
  },
};

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [theme, setTheme] = useState(DarkTheme);

  useEffect(() => {
    setTheme(isDarkTheme ? customDarkTheme : customLightTheme);
  }, [isDarkTheme]);

  const value = {theme};
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <EdvnzTheme.Provider value={value}>
        <NavigationContainer ref={navigationRef} theme={theme}>
          <AppNavigator />
        </NavigationContainer>
      </EdvnzTheme.Provider>
    </SafeAreaProvider>
  );
};

export default App;
