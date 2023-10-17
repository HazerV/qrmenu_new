import React, {useState } from 'react';
import HomeScreen from './Components/pages/home/home.jsx';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import useFonts from './assets/fonts/fonts';
import AppLoading from 'expo-app-loading';
import Confidence from './Components/pages/Confidence/conf';
import Oferta from './Components/pages/Oferta/oferta';
import Menu from './Components/pages/chooseZal/chooseZal.jsx';
import Category from './Components/Category/Category';
import { ThemeContextProvider } from './Components/Theme/ThemeSwitcher.jsx';

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
      <ThemeContextProvider>
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
              component={Menu}
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
      </ThemeContextProvider>
  )};

export default App;