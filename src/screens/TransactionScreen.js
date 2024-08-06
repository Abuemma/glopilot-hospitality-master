import React, { useState } from 'react';
import { Ionicons, MaterialIcons , SimpleLineIcons} from 'react-native-vector-icons';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const transactions = [
  { id: '1', type: 'NIP Commission', date: 'Aug 28, 2023, 5:49 PM', amount: '₦25.00', status: 'Success', icon: 'N' },
  { id: '2', type: 'Bank Transfer', date: 'Aug 28, 2023, 5:49 PM', amount: '₦1,575.00', status: 'Success', icon: 'A' },
  { id: '3', type: 'NIP Commission', date: 'Aug 28, 2023, 5:49 PM', amount: '₦25.00', status: 'Success', icon: 'N' },
  { id: '4', type: 'NIP Commission', date: 'Aug 28, 2023, 5:49 PM', amount: '₦25.00', status: 'Refunded', icon: 'N' },
  { id: '5', type: 'Bank Transfer', date: 'Aug 28, 2023, 5:49 PM', amount: '₦1,575.00', status: 'Success', icon: 'A' },
  { id: '6', type: 'Bank Transfer', date: 'Aug 28, 2023, 5:49 PM', amount: '₦1,575.00', status: 'Success', icon: 'A' },
  { id: '8', type: 'NIP Commission', date: 'Aug 28, 2023, 5:49 PM', amount: '₦25.00', status: 'Success', icon: 'N' },
  { id: '9', type: 'NIP Commission', date: 'Aug 28, 2023, 5:49 PM', amount: '₦25.00', status: 'Success', icon: 'N' },
  { id: '10', type: 'NIP Commission', date: 'Aug 28, 2023, 5:49 PM', amount: '₦25.00', status: 'Success', icon: 'N' },
];

const TransactionScreen = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('Tab1');

  const renderTransaction = ({ item }) => (
   <TouchableOpacity onPress={() => navigation.navigate('Receipt')}>
   <View style={styles.rowDetails}>
      <View style={styles.icon}>
        <Text>{item.icon}</Text>
      </View>
      <View style={styles.columnDetails}>
        <Text style={styles.type}>{item.type}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
      <View style={styles.columnDetails2}>
        <Text style={styles.amount}>{item.amount}</Text>
        <Text style={styles.status}>{item.status}</Text>
      </View>
    </View>
    </TouchableOpacity> 
  );

  const renderContent = () => {
    if (activeTab === 'Tab1') {
      return (
        <View style={styles.content}>
          <View style={styles.rowContainer}>
          <View style={styles.rowInput}>
            <MaterialIcons name='search' size={20} color="#000" style={styles.icon1} />
            <TextInput 
            style={styles.input} 
            placeholder="Search" 
            placeholderTextColor="#888"
            />
            </View>
            <SimpleLineIcons style={styles.searchIcon} name='calendar' size={13} />
          </View>
          <FlatList
            data={transactions}
            renderItem={renderTransaction}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.transactionList}
            showsVerticalScrollIndicator={false}
          />
        </View>
      );
    } else {
      return (
        <View style={styles.content}>
          <View style={styles.rowContainer}>
          <View style={styles.rowInput}>
            <MaterialIcons name='search' size={20} color="#000" style={styles.icon1} />
            <TextInput style={styles.input} placeholder="Search" placeholderTextColor="#888"/>
          </View>
          <SimpleLineIcons style={styles.searchIcon} name='calendar' size={13} />
          </View>
          <View style={styles.transactCenter}>
            <SimpleLineIcons style={styles.transactIcon} name='calendar' size={20} />
            <Text style={styles.transactText}>No Transaction Record</Text>
            <Text style={styles.conductText}>You havent conducted any transaction yet</Text>
            
          </View>
          <ScrollView style={styles.content} ></ScrollView>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.transactionText}>Transactions</Text>
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Tab1' && styles.activeTab]}
          onPress={() => setActiveTab('Tab1')}
        >
          <Text style={[styles.tabText, activeTab === 'Tab1' && styles.activeTabText]}>Personal</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Tab2' && styles.activeTab]}
          onPress={() => setActiveTab('Tab2')}
        >
          <Text style={[styles.tabText, activeTab === 'Tab2' && styles.activeTabText]}>Business</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        {renderContent()}
      </View>
    </View>
  );
};

export default TransactionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  transactionText: {
    marginTop: 55,
    marginLeft: 18,
    fontWeight: '600',
    fontSize: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  tab: {
    paddingVertical: 15,
    width: '50%',
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: 'indigo',
  },
  tabText: {
    fontSize: 16,
    color: 'gray',
  },
  activeTabText: {
    color: 'black',
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 10,
  },
  input: {
    color: '#757575',
    height: 45,
    width: '400%',
    backgroundColor: '#E0E0E0',
    padding: 10,
    marginTop: 10,
    fontSize: 16,
    borderRadius: 50,
  },
  searchIcon: {
    backgroundColor: '#E0E0E0',
    padding: 14,
    borderRadius: 40,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    padding: 10,

  },
  icon: {
    backgroundColor: "#F3E5F5",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    marginLeft: -10,
    marginRight: 10,
  },
  columnDetails: {
    flex: 1,
  },
  columnDetails2: {
    alignItems: 'flex-end',
  },
  type:{
    fontWeight: "700",
    fontSize: 16,
  },
  date:{
    fontSize: 10,
    color: "#1c2a3a",
    fontWeight: "600",
  },
  amount:{
    fontWeight: "700",
    fontSize: 16

  },
  status:{
    fontSize: 10,
    color: "#1c2a3a",
    fontWeight: "600",

  },
  rowInput:{
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 25,
    paddingHorizontal: 10,
    width: '80%',
    margin: 10,
    position: 'relative', 
    backgroundColor: "#E0E0E0",

  },
  icon1: {
    position: 'absolute',
    left: 15,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 35,
    fontSize: 16,
  },
  transactCenter:{
    alignItems: "center",
    marginTop: 65, 

  },
  transactIcon:{
    borderRadius: 44,
    backgroundColor: "#F3E5F5",
    padding: 30,

  },
  transactText:{
    fontWeight: "bold",
    marginTop: 23,

  },
  conductText:{
    marginTop: 15,
    fontSize: 12,
  }

});
