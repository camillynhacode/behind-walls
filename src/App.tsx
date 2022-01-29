/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  useColorScheme,
} from 'react-native';
import { AuthContextProvider } from './contexts/AuthContext';

import Navigator from './router';



const App = () => {
  return (
    <AuthContextProvider>
      <Navigator />
    </AuthContextProvider>
  );
};

export default App;
