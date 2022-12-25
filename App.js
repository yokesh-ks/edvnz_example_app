/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import Home from './src/screen/home';
import {DarkTheme, LightTheme} from '@edvnz/theme';
import EdvnzTheme from '@edvnz/provider';

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [theme, setTheme] = useState(DarkTheme);

  useEffect(() => {
    setTheme(isDarkTheme ? DarkTheme : LightTheme);
  }, [isDarkTheme]);

  const value = {theme};
  return (
    <SafeAreaView>
      <EdvnzTheme.Provider value={value}>
        <Home />
      </EdvnzTheme.Provider>
    </SafeAreaView>
  );
};

export default App;
