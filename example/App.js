import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import { NativeModules,NativeEventEmitter } from 'react-native';

export const RNRefiner = NativeModules.RNRefiner;

export const RNRefinerEventEmitter = new NativeEventEmitter(RNRefiner);


export default function App() {

 var userTraits = { email: 'hello@hello.com', a_number: 123, a_date: '2022-16-04 12:00:00' };

  RNRefiner.initialize('56421950-5d32-11ea-9bb4-9f1f1a987a49', false);

  RNRefiner.identifyUser('my-user-id', userTraits, null, null);

  //RNRefiner.showForm('616fc500-5d32-11ea-8fd5-f140dbcb9780', true);


  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
