// import React, {useState} from 'react';
// import {Button, Text, View} from 'react-native';

// const App = () => {
//   const [first, second] = useState('Ali');

//   function sec() {
//     second('Azeem');
//   }

//   return (
//     <View>
//       <Text style={{fontSize: 50, color: 'blue', textAlign: 'center'}}>
//         State
//       </Text>
//       <Text style={{fontSize: 30, color: 'red'}}>{first} </Text>
//       <Button title="Second Name" onPress={sec} />
//     </View>
//   );
// };

// export default App;
// import React, {useState} from 'react';
// import {Button, Text, View} from 'react-native';

// const App = () => {
//   const [father, son] = useState('Aamir');
//   function ofspring() {
//     son('Ali');
//   }

//   return (
//     <View>
//       <Text style={{fontSize: 50, color: 'blue', textAlign: 'center'}}>
//         State
//       </Text>
//       <Text style={{fontSize: 30, color: 'red'}}>{father}</Text>
//       <Button title="Change Name" onPress={ofspring} />
//     </View>
//   );
// };

// export default App;

import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

const App = () => {
  const [city1, city2] = useState('Karachi');
  function second() {
    city2('Islamabad');
  }

  return (
    <View>
      <Text style={{fontSize: 50, color: 'blue', textAlign: 'center'}}>
        State
      </Text>
      <Text style={{fontSize: 30, color: 'gold'}}>{city1}</Text>
      <Button title="Second City" onPress={second} />
    </View>
  );
};

export default App;
