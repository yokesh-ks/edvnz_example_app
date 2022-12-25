import EdvnzTheme from '@edvnz/provider';
import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screen/home';

const Stack = createNativeStackNavigator();

export const Stacks = () => {
  const {theme} = useContext(EdvnzTheme);

  const screenOptions = {
    headerShown: true,
    headerTitleAlign: 'center',
    headerTitle: '',
    headerStyle: {
      backgroundColor: theme.colors.surfaceVariant,
      borderBottomWidth: 0,
      shadowColor: 'transparent',
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
    },
    headerTitleStyle: {
      color: theme.colors.onPrimary,
    },
  };

  return (
    <Stack.Group screenOptions={screenOptions}>
      <Stack.Screen name="home" title="Home">
        {() => <Home />}
      </Stack.Screen>
    </Stack.Group>
  );
};
