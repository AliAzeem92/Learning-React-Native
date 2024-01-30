import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import EXStyle from '../globleCSS';

export default function TextBox() {
  const [firstName, secondName] = useState('Hello there...');
  function name() {
    secondName('My Name is Ali Azeem');
  }

  return (
    <View>
      <Text></Text>
      <Button title="Click Me" onPress={name} />
      <Text style={EXStyle.text}>{firstName}</Text>
    </View>
  );
}
