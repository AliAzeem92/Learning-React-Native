import React, {useState} from 'react';
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Header from './components/Header';

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
    {
      id: 4,
      name: 'Saqlain',
    },
    {
      id: 5,
      name: 'Naveed',
    },
    {
      id: 6,
      name: 'Raheeq',
    },
    {
      id: 7,
      name: 'Abudllah',
    },
    {
      id: 8,
      name: 'Anus',
    },
    {
      id: 9,
      name: 'Jutt',
    },
    {
      id: 10,
      name: 'Humza',
    },
    {
      id: 11,
      name: 'Ahsan',
    },
    {
      id: 12,
      name: 'Zain',
    },
  ];

  return (
    <View>
      <Header />
      <Text style={styles.heading}>List</Text>
      <ScrollView style={{marginBottom: 250}}>
        {users.map(item => (
          <Text style={styles.items}>{item.name}</Text>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    fontSize: 40,
    color: 'blue',
  },
  items: {
    fontSize: 35,
    margin: 15,
    textAlign: 'center',
    backgroundColor: 'pink',
    borderWidth: 5,
    borderColor: 'red',
    color: 'white',
  },
});

export default App;
