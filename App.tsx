import React, {useState} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 30,
          backgroundColor: 'lightblue',
          color: 'red',
        }}>
        Styling
      </Text>
      <Text style={style.textBox}>External CSS</Text>
      <Text style={style.textBox}>External CSS</Text>
      <Text style={style.textBox}>External CSS</Text>
      <Text style={style.textBox}>External CSS</Text>
      <Text style={style.textBox}>External CSS</Text>
      <Text style={style.textBox}>External CSS</Text>
    </View>
  );
};

const style = StyleSheet.create({
  textBox: {
    fontSize: 30,
    color: 'blue',
    backgroundColor: 'gold',
    padding: 10,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: 'green',
  },
});

export default App;
