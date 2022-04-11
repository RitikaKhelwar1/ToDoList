import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {useSelector} from 'react-redux';
import Home from '../Screens/Home/Home';
import AddDetails from '../Screens/AddDetails/AddDetails';

import navigationStrings from './navigationStrings';

const Stack = createNativeStackNavigator();
export default function () {
  return (
    <Stack.Navigator >
      <Stack.Screen name={navigationStrings.HOME} component={Home} options={{headerShown: false}}/>
      <Stack.Screen name={navigationStrings.ADD_DETAILS} component={AddDetails}  options={{headerShown: true}}/>
    </Stack.Navigator>
  );
}
