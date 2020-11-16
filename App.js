import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListAppointments from './screens/list-appointments/list-appointments';
import CreateAppointment from './screens/create-appointment/create-appointment';
import DetailAppointment from './detail-appoinment/detail';
import UpdateAppointment from './screens/update-appointment/update-appintment';


const Stack = createStackNavigator();

 function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ListAppointments} />
        <Stack.Screen name="Create" component={CreateAppointment} />
        <Stack.Screen name="Detail" component={DetailAppointment} />
        <Stack.Screen name="Update" component={UpdateAppointment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;