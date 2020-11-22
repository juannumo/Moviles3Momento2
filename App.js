import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeAppointments from './screens/home/home';
import ListAppointments from './screens/list-appointments/list-appointments';
import CreateAppointment from './screens/create-appointment/create-appointment';
import DetailAppointment from './detail-appoinment/detail';
import UpdateAppointment from './screens/update-appointment/update-appintment';



const Stack = createStackNavigator();

 function App() {
  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeAppointments}
        options={{ title: 'Home',
        headerStyle: {
            backgroundColor: '#e3e3e3',
          },
          headerTintColor: '#236b73',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign:'center',
          transitionSpec: {
          open: config,
          close: config,
        }
         }}
         />
        <Stack.Screen name="List" component={ListAppointments} 
          options={{ title: 'My List of Appointments',
        headerStyle: {
            backgroundColor: '#e3e3e3',
          },
          headerTintColor: '#236b73',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign:'center',
          transitionSpec: {
          open: config,
          close: config,
        }
         }}
        />
        <Stack.Screen name="Create" component={CreateAppointment} 
          options={{ title: 'Create an Appointment',
        headerStyle: {
            backgroundColor: '#e3e3e3',
          },
          headerTintColor: '#236b73',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign:'center',
          transitionSpec: {
          open: config,
          close: config,
        }
         }}
        />
        <Stack.Screen name="Detail" component={DetailAppointment} 
          options={{ title: 'Check an Appointment',
        headerStyle: {
            backgroundColor: '#e3e3e3',
          },
          headerTintColor: '#236b73',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign:'center',
          transitionSpec: {
          open: config,
          close: config,
        }
         }}
        />
        <Stack.Screen name="Update" component={UpdateAppointment} 
          options={{ title: 'Update an Appointment',
        headerStyle: {
            backgroundColor: '#e3e3e3',
          },
          headerTintColor: '#236b73',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign:'center',
          transitionSpec: {
          open: config,
          close: config,
        }
         }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;