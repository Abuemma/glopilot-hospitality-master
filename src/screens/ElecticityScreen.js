import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, Dimensions } from 'react-native';
import { MaterialIcons, FontAwesome5, Ionicons } from 'react-native-vector-icons';
import BottomSheet from '@gorhom/bottom-sheet';
import 'react-native-gesture-handler';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
const { height, width } = Dimensions.get('window');

const ElectricityScreen = ({ navigation }) => {
  const [selected, setSelected] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const bottomSheetRef = useRef(null);

  const discos = [
    'Ikeja Electric Distribution Company (IEDC)',
    'Eko Electric Distribution Company (EEDC)',
    'Kano Electric Distribution Company (KEDC)',
    'Port Harcourt Electric Distribution Company (PHEDC)',
    'Jos Electric Distribution Company (JEDC)',
    'Ibadan Electric Distribution Company (IEDC)',
    'Enugu Electric Distribution Company (EEDC)',
    'Kaduna Electric Distribution Company (KEDC)',
  ];

  const filteredDiscos = discos.filter(disco =>
    disco.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleShowBottomSheet = () => {
    bottomSheetRef.current?.expand();
  };

  const handleSelectDisco = (disco) => {
    setSearchQuery(disco);
    bottomSheetRef.current?.close();
  };

  // Function to truncate the text
  const truncateText = (text, limit) => {
    if (text.length > limit) {
      return text.substring(0, limit) + '...';
    }
    return text;
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.rowheader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons style={styles.icons} name="arrow-back" size={25} color="indigo" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Electricity</Text>
      </View>

      <View style={styles.switchContainer}>
        <TouchableOpacity
          style={[styles.switchButton, selected === 'Prepaid' && styles.selectedSwitch]}
          onPress={() => setSelected('Prepaid')}
        >
          <View style={styles.rowDetails}>
            {selected === 'Prepaid' && (
              <Ionicons style={styles.icons2} name="checkmark-sharp" size={12} color="white" />
            )}
            <Text style={styles.switchText}>Prepaid</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.switchButton, selected === 'Postpaid' && styles.selectedSwitch]}
          onPress={() => setSelected('Postpaid')}
        >
          <View style={styles.rowDetails}>
            {selected === 'Postpaid' && (
              <Ionicons style={styles.icons2} name="checkmark-sharp" size={12} color="white" />
            )}
            <Text style={styles.switchText}>Postpaid</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.iconalign}>
        <View style={styles.rowInput}>
          <TextInput 
            style={styles.input} 
            placeholder="Enter Meter Number" 
            placeholderTextColor="#888"
            keyboardType='number-pad'
          />
        </View>
        <FontAwesome5 name='user-circle' size={20} color="blue" style={styles.icon1}/>
      </View>

      <TouchableOpacity onPress={handleShowBottomSheet} >
      <View style={styles.iconalign}>
        <View style={styles.rowInput}>
          <TextInput 
            style={styles.input} 
            placeholder="Choose Electricity disco" 
            placeholderTextColor="#888"
            value={truncateText(searchQuery, 39)} // Adjust character limit as needed
            editable={false}
            multiline={true}
            numberOfLines={1}
          />
        </View>
        <MaterialIcons name='keyboard-arrow-down' size={20} color="blue" style={styles.icon1} />
      </View>
      </TouchableOpacity>

      <View style={styles.iconalign}>
        <View style={styles.rowInput}>
          <TextInput 
            style={styles.input} 
            placeholder="Amount" 
            placeholderTextColor="#888"
            keyboardType='number-pad'
          />
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Pass')}>
        <Text style={styles.buttonText}>Proceed</Text>
      </TouchableOpacity>

      <BottomSheet ref={bottomSheetRef} index={-1} enablePanDownToClose={true} snapPoints={['25%', '60%']}>
        <View style={styles.bottomSheetContainer}>
          <Text style={styles.bottomSheetHeader}>Electricity Discos</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search Network"
            placeholderTextColor="#888"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />

            <FlatList
              data={filteredDiscos}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleSelectDisco(item)} style={styles.bottomSheetItem}>
                  <Text style={styles.bottomSheetText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
            <View style={styles.divider}></View>

        </View>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}

export default ElectricityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
  },
  rowheader: {
    flexDirection: 'row',
    marginTop: 50,
    marginBottom: 40,
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
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  switchButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    marginHorizontal: 5,
  },
  selectedSwitch: {
    borderColor: 'indigo',
    backgroundColor: '#E3F2FD',
  },
  icons2: {
    borderRadius: 10,
    backgroundColor: "blue",
    alignSelf: "center",
    paddingHorizontal: 2,
    paddingVertical: 2,
  },
  switchText: {
    fontSize: 16,
    color: '#000',
  },
  rowDetails: {
    flexDirection: "row",
    gap: 12,
  },
  input: {
    fontSize: 15,
    color: "black",
    textAlign: "left",
    width: width - 80, // Adjust width as needed
  },
  iconalign: {
    flexDirection: "row",
    marginTop: 22,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 7,
    height: 50,
    width: width - 40, // Adjust width as needed
  },
  rowInput: {
    width: '90%',
    margin: 10, 
  },
  icon1: {
    position: 'relative',
    right: 10,
    marginTop: 12,
    color: "indigo",
  },
  button: {
    backgroundColor: 'indigo',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  bottomSheetContainer: {
    padding: 20,
  },
  bottomSheetHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  searchInput: {
    borderColor: 'indigo',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    padding: 10,
  },
  bottomSheetItem: {
    paddingVertical: 15,
    color: 'indigo',
  },
  bottomSheetText: {
    fontSize: 16,
    color: 'indigo',
  },
  divider: {
    borderBottomColor: 'indigo',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});
