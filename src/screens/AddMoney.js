import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Switch, Button } from 'react-native';
import { MaterialIcons, FontAwesome5 } from 'react-native-vector-icons';

const AddMoney   = ({ navigation }) => {
  const [amount, setAmount] = useState('');
  const [notes, setNotes] = useState('');
  const [isBeneficiarySaved, setIsBeneficiarySaved] = useState(false);
 
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={25} color="black" />
        </TouchableOpacity>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>JOSIAH ADEAGBO</Text>
          <Text style={styles.userDetails}>7054867271 • PalmPay</Text>
        </View>
        <FontAwesome5 name="user-circle" size={30} color="green" />
      </View>


      <View style={styles.feeContainer}>
        <Text style={styles.feeText}>Transfer fee: ₦5</Text>
        <FontAwesome5 name="info-circle" size={20} color="black" />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.currencySymbol}>₦</Text>
        <TextInput
          style={styles.input}
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
          placeholder="0.00"
        />
      </View>

      <View style={styles.notesContainer}>
        <TextInput
          style={styles.notesInput}
          value={notes}
          onChangeText={setNotes}
          placeholder="Add notes (optional)"
          maxLength={40}
        />
        <Text style={styles.notesLength}>{notes.length}/40</Text>
      </View>

      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Save beneficiary for future?</Text>
        <Switch
          value={isBeneficiarySaved}
          onValueChange={setIsBeneficiarySaved}
        />
      </View>
      
      <View style={styles.transferContainer}>
      <Text style={styles.transferText}>Transfer from</Text>
      <View style={styles.transferFromContainer}>
        <FontAwesome5 name="university" size={25} color="green" />
        <View style={styles.bankDetails}>
          <Text style={styles.bankName}>FairMoney bank account</Text>
          <Text style={styles.bankBalance}>₦80</Text>
        </View>
      </View>
      </View>


      <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('Beneficiary')}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

export default AddMoney ;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  userInfo: {
    flex: 1,
    marginLeft: 15,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userDetails: {
    fontSize: 14,
    color: 'gray',
  },
  feeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E3F2FD',
    padding: 5,
    borderRadius: 5,
    marginBottom: 20,
  },
  feeText: {
    flex: 1,
    color: 'gray',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EFEBE9',
    marginBottom: 20,
  },
  currencySymbol: {
    fontSize: 20,
    marginRight: 10,
    fontWeight: "bold",
  },
  input: {
    flex: 1,
    fontSize: 16,
    height: 40,
  },
  notesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EFEBE9',
    marginBottom: 15,
  },
  notesInput: {
    flex: 1,
    fontSize: 14,
    color: "grey",
  },
  notesLength: {
    color: 'gray',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  switchLabel: {
    fontSize: 14,
    color: "grey",
  },
  transferContainer:{
    marginTop: 270,
  },
  transferText:{
    fontSize: 13,
    COLOR: "grey" ,
  },
  transferFromContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  bankDetails: {
    marginLeft: 10,
  },
  bankName: {
    fontSize: 16,
  },
  bankBalance: {
    fontSize: 14,
    color: 'gray',
  },
  continueButton: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
    borderRadius: 20,
  },
  continueButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "white"
  },
});
