import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import Header from './components/Header';

const App = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const [display, setDisplay] = useState(false);
  const resetDetails = () => {
    setName('');
    setPassword('');
    setEmail('');
    setDisplay(false);
  };

  return (
    <View>
      <Header />
      <Text style={styles.heading}>Simple Form</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter Username "
        onChangeText={text => setName(text)}
        value={name}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter Password"
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
        value={password}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter Email"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <View style={{margin: 10}}>
        <Button
          color={'green'}
          title="Print Details"
          onPress={() => setDisplay(true)}
        />
      </View>
      <View style={{marginTop: -5, margin: 10}}>
        <Button title="Clear Details" onPress={resetDetails} />
      </View>
      <View>
        {display ? (
          <>
            <Text style={{fontSize: 25}}>Your name is: {name}</Text>
            <Text style={{fontSize: 25}}>Your password is: {password}</Text>
            <Text style={{fontSize: 25}}>Your email is: {email}</Text>
          </>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    fontSize: 40,
    color: 'blue',
  },
  textInput: {
    color: 'red',
    borderWidth: 2,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 20,
    borderColor: 'blue',
  },
});

export default App;
