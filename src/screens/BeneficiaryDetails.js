import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons';

const BeneficiaryDetails = ({ navigation }) => {
  const [accountNumber, setAccountNumber] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.rowDetails}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons style={styles.icon} name="arrow-back" size={25} color="black" />
        </TouchableOpacity>
        <View style={styles.columnText}>
          <Text style={styles.header}>Beneficiary details</Text>
          <Text style={styles.subHeader}>Enter account number</Text>
        </View>
      </View>
      <View style={styles.rowInput}>
        <TextInput
          style={styles.input}
          value={accountNumber}
          onChangeText={setAccountNumber}
          keyboardType="numeric"
          maxLength={10}
        />
        <Text style={styles.inputText}>{accountNumber.length}/10</Text>
      </View>
      <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('ReviewTransfer')}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

export default BeneficiaryDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 25,
  },
  rowDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: -10,
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  columnText: {
    flexDirection: 'column',
    marginLeft: 5,
  },
  header: {
    fontSize: 14,
    color: 'gray',
  },
  subHeader: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rowInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    borderColor: 'grey',
    borderWidth: 1,
    paddingHorizontal: 10,

  },
  input: {
    flex: 1,
    height: 40,
    marginRight: 10,
  },
  inputText: {
    color: 'gray',
  },
  continueButton: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
    borderRadius: 20,
    marginTop: "auto",
  },
  continueButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "white"
  },
});
