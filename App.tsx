import React from 'react';
import {Button, Text, View} from 'react-native';

const App = () => {
  const fruit = (value: any) => {
    console.warn(value);
  };

  return (
    <View>
      <Text style={{fontSize: 50, color: 'blue'}}>Buttons</Text>
      {/* With Params */}
      <Button
        title="On Press"
        color={'lightgreen'}
        onPress={() => fruit('Hello')}
      />
      <Text></Text>
      {/* Without Params */}
      <Button title="On Press 2" color={'green'} onPress={fruit} />
    </View>
  );
};

export default App;
