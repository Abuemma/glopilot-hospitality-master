import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, Modal } from 'react-native';
import React, { useState } from 'react';
import { FontAwesome5, Ionicons } from 'react-native-vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Login = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const passwordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const storeData = async () => {
    try {
      await AsyncStorage.setItem('@username', username,);
    } catch (error) {
    }
    navigation.navigate(' Home'); 
  };
  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert('Error', 'Please fill in both username and password.');
      return;
      }
    storeData(username);
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome Back😊</Text>
      <Text style={styles.watchword}>Enter your details to Login</Text>
      <View style={styles.iconalign}>
        <FontAwesome5 name='user-circle' size={20}  style={styles.icon1} />
        <View style={styles.rowInput}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#888"
            onChangeText={setUsername}
            value={username}
          />
        </View>
      </View>
      
      <View style={styles.iconalign}>
        <FontAwesome5 name='lock' size={20}  style={styles.icon1} />
        <View style={styles.rowInput}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#888"
            secureTextEntry={!passwordVisible}
            onChangeText={setPassword}
            value={password}
          />
          <TouchableOpacity onPress={passwordVisibility}>
            <Ionicons name={passwordVisible ? 'eye-outline' : 'eye-off-outline'} color={'indigo'} size={24} />
          </TouchableOpacity>
        </View>
      </View>
      

      <TouchableOpacity style={styles.signButton} onPress={handleLogin}>
        <Text style={styles.btntext}>Login</Text>
      </TouchableOpacity> 


      <TouchableOpacity style={styles.forgotButton} onPress={() => navigation.navigate('Bank')}>
          <Text style={styles.forgotText}>Forgot Password</Text>
      </TouchableOpacity> 

      <View style={styles.rowLogin}>
      <Text>Dont have an account?</Text>
      <TouchableOpacity style={styles.login} onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.btntext1}>SignUp</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}


export default Login

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white',
  },
  header:{
    marginTop: 90,
    color: 'indigo' ,
    textAlign: "center",
    fontSize: 36,
    fontWeight: 'bold',
  },
  watchword:{
    color: 'indigo',
    marginLeft: -25,
    textAlign: "center",
    fontweight: 'bold',
    fontSize: 14,
    marginTop: 1,
  },  
  signButton:{
    backgroundColor: 'indigo',
    color: 'white',
    padding: 20,
    alignItems: "center",
    width: 200,
    marginTop: 52,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 20,
  },

  btntext:{
    color: '#ffffff'
  },
  btntext2:{
    color: 'black',
    alignItems: "center",
    textAlign: "center",
    fontSize: 15,
    marginTop:15,
  },
  login:{
    backgroundColor: "white",
    textAlign: "center",
    alignSelf: "center",
  },
  btntext1:{
    color: 'blue',
    fontStyle: 'italic',
  },
  iconalign:{
    flexDirection: "row",
    marginTop: 42,
    alignSelf: "center",
    borderRadius: 7,
    height: 65,
    backgroundColor: "#F3E5F5",
    alignItems: 'center',
    gap:10,
  },
  icon1: {
    position: 'relative',
    left: 6,
    color: "indigo", 
  },
  rowInput: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    margin: 10,
    position: 'relative',
    color: 'indigo',
  },
  input: {
    flex: 1,
    height: 45,
    fontSize: 16,
    marginBottom: 3,
    color: "black",
    marginLeft: -3,
    color: 'indigo',
    backgroundColor: "#F3E5F5",
  },
  forgotText:{
    color: 'red',
    
  },
  forgotButton:{
    padding: 10,
    alignItems: "center",
    marginTop: 65,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 12,
    padding: 10,
    borderRadius: 100,  
  },
  rowLogin:{
    flexDirection: 'row',
    alignItems: "center",
    marginTop: 55,
    gap:5,
    alignSelf: "center"  },
})