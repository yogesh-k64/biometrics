import React from 'react';
import BiometricScan from './src/BiometricScan';
import {NavigationContainer} from '@react-navigation/native';
import BiometricResults from './src/BiometricResults';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator>
      <Stack.Screen name="scan" component={BiometricScan} />
      <Stack.Screen name="results" component={BiometricResults} />
    </Stack.Navigator>
      {/* <BiometricScan /> */} 
    </NavigationContainer>
  );
};

export default App;
