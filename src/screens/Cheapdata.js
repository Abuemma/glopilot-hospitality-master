import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, FlatList, Dimensions } from 'react-native';
import React, { useState, useRef } from 'react';
import { MaterialIcons, FontAwesome5 } from 'react-native-vector-icons';
import BottomSheet from '@gorhom/bottom-sheet';
import { useNavigation } from '@react-navigation/native';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
const { height, width } = Dimensions.get('window');

const Cheapdata = ({ navigation }) => {
  const [selected, handlePress] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const bottomSheetRef = useRef(null);
  const scrollViewRef = useRef(null);

  const discos = [
    {data:'500MB SME - 30 DAYS #100'},
    {data:'1GB SME - 30 DAYS #200'},
    {data:'2GB SME - 30 DAYS #500'},
    {data:'3GB SME - 30 DAYS #800'},
    {data: '5GB SME - 30 DAYS #1500'},
  ];



  const handleShowBottomSheet = () => {
    bottomSheetRef.current?.expand();

  };

  const handleSelectDisco = (disco) => {
    setSearchQuery(disco);
    bottomSheetRef.current?.close();
  };


  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.rowheader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons style={styles.icons} name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Cheap Data</Text>
      </View>
      <View style={styles.col}>
        <View style={styles.row}>
          <TouchableOpacity
            style={[
              styles.detailsrow,
              selected === 'MTN' && styles.selectedBorder
            ]}
            onPress={() => handlePress('MTN')}
          >
            <Image source={require('../assets/download.png')} style={styles.icon} />
            <Text>MTN</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.detailsrow,
              selected === 'AIRTEL' && styles.selectedBorder
            ]}
            onPress={() => handlePress('AIRTEL')}
          >
            <Image source={require('../assets/airtelicon.png')} style={styles.icon} />
            <Text>AIRTEL</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={[
              styles.detailsrow,
              selected === '9MOBILE' && styles.selectedBorder
            ]}
            onPress={() => handlePress('9MOBILE')}
          >
            <Image source={require('../assets/9mobile.png')} style={styles.icon} />
            <Text>9MOBILE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.detailsrow,
              selected === 'GLO' && styles.selectedBorder
            ]}
            onPress={() => handlePress('GLO')}
          >
            <Image source={require('../assets/glo.png')} style={styles.icon} />
            <Text>GLO</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity onPress={handleShowBottomSheet}>
        <View style={styles.iconalign}>
          <View style={styles.rowInput}>
            <TextInput
              style={styles.input}
              placeholder="Choose Data Plan"
              placeholderTextColor="#888"
              editable={false}
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
          <MaterialIcons name='keyboard-arrow-down' size={20} color="blue" style={styles.icon1} />
        </View>
      </TouchableOpacity>

      

      <View style={styles.iconalign}>
        <View style={styles.rowInput}>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            placeholderTextColor="#888"
          />
        </View>
        <FontAwesome5 name='user-circle' size={20} color="blue" style={styles.icon1} />
      </View>

      <View style={styles.rowInput1}>
        <TextInput
          style={styles.input2}
          placeholder="From"
          placeholderTextColor="#888"
        />
        <View style={styles.column}>
          <Text>Personal Account</Text>
          <Text style={styles.nairaText}>#0.00</Text>
        </View>
      </View>

      <TouchableOpacity>
        <Text style={styles.payText}>Pay</Text>
      </TouchableOpacity>
      <BottomSheet ref={bottomSheetRef} index={-1} enablePanDownToClose={true} snapPoints={['25%', '60%']} style={styles.bottomSheet}
      >
        <View style={styles.bottomSheetContainer}>
          <Text style={styles.bottomSheetHeader}>Data Plans</Text>
            <FlatList
              data= {discos}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleSelectDisco(item.data)} style={styles.bottomSheetItem}>
                  <Text style={styles.bottomSheetText}>{item.data}</Text>
                </TouchableOpacity>
              )}
            />
        </View>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}

export default Cheapdata;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 0,
  },
  rowheader: {
    flexDirection: 'row',
    marginTop: 40,
    marginBottom: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 100,
    color: "#000",
  },
  icons: {
    paddingHorizontal: 10,
  },
  detailsrow: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 34,
    paddingVertical: 9,
    width: '41%',
    gap: 27,
    alignItems: "center",
  },
  selectedBorder: {
    borderColor: "indigo",
    borderWidth: 1,
  },
  row: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "space-evenly",
    marginBottom: 15,
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 12,
    padding: 10,
    borderRadius: 100,
  },
  rowInput: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    width: '85%',
    margin: 10,
    position: 'relative',
  },
  icon1: {
    position: 'relative',
    right: 10,
    marginTop: 12,
    color: "indigo"
  },
    input: {
      flex: 1,
      height: 40,
      fontSize: 16,
      marginBottom: 15,
      marginLeft: -12,
      color: "black",
    },
  iconalign: {
    flexDirection: "row",
    marginTop: 22,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 7,
    height: 50,
  },
  input2: {
    height: 40,
    paddingHorizontal: 10,
    fontSize: 12,
    width: "95%",
    alignSelf: "center",
    borderColor: '#ddd',
    marginTop: 15,
    position: 'relative',
    alignItems: "center",
    marginBottom: 15,
  },
  column: {
    alignItems: "flex-end",
    position: 'absolute',
    right: 15,
    color: "indigo",
  },
  nairaText: {
    fontWeight: "700",
  },
  rowInput1: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 7,
    paddingHorizontal: 5,
    width: '95%',
    margin: 10,
    position: 'relative',
    backgroundColor: "#F3E5F5",
  },
  payText: {
    backgroundColor: "indigo",
    color: "#fff",
    paddingVertical: 10,
    width: "80%",
    alignSelf: "center",
    borderRadius: 4,
    textAlign: "center",
    marginTop: 30,
    fontSize: 18,
    fontWeight: "700",
  },
  bottomSheet: {
    zIndex: 1,  // Ensure the bottom sheet is above other elements
  },
  bottomSheetContainer: {
    flex: 1,
    paddingTop: 10,
  },
  bottomSheetHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
    backgroundColor: "indigo",
    width: '30%',
    borderRadius: 10,
    marginLeft: 20,
    paddingHorizontal: 5,
  },
  bottomSheetItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  bottomSheetText: {
    fontSize: 16,
    marginBottom: 10,
    color: "indigo",
  },
  searchInput: {
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 7,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    width: '100%',
    marginVertical: 10,
  }
});
