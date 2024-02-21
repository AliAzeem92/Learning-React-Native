import React, { useState } from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import Header from './components/Header';

const App = () => {
  const [name,useName] = useState("");

  return (
    <View>
      <Header />
      <Text style={styles.heading} >Hadling Text Input</Text>
      <Text style={styles.changeHeading} >Your Name is: {name} </Text>
      <TextInput
      style={styles.textInput}
      placeholder='Your Name '
      value={name}
      onChangeText={(text)=>useName(text)}
      />
      <Button title='Clear Input Box' onPress={()=>{useName('')}} />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    textAlign:'center',
    fontSize:40,
    color:'blue'
  },
  changeHeading: {
    marginLeft:20,
    fontSize:20,
    color:'red'
  },
  textInput: {
  color:'red',
  borderWidth:2,
  margin:20,
  fontSize:20,
  borderColor:'blue'
  }
})

export default App;
