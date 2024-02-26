import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Header from './components/Header';
import UserData from './components/UserData';

const App = () => {
  const users = [
    {
      id: 1,
      name: 'Ali',
    },
    {
      id: 2,
      name: 'Azeem',
    },
    {
      id: 3,
      name: 'Aamir',
    },
  ];

  return (
    <View>
      <Header />
      <Text style={styles.heading}>Component in Loop with Flatbox</Text>
      <FlatList
        data={users}
        renderItem={({item}) => <UserData item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    fontSize: 40,
    color: 'blue',
  },
});

export default App;
