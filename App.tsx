import React from 'react';
import {SafeAreaView, Text, BackHandler, Button} from 'react-native';
import {storage} from './mmkv';

function App(): React.JSX.Element {
  const username = storage.getString('user.name');
  const age = storage.getNumber('user.age');

  return (
    <SafeAreaView>
      <Text>{`${username} ${age}`}</Text>
      <Button onPress={BackHandler.exitApp} title="Exit" />
    </SafeAreaView>
  );
}

export default App;
