import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

const App = () => {
  return (
    <View>
      <Text style={{fontSize: 50, color: 'blue'}}>Components</Text>
      <UserData />
      <UserData />
      <UserData />
      <UserData />
    </View>
  );
};

const UserData = () => {
  return (
    <View>
      <Text style={{fontSize: 30, color: 'red'}}>Name: Ali Azeem</Text>
      <Text style={{fontSize: 30, color: 'red'}}>Age: 19</Text>
      <Text style={{fontSize: 30, color: 'red'}}>Class: BSCS</Text>
    </View>
  );
};

export default App;
