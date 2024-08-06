import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons, Fontisto } from 'react-native-vector-icons';

const banks = [
  { name: 'Access Bank (Diamond)', icon: 'account-balance' },
  { name: 'Lagos Building Investment Company Plc.', icon: 'account-balance' },
  { name: 'Ahmadu Bello University Microfinance Bank', icon: 'account-balance' },
  { name: 'Amju Unique MFB', icon: 'account-balance' },
  { name: 'CASHCONNECT MFB', icon: 'account-balance' },
  { name: 'FUTMINNA MICROFINANCE BANK', icon: 'account-balance' },
  { name: 'Goodnews Microfinance Bank', icon: 'account-balance' },
  { name: 'IBANK Microfinance Bank', icon: 'account-balance' },
  { name: 'Ibile Microfinance Bank', icon: 'account-balance' },
  { name: 'Ajanlekoko Microfinance Bank', icon: 'account-balance' },
  { name: 'Zazu Microfinance Bank', icon: 'account-balance' },
];

const sortedBanks = banks.sort((a, b) => a.name.localeCompare(b.name));
const alphabets = '#ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const BankListScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [selectedLetter, setSelectedLetter] = useState('');

  const filteredBanks = sortedBanks.filter(bank =>
    bank.name.toLowerCase().includes(searchText.toLowerCase()) &&
    (selectedLetter === '' || selectedLetter === '#' || bank.name.toUpperCase().startsWith(selectedLetter))
  );

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.icon}>
      <MaterialIcons name={item.icon} size={22}  />
      </View>
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  );

  const handleAlphabetPress = (letter) => {
    setSelectedLetter(letter);
    setSearchText('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} style={styles.icon2} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Beneficiary details</Text>
      </View>
      <Text style={styles.subText}>Select bank</Text>
      <View style={styles.rowSearch}>
        <Fontisto name="search" size={20} style={styles.icon2} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search here"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.bankListContainer}>
          <Text style={styles.banksText}>Suggested banks</Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={filteredBanks}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.listContainer}
          />
        </View>
        <View style={styles.alphabetContainer}>
          {alphabets.map((letter) => (
            <TouchableOpacity key={letter} onPress={() => handleAlphabetPress(letter)}>
              <Text style={[
                styles.alphabet, 
                selectedLetter === letter && styles.selectedAlphabet
              ]}>
                {letter}
              </Text>3
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginTop: 32,
  },
  headerText: {
    fontSize: 16,
    marginLeft: 43,
  },
  subText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 53,
    marginTop: -12,
  },
  searchInput: {
    height: 40,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 40,
  },
  icon2: {
    position: 'absolute',
    left: 10,
  },
  rowSearch: {
    flexDirection: 'row',
    alignSelf: 'center',
    borderRadius: 25,
    width: '90%',
    borderColor: '#ccc',
    alignItems: 'center',
    marginVertical: 10,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
  },
  bankListContainer: {
    flex: 1,
  },
  listContainer: {
    paddingHorizontal: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  icon: {
    marginRight: 15,
    borderRadius: 30,
    backgroundColor: '#EFEBE9',
    width: 40,
    height: 40,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center'
  },
  itemText: {
    fontSize: 16,
  },
  alphabetContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 9,
  },
  alphabet: {
    fontSize: 14,
    paddingVertical: 2,
    color: 'black',
  },
  selectedAlphabet: {
    color: 'gray',
  },
  banksText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    marginVertical: 10,
  },
});

export default BankListScreen;
