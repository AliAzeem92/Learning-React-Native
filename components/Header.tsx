import React from 'react';
import {Text, View} from 'react-native';

const Header = () => {
  return (
    <View>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 50,
          backgroundColor: 'grey',
          color: 'white',
          marginTop: 10,
          marginLeft: 10,
          marginRight: 10,
          borderRadius: 10,
          borderWidth: 10,
          borderColor: 'gold' ,
          padding: 20,
        }}>
        React-Native Practice
      </Text>
    </View>
  );
};

export default Header;
