import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';

// import Signin from './src/pages/Signin';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#312e38" />

      {/* <Signin /> */}

      <Routes />
    </NavigationContainer>
  );
}

export default App;
