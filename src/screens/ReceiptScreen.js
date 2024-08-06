import { StyleSheet, Text, View,TouchableOpacity  } from 'react-native';
import React from 'react';
import { Ionicons, SimpleLineIcons, MaterialIcons } from 'react-native-vector-icons/';

const ReceiptScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowheader}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialIcons style={styles.icons} name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Receipt</Text>
        <SimpleLineIcons style={styles.icons} name="share" size={24} color="black" />
      </View>

      <View style={styles.centeramount}>
        <Text style={styles.amountText}>Amount</Text>
        <Text style={styles.amountText2}>₦1,575.00</Text>
      </View>

      <View style={styles.rowStatus}>
        <Text style={styles.statusText}>Status</Text>
        <Text style={styles.successText}>Success</Text>
      </View>
      <View style={styles.divider}></View>

      <View style={styles.detailRow}>
        <Text style={styles.labelText}>Destination Account Name</Text>
        <Text style={styles.valueText}>Ominyi Isaac Ogbu</Text>
      </View>
      <View style={styles.divider}></View>

      <View style={styles.detailRow}>
        <Text style={styles.labelText}>Destination Account Number</Text>
        <Text style={styles.valueText}>7054867271</Text>
      </View>
      <View style={styles.divider}></View>

      <View style={styles.detailRow}>
        <Text style={styles.labelText}>Destination Bank Name</Text>
        <Text style={styles.valueText}>PALMPAY</Text>
      </View>
      <View style={styles.divider}></View>

      <View style={styles.detailRow}>
        <Text style={styles.labelText}>Reference</Text>
        <Text style={styles.valueText}>20230828174937IHLEKQHB</Text>
      </View>
      <View style={styles.divider}></View>

      <View style={styles.detailRow}>
        <Text style={styles.labelText}>Description</Text>
        <Text style={styles.valueText}>Bank Transfer</Text>
      </View>
      <View style={styles.divider}></View>

      <View style={styles.detailRow}>
        <Text style={styles.labelText}>Amount</Text>
        <Text style={styles.valueText}>₦1,575.00</Text>
      </View>
      <View style={styles.divider}></View>

      <View style={styles.detailRow}>
        <Text style={styles.labelText}>Date</Text>
        <Text style={styles.valueText}>August 28, 2023 5:49:37 PM</Text>
      </View>
      <View style={styles.divider}></View>

      <View style={styles.detailRow}>
        <Text style={styles.labelText}>Remark</Text>
      </View>
    </View>
  );
};

export default ReceiptScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  rowheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  icons: {
    paddingHorizontal: 10,
  },
  centeramount: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  amountText: {
    fontSize: 16,
    color: '#888',
  },
  amountText2: {
    fontWeight: 'bold',
    fontSize: 36,
    color: 'black',
  },
  rowStatus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
  },
  statusText: {
    fontSize: 12,
    color: 'black',
    fontWeight: "500",
  },
  successText: {
    fontSize: 12,
    color: 'white',
    width:73,
    padding: 12,
    backgroundColor: "#66BB6A",
    borderRadius: 465,
    alignSelf: "center"
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: "space-between",
    marginTop: 10,
  },
  labelText: {
    fontSize: 12,
    color: 'black',
    fontWeight: "500",
  },
  valueText: {
    fontSize: 12,
    color: 'black',
    fontWeight: "500",

  },
});
