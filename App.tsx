
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cadastro from './src/screen/cadastro';
import Login from './src/screen/login';
import FinishCadastro from './src/screen/finishCadastro';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='cadastro'>
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="finishcadastro" component={FinishCadastro}></Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;