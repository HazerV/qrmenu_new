import React, {useState} from 'react';
import HomeScreen from './Components/pages/home/home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import useFonts from './assets/fonts/fonts';
import AppLoading from 'expo-app-loading';
import Confidence from './Components/pages/Confidence/conf';
import Oferta from './Components/pages/Oferta/oferta';
import chooseZal from './Components/pages/chooseZal/chooseZal';
import Category from './Components/Category/Category';

const Stack = createNativeStackNavigator();

const App = () => {

  const [IsReady, SetIsReady] = useState(false);

  const LoadFonts = async () => {
    await useFonts()                  
  }
  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }

  return (
    <NavigationContainer> 
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name='Confidience'
          component={Confidence}
          />
        <Stack.Screen
          name='Oferta'
          component={Oferta}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='chooseZal'
          component={chooseZal}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='Category'
          component={Category}
          options={{
            headerShown: false
          }}
        />  

      </Stack.Navigator>
    </NavigationContainer>
  )};

export default App;