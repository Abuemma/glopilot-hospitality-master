import { StyleSheet, Text, View, Switch, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {Ionicons, SimpleLineIcons, MaterialIcons, MaterialCommunityIcons} from 'react-native-vector-icons/'

const BusinessSettingScreen = ({navigation}) => {
    const [isBiometricEnabled, setIsBiometricEnabled] = useState(false);

    const toggleSwitch = () => setIsBiometricEnabled(previousState => !previousState);
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
       <MaterialIcons name='arrow-back' size={20} color={'black'} />
       </TouchableOpacity>
        <Text style={styles.supportText}>Settings</Text>
      </View>

      <View style={styles.textRow}>
        <Text style={styles.passwordText}>Change Password</Text>
        <MaterialIcons style={styles.icons} name='keyboard-arrow-right' size={30} color={'black'} /> 
      </View>
      <View style={styles.divider}></View>

      <View style={styles.textRow}>
        <Text style={styles.passwordText}>Change Pin</Text>
        <MaterialIcons style={styles.icons} name='keyboard-arrow-right' size={30} color={'black'} /> 
      </View>
      <View style={styles.divider}></View>

      <View style={styles.textRow}>
        <Text style={styles.passwordText}>Reset Pin</Text>
        <MaterialIcons style={styles.icons}name='keyboard-arrow-right' size={30} color={'black'} /> 
      </View>
      <View style={styles.divider}></View>


      <View style={styles.textRow}>
        <Text style={styles.passwordText}>Biometric Login</Text>
        <Switch style={styles.switche}
          trackColor={{ false: '#E0E0E0', true: '#44E'  }}
          thumbColor={isBiometricEnabled ? 'white' : 'white'}
          ios_backgroundColor="##F5F5F5"
          onValueChange={toggleSwitch}
          value={isBiometricEnabled}
        />
        
      </View>
      <View style={styles.divider}></View>

      
    </View>
  )
}

export default BusinessSettingScreen

const styles = StyleSheet.create({
   container:{
   flex: 1,
   },
   header:{
    flexDirection: "row",
    gap: 122,
    marginTop: 50,
    marginLeft: 14,
  
   },
   supportText:{
    fontWeight: "700",
    fontSize: 16,
   },
   textRow:{
    flexDirection: "row",
    marginTop: 25,
    marginLeft: 14,
   }, marginLeft: 14,
   passwordText:{
    fontSize: 15,
    
   },
   divider:{
    width: "95%",
    height: 1,
    backgroundColor: "#ccc",
    alignItems:"center"
   },
   icons:{
    marginLeft: "auto",
   },
   switche:{
    marginLeft: "auto",
   }

})  