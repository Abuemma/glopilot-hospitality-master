// In App.js in a new project

import React from 'react';
import HomePageScreen from './src/screens/HomePageScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TransactionScreen from './src/screens/TransactionScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'
import SupportScreen from './src/screens/SupportScreen';
import SavingsScreen from './src/screens/savingsScreen';



const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) =>{
          let iconName;

          switch (route.name){
            case 'Home':
              iconName = 'home';
              break;
            case 'Transaction':
              iconName = 'card';
              break;
            case 'Savings':
              iconName = 'pie-chart-sharp';
             break;
            case "Profile":
              iconName = 'person';
              break;
            default:
              iconName = 'question';
              break;

          }
          return <Ionicons name={iconName} size={size} color={color}/>;
        },
        headerShown: false, 
      })}
      tabBarOptions={{
        activeTintColor: 'indigo',
        inactiveTintColor: 'grey',
      }}
      >
        <Tab.Screen name="Home" component={HomePageScreen}/>
        <Tab.Screen name="Transaction" component={TransactionScreen}/>
        <Tab.Screen name="Savings" component={SavingsScreen}/>
        <Tab.Screen name="Profile" component={ProfileScreen}/>
      </Tab.Navigator>
  )
}
export default MainTabNavigator;