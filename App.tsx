import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Toaster} from 'sonner-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import SampleScreen from './SampleScreen';
import {NavigationContainer} from '@react-navigation/native';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              presentation: 'fullScreenModal',
              gestureEnabled: false,
            }}>
            <Stack.Screen name="Home" component={HomeScreen} />

            <Stack.Group
              screenOptions={{
                presentation: 'transparentModal',
              }}>
              <Stack.Screen name="Sample" component={SampleScreen} />
            </Stack.Group>
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
      <Toaster />
    </SafeAreaProvider>
  );
}

export default App;
