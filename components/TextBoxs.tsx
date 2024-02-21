import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import EXStyle from '../globleCSS';

export default function TextBox() {
  const [firstValue, seconeValue] = useState('Hello There......');
  function name () {
    seconeValue('My name is Ali Azeem')
  }

  return (
    <View>
      <Text style={EXStyle.text} >{firstValue} </Text>
      <Button title='Click Me' onPress={name} />
    </View>
  );
}
