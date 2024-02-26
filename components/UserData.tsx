import {StyleSheet, Text, View} from 'react-native';

const UserData = (props: any) => {
  const item = props.item;
  return (
    <View style={styles.box}>
      <Text style={styles.items}>{item.id} </Text>
      <Text style={styles.items}>{item.name} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    fontSize: 40,
    color: 'blue',
  },
  box: {
    flexDirection: 'row',
    borderWidth: 5,
    margin: 5,
    borderColor: 'red',
  },
  items: {
    fontSize: 30,
    flex: 2,
    textAlign: 'center',
    color: 'red',
  },
});

export default UserData;
