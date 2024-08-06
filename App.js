import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import SignupScreen from './src/screens/SignupScreen';
import HomePageScreen from './src/screens/HomePageScreen';
import Login from './src/screens/Login';
import TransactionScreen from './src/screens/TransactionScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import MainTabNavigator from './MainTabNavigator';
import BusinessSettingScreen from './src/screens/BusinessSettingScreen';
import ReceiptScreen from './src/screens/ReceiptScreen';
import BankTransferScreen from './src/screens/BankTransferScreen';
import TransactionLimitScreen from './src/screens/TransactionLimitScreen';
import AirtimeScreen from './src/screens/AirtimeScreen';
import CardScreen from './src/screens/CardScreen';
import SettingScreen from './src/screens/SettingScreen';
import fundScreen from './src/screens/fundScreen';
import ElectricityScreen from './src/screens/ElecticityScreen';
import savingsScreen from './src/screens/savingsScreen';
import SupportScreen from './src/screens/SupportScreen';
import Regulardata from './src/screens/Regulardata';
import Cheapdata from './src/screens/Cheapdata';
import Password from './src/screens/Password.js';
import BankListScreen from './src/screens/BanklistScreen';
import BeneficiaryDetails from './src/screens/BeneficiaryDetails';
import AddMoney from './src/screens/AddMoney';
import ReviewTransfer from './src/screens/ReviewTransfer';







const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabNavigator" component={MainTabNavigator} />
        <Stack.Screen name="HomePage" component={HomePageScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Transactions" component={TransactionScreen} />
        <Stack.Screen name="Business" component={BusinessSettingScreen} />
        <Stack.Screen name="Receipt" component={ReceiptScreen} />
        <Stack.Screen name="BankTransfer" component={BankTransferScreen} />
        <Stack.Screen name="TransactionLimit" component={TransactionLimitScreen} />
        <Stack.Screen name="AirtimeScreen" component={AirtimeScreen} />
        <Stack.Screen name="CardScreen" component={CardScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
        <Stack.Screen name="fund" component={fundScreen} />
        <Stack.Screen name="Electricity" component={ElectricityScreen} />
        <Stack.Screen name="savings" component={savingsScreen} />
        <Stack.Screen name="support" component={SupportScreen} />
        <Stack.Screen name="cheap" component={Cheapdata} />
        <Stack.Screen name="Regular" component={Regulardata} />
        <Stack.Screen name="Pass" component={Password} />
        <Stack.Screen name="Bank" component={BankListScreen} />
        <Stack.Screen name="Beneficiary" component={BeneficiaryDetails} />
        <Stack.Screen name="addMoney" component={AddMoney} />
        <Stack.Screen name="ReviewTransfer" component={ReviewTransfer} />

      </Stack.Navigator>
    </NavigationContainer>

  );
}
