import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import { MaterialIcons, FontAwesome5 } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Modal } from 'react-native-paper';

const AirtimeScreen = ({navigation}) => {
  const [selected, handlePress] = useState(null);
  const [activeTab, setActiveTab] = useState(null);

  return (
    <View>
      <View style={styles.rowheader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons style={styles.icons} name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Airtime</Text>
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
            <Image source={require('../assets/download.png')} style={styles.icon}/>
            <Text>MTN</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[
              styles.detailsrow, 
              selected === 'AIRTEL' && styles.selectedBorder
            ]}
            onPress={() => handlePress('AIRTEL')}
          >
            <Image source={require('../assets/airtelicon.png')} style={styles.icon}/>
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
            <Image source={require('../assets/9mobile.png')} style={styles.icon}/>
            <Text>9MOBILE</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[
              styles.detailsrow, 
              selected === 'GLO' && styles.selectedBorder
            ]}
            onPress={() => handlePress('GLO')}
          >
            <Image source={require('../assets/glo.png')} style={styles.icon}/>
            <Text>GLO</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.amountText}>Choose Amount</Text>

      <View style={styles.col}>
        <View style={styles.row1}>
        <TouchableOpacity 
            style={[
              styles.textAmount, 
              activeTab === '50' && styles.selectedBorder
            ]}
            onPress={() => setActiveTab('50')}
          >
            <Text>50</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[
              styles.textAmount, 
              activeTab === '100' && styles.selectedBorder
            ]}
            onPress={() => setActiveTab('100')}
          >
            <Text>100</Text>
          </TouchableOpacity>     
          <TouchableOpacity 
            style={[
              styles.textAmount, 
              activeTab === '200' && styles.selectedBorder
            ]}
            onPress={() => setActiveTab('200')}
          >
            <Text>200</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row2}>
        <TouchableOpacity 
            style={[
              styles.textAmount, 
              activeTab === '500' && styles.selectedBorder
            ]}
            onPress={() => setActiveTab('500')}
          >
            <Text>500</Text>
          </TouchableOpacity>     
          <TouchableOpacity 
            style={[
              styles.textAmount, 
              activeTab === '1000' && styles.selectedBorder
            ]}
            onPress={() => setActiveTab('1000')}
          >
            <Text>1000</Text>
          </TouchableOpacity>        
          <TouchableOpacity 
            style={[
              styles.textAmount, 
              activeTab === '2000' && styles.selectedBorder
            ]}
            onPress={() => setActiveTab('2000')}
          >
            <Text>2000</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.iconalign}>
        <View style={styles.rowInput}>
          <TextInput 
            style={styles.input} 
            placeholder="Phone Number" 
            placeholderTextColor="#888"
          />
        </View>
        <FontAwesome5 name='user-circle' size={20} color="blue" style={styles.icon1}/>
      </View>

      <TextInput 
        style={styles.input1} 
        placeholder="Amount" 
        placeholderTextColor="#888"
      /> 

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

      <TouchableOpacity onPress={() => navigation.navigate('Pass')}>
        <Text style={styles.payText}>Pay</Text>
      </TouchableOpacity>
    </View>
  );
}

export default AirtimeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
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
  amountText: {
    color: "indigo",
    marginLeft: 15,
  },
  col: {
    flexDirection: "column",
  },
  row1: {
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  row2: {
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  textAmount: {
    marginTop: 15,
    paddingVertical: 15,
    paddingHorizontal: 40,
    backgroundColor: "#F3E5F5",
    borderRadius: 6
  },
  rowInput: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    width: '85%',
    margin: 10,
    position: 'relative', 
    alignSelf: "center",

  },
  icon1: {
    position: 'relative',
    right: 10,
    marginTop: 12,
    color: "indigo"
  },
  input: {
    height: 40,
    paddingHorizontal: -10,
    fontSize: 16,
    width: "100%",
    alignSelf:"center",
    marginTop: 15,
    marginBottom: 15,
    marginLeft: -10,
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
  input1: {
    height: 40,
    paddingHorizontal: 10,
    fontSize: 16,
    borderWidth: 1,
    width: "95%",
    alignSelf:"center",
    borderColor: '#ddd',
    marginTop: 15,
    marginBottom: 15,
  },
  input2: {
    height: 40,
    paddingHorizontal: 10,
    fontSize: 12,
    width: "95%",
    alignSelf:"center",
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
    marginTop: 60,
    paddingVertical: 15,
    paddingHorizontal: 40,
    backgroundColor: "indigo",
    borderRadius: 6,
    alignSelf: "center",
    width: "89%",
    borderRadius: 24,
    textAlign: "center",
    color: "white",
  },
});
