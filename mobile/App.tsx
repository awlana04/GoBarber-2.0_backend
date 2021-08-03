import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { RobotoSlab_400Regular, RobotoSlab_500Medium, RobotoSlab_700Bold } from '@expo-google-fonts/roboto-slab';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';

// import Signin from './src/pages/Signin';

function App() {
  const [fontsLoaded] = useFonts({
    RobotoSlab_400Regular,
    RobotoSlab_500Medium,
    RobotoSlab_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#312e38" />

      {/* <Signin /> */}

      <Routes />
    </NavigationContainer>
  );
}

export default App;
