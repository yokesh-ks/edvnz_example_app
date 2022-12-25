import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import EdvnzTheme from '@edvnz/provider';

const Home = () => {
  const {theme} = useContext(EdvnzTheme);
  return (
    <View>
      <Text style={{color: theme.colors.textPrimary}}>Edvnz Example</Text>
    </View>
  );
};

export default Home;
