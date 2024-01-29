import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

let name = 'Ali Azeem';
var age = '19';
const rollNum = 'BSCS';

const App = () => {
  return (
    <View>
      <Text style={{fontSize: 50, color: 'purple'}}>Hello World</Text>
      <Text style={{fontSize: 40, color: 'Red'}}> {name} </Text>
      <Text style={{fontSize: 30, color: 'Blue'}}> {age} </Text>
      <Text style={{fontSize: 20, color: 'black'}}> {rollNum} </Text>
    </View>
  );
};

export default App;
