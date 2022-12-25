import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import EdvnzTheme from '@edvnz/provider';

const Home = () => {
  const {theme} = useContext(EdvnzTheme);
  console.log(theme.colors);
  return (
    <View>
      <Text>Edvnz Example</Text>
    </View>
  );
};

export default Home;
