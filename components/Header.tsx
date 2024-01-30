import React from 'react';
import {Text, View} from 'react-native';

const Header = () => {
  return (
    <View>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 50,
          backgroundColor: 'lightblue',
          color: 'red',
          marginTop: 10,
          marginLeft: 10,
          marginRight: 10,
          borderRadius: 10,
          padding: 20,
        }}>
        My Mobile App
      </Text>
    </View>
  );
};

export default Header;
