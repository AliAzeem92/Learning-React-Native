// import React, {useState} from 'react';
// import {Button, Text, View} from 'react-native';

// const App = () => {
//   return (
//     <View>
//       <Text
//         style={{
//           fontSize: 50,
//           backgroundColor: 'pink',
//           color: 'blue',
//           textAlign: 'center',
//         }}>
//         Props
//       </Text>
//       <userName />
//     </View>
//   );

//   const userName = () => {
//     return (
//       <View>
//         <Text
//           style={{
//             fontSize: 50,
//             backgroundColor: 'pink',
//             color: 'blue',
//             textAlign: 'center',
//           }}>
//           Props
//         </Text>
//       </View>
//     );
//   };
// };

// export default App;

import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

const App = () => {
  const [fatherName, sonName] = useState('Aamir Azeem');

  return (
    <View>
      <Text
        style={{
          fontSize: 50,
          backgroundColor: 'pink',
          color: 'blue',
          textAlign: 'center',
        }}>
        Props
      </Text>
      <UserName name={fatherName} />
      <Button title="Child Name" onPress={() => sonName('Ali Azeem')} />
    </View>
  );
};
const UserName = (props: any) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          color: 'red',
        }}>
        {props.name}
      </Text>
    </View>
  );
};

export default App;
