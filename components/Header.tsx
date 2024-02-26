import React from 'react';
import {Text, View} from 'react-native';

const Header = () => {
  return (
    <View>
      <Text
        style={{
          textAlign: 'center',
          textAlignVertical: 'center',
          fontSize: 50,
          backgroundColor: 'grey',
          color: 'white',
          marginTop: 10,
          marginLeft: 10,
          marginRight: 10,
          borderRadius: 100,
          borderWidth: 10,
          borderColor: 'gold',
        }}>
        React-Native Practice
      </Text>
    </View>
  );
};

export default Header;
