import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons, SimpleLineIcons, MaterialIcons } from 'react-native-vector-icons/';

const BankTransferScreen = ({navigation}) => {
  return (
    <View style={styles.container}>

      <View style={styles.rowheader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialIcons style={styles.icons} name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Bank Transfer</Text>
      </View>
      
      <Text style={styles.descriptionText}>Transfer money to your personal bank account and get your wallet funded</Text>
      
      <View style={styles.card}>
        <View style={styles.rowDetails}>
          <Text style={styles.detailsText}>Account Number</Text>
          <Text style={styles.detailsText1}>9606831944</Text>
          <Ionicons name="copy-outline" size={20} color="#283593" />
        </View>
        <View style={styles.rowDetails2}>
          <Text style={styles.detailsText}>Account Name</Text>
          <Text style={styles.detailsText1}>FIGUR / JOSIAH ADEAGBO</Text>
        </View>
        <View style={styles.rowDetails2}>
          <Text style={styles.detailsText}>Bank Name</Text>
          <Text style={styles.detailsText1}>Providus</Text>
        </View>
      </View>
      
      <View style={styles.card}>
        <View style={styles.rowDetails}>
          <Text style={styles.detailsText}>Account Number</Text>
          <Text style={styles.detailsText1}>8015347206</Text>
          <Ionicons name="copy-outline" size={20} color="#283593" />
        </View>
        <View style={styles.rowDetails2}>
          <Text style={styles.detailsText}>Account Name</Text>
          <Text style={styles.detailsText1}>FIGUR / JOSIAH ADEAGBO</Text>
        </View>
        <View style={styles.rowDetails2}>
          <Text style={styles.detailsText}>Bank Name</Text>
          <Text style={styles.detailsText1}>Safe Haven MFB</Text>
        </View>
      </View>

    </View>
  )
}

export default BankTransferScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  rowheader: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    alignItems: 'center',
    
  },
  headerText: {
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 50,
    color: "#000",
  },
  icons: {
    paddingHorizontal: 10,
  },
  descriptionText: {
    fontSize: 14,
    marginBottom: 20,
    color: "#666",
    textAlign: "center",
    fontWeight: "400",
  },
  card: {
    flexDirection: "column",
    borderRadius: 12,
    borderColor: "indigo",
    borderWidth: 2,
    padding: 10,
    marginBottom: 15,
  },
  rowDetails: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 9,
  },
  detailsText1: {
    marginLeft: "auto",
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
  },
  rowDetails2: {
    flexDirection: "row",
    justifyContent: 'space-between',
    marginVertical: 9,
  },
  detailsText: {
    fontSize: 14,
    color: "black",
    fontWeight: "500",
  }
})
