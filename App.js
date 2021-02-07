import React from 'react';
import WelcomeScreen from './screens/WelcomeScreen'
import colors from './config/colors'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import UserProfileScreen from './screens/UserProfileScreen'
import HomePage from './screens/HomePage'
import DonorFormScreen from './screens/DonorFormScreen'
import BloodGroupScreen from './screens/BloodGroupScreen'
import BloodDetailScreen from './screens/BloodDetailScreen'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
import { Provider } from 'react-redux'
import store from './store'

export default function App() {
  return (
    <Provider store={store}>

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
        />
      
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{
            title: 'Login',
            headerStyle: {
              backgroundColor:colors.blood,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '200',
            },
          }}
        />

        <Stack.Screen 
          name="Register" 
          component={RegisterScreen} options={{
            title: 'Register',
            headerStyle: {
              backgroundColor:colors.blood,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '200',
            },
          }}
        />

        <Stack.Screen 
          name="user_profile" 
          component={UserProfileScreen} 
          options={{
            title: 'User Profile Page',
            headerStyle: {
              backgroundColor:colors.blood,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '200',
            },  
          }}
        />

        <Stack.Screen 
          name="Donor_Form" 
          component={DonorFormScreen} 
          options={{
            title: 'Become Donor Form',
            headerStyle: {
              backgroundColor:colors.blood,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '200',
            },
          }}
        />

        <Stack.Screen 
          name="home_page" 
          component={HomePage} 
          options={{
            title: "Donor's List",
            headerStyle: {
              backgroundColor:colors.blood,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '200',
            },
          }}
        />

          <Stack.Screen 
              name="blood_group" 
              component={BloodGroupScreen} 
              options={{
              title: "Blood Groups",
              headerStyle: {
                backgroundColor:colors.blood,
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: '200',
              },
            }}
          />

        <Stack.Screen 
          name="blood_detail" 
          component={BloodDetailScreen} 
          options={{
            title: "Blood Details",
            headerStyle: {
              backgroundColor:colors.blood,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '200',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}


