import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import React from 'react';
import { MaterialIcons, Fontisto, SimpleLineIcons, Ionicons } from 'react-native-vector-icons';

const FundScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowheader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons style={styles.icons} name="arrow-back" size={24} color="indigo" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Fund with USSD</Text>
      </View>
      <Text style={styles.instructionText}>Enter the amount you want to add to your figure account and tap the USSD code below to dial it.</Text>
      
      <TextInput 
        style={styles.input}
        placeholder="Enter Amount"
        keyboardType="numeric"
      />
      
      <View style={styles.accountContainer}>
        <Text style={styles.accountText}>Personal Acct.</Text>
        <View style={styles.rowAccount}>
            <Text style={styles.accountNumber}>9606831944</Text>
            <TouchableOpacity>
            <Fontisto name="copy" size={16} color="black" />
            </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bankContainer}>
        <TouchableOpacity style={styles.bankRow}>
          <Image source={require('../assets/gtbank.png')} style={styles.icon}/>
            <View style={styles.bankcolumn}>
                <Text style={styles.bankText}>GTBank</Text>
                <Text style={styles.ussdCode}>*737*2*0*9606831944#</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bankRow}>
          <Image source={require('../assets/zenith.png')} style={styles.icon}/>
          <View style={styles.bankcolumn}>
            <Text style={styles.bankText}>Zenith Bank</Text>
            <Text style={styles.ussdCode}>*966*0*9606831944#</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bankRow}>
          <Image source={require('../assets/access.png')} style={styles.icon}/>
          <View style={styles.bankcolumn}>
            <Text style={styles.bankText}>Access Bank</Text>
            <Text style={styles.ussdCode}>*901*0*9606831944#</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bankRow}>
          <Image source={require('../assets/firstbank.png')} style={styles.icon}/>
          <View style={styles.bankcolumn}>
            <Text style={styles.bankText}>First Bank of Nigeria</Text>
            <Text style={styles.ussdCode}>*894*0*9606831944#</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bankRow}>
          <Image source={require('../assets/wema.png')} style={styles.icon}/>
          <View style={styles.bankcolumn}>
            <Text style={styles.bankText}>WEMA Bank</Text>
            <Text style={styles.ussdCode}>*945*0*9606831944#</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bankRow}>
          <Image source={require('../assets/polaris.png')} style={styles.icon}/>
          <View style={styles.bankcolumn}>
            <Text style={styles.bankText}>Polaris Bank</Text>
            <Text style={styles.ussdCode}>*833*0*9606831944#</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default FundScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
  },
  rowheader: {
    flexDirection: 'row',
    marginTop: 40,
    marginBottom: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 80,
    color: '#000',
  },
  icons: {
    paddingHorizontal: 10,
  },
  instructionText: {
    fontSize: 14,
    color: '#000',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  accountContainer: {
    backgroundColor: '#F3E5F5',
    padding: 15,
    borderRadius: 5,
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  rowAccount:{
    flexDirection: "row",
    gap:5,

  },
  accountText: {
    fontSize: 14,
    color: 'grey',
  },
  icon: {
    width: 30,
    height: 30,
    padding: 10,
    borderRadius: 100,
  },
  accountNumber: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  bankContainer: {

  },
  bankRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,

  },
  bankText: {

    fontSize: 14,
    marginLeft: 10,
    color: '#000',
  },
  ussdCode: {
    fontSize: 14,
    color: '#000',
    marginLeft: 10,
    fontWeight: "bold"

  },
});
