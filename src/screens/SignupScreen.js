import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Fontisto, FontAwesome5, Ionicons } from 'react-native-vector-icons';

const SignupScreen = ({ navigation }) => {
  const [PasswordVisible, setPasswordVisible] = useState(false);
  const [PasswordVisible2, setPasswordVisible2] = useState(false);

  const PasswordVisibility = () => {
    setPasswordVisible(!PasswordVisible);
  };

  const PasswordVisibility2 = () => {
    setPasswordVisible2(!PasswordVisible2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign up🚀</Text>
      <Text style={styles.watchword}>Create your account</Text>
      <View style={styles.iconalign}>
        <FontAwesome5 name='user-circle' size={20} style={styles.icon1} />
        <View style={styles.rowInput}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#888"
          />
        </View>
      </View>
      <View style={styles.iconalign}>
        <Fontisto name='email' size={20} style={styles.icon1} />
        <View style={styles.rowInput}>
          <TextInput
            style={styles.input}
            placeholder="Email address"
            placeholderTextColor="#888"
          />
        </View>
      </View>
      <View style={styles.iconalign}>
        <FontAwesome5 name='lock' size={20} style={styles.icon1} />
        <View style={styles.rowInput}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#888"
            secureTextEntry={!PasswordVisible}
          />
          <TouchableOpacity onPress={PasswordVisibility}>
            <Ionicons name={PasswordVisible ? 'eye-outline' : 'eye-off-outline'} color={'indigo'} size={24} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.iconalign}>
        <FontAwesome5 name='lock' size={20} style={styles.icon1} />
        <View style={styles.rowInput}>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry={!PasswordVisible2}
          />
          <TouchableOpacity onPress={PasswordVisibility2}>
            <Ionicons name={PasswordVisible2 ? 'eye-outline' : 'eye-off-outline'} color={'indigo'} size={24} />
          </TouchableOpacity>
        </View>
      </View>
      
      <TouchableOpacity style={styles.signButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.btntext}>Sign up</Text>
      </TouchableOpacity> 
      <Text style={styles.btntext2}>Or</Text>

      <TouchableOpacity style={styles.mailButton}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <Image source={require('../assets/gmail.png')} style={styles.icon} />
          <Text style={styles.btntext3}>Sign up with Gmail</Text>
        </View>
      </TouchableOpacity> 

      <View style={styles.rowLogin}>
        <Text>Already have an account?</Text>
        <TouchableOpacity style={styles.login} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.btntext1}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    marginTop: 90,
    color: 'indigo',
    textAlign: "center",
    fontSize: 36,
    fontWeight: 'bold',
  },
  watchword: {
    color: 'indigo',
    marginLeft: -25,
    textAlign: "center",
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 1,
  },
  signButton: {
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
  btntext: {
    color: '#ffffff'
  },
  btntext2: {
    color: 'black',
    alignItems: "center",
    textAlign: "center",
    fontSize: 15,
    marginTop: 15,
  },
  login: {
    backgroundColor: "white",
    textAlign: "center",
    alignSelf: "center",
  },
  btntext1: {
    color: 'blue',
    fontStyle: 'italic',
  },
  iconalign: {
    flexDirection: "row",
    marginTop: 22,
    alignSelf: "center",
    borderRadius: 7,
    height: 59,
    alignItems: "center",
    backgroundColor: "#F3E5F5",
    gap: 10,
  },
  icon1: {
    position: 'relative',
    left: 6,
    color: "indigo",
    alignItems: "center"
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
  mailButton: {
    color: 'indigo',
    padding: 10,
    alignItems: "center",
    width: '70%',
    marginTop: 15,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
    height: 43,
    borderColor: "indigo",
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 12,
    padding: 10,
    borderRadius: 100,
  },
  rowLogin: {
    flexDirection: 'row',
    alignItems: "center",
    marginTop: 40,
    gap: 5,
    alignSelf: "center"
  },
});
