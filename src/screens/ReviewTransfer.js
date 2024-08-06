import React, { useRef, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet from '@gorhom/bottom-sheet';

const ReviewTransfer = ({ navigation }) => {
  const bottomSheetRef = useRef(null);
  const scrollViewRef = useRef(null);
  const textInputRef = useRef(null);

  const handleShowBottomSheet = () => {
    bottomSheetRef.current?.expand();
    scrollViewRef.current?.scrollToEnd({ animated: true });
  };

  const handleSelectDisco = (disco) => { 
    bottomSheetRef.current?.close();
  };

  const gotIt = (disco) => { 
    navigation.navigate(disco);
    bottomSheetRef.current?.close();
  };

  const [pin, setPin] = useState('');

  const ChangePin = (value) => {
    if (value.length <= 4) {
      setPin(value);
    }
  };

  const clearPin = () => {
    setPin('');
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons style={styles.icon} name="arrow-back" size={25} color="black" />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.header}>Review transfer</Text>
          <Text style={styles.subHeader}>Enter PIN to confirm</Text>
        </View>
      </View>
      
      <View style={styles.detailsContainer}>
        <View style={styles.rowDetails}>
          <Text style={styles.label}>Paying</Text>
          <Text style={styles.value}>BOLA ADEWALE</Text>
        </View>
        <Text style={styles.detailsLink}>Details</Text>
      </View>

      <Text style={styles.amount}>₦50</Text>
      <Text style={styles.transferFee}>Transfer fee: ₦5</Text>

      <TouchableOpacity style={styles.InputContainer} onPress={() => textInputRef.current?.focus()}>
        <View style={styles.pinContainer}>
          {Array(4).fill().map((_, index) => (
            <View 
              key={index} 
              style={[styles.pinCircle, { backgroundColor: pin.length > index ? 'black' : '#fff' }]}
            />
          ))}         
        </View>
        <TextInput
          ref={textInputRef}
          style={styles.hiddenInput}
          maxLength={4}
          value={pin}
          onChangeText={ChangePin}
          keyboardType="number-pad"
          autoFocus
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={clearPin}>
        <Text style={styles.clearPin}>Clear PIN</Text>
      </TouchableOpacity>
      <Text style={styles.forgotPin}>Forgot PIN?</Text>

      <BottomSheet ref={bottomSheetRef} snapPoints={['50%', '90%']} enablePanDownToClose={true}>
        <View style={styles.bottomSheetContent}>
          <View style={styles.rowTransfer}>
            <Text style={styles.bottomSheetText}>Transfer details</Text>
            <TouchableOpacity onPress={() => handleSelectDisco('HomePage')}>
              <Text style={styles.bottomSheetText2}>X</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.transferDetails}>
            <Text>Sending to</Text>
            <Text>JOSIAH ADEAGBO</Text>
          </View>
          <View style={styles.transferDetails}>
            <Text>Bank name</Text>
            <Text>PalmPay</Text>
          </View>
          <View style={styles.transferDetails}>
            <Text>Account number</Text>
            <Text>7054867271</Text>
          </View>
          <View style={styles.transferDetails}>
            <Text>Amount</Text>
            <Text>₦50</Text>
          </View>
          <View style={styles.transferDetails}>
            <Text>Transfer fee</Text>
            <Text>₦5</Text>
          </View>
          <View style={styles.transferDetails}>
            <Text>Total to pay</Text>
            <Text>₦50</Text>
          </View>
          <TouchableOpacity style={styles.gotItButton} onPress={() => gotIt('HomePage')}>
            <Text style={styles.gotItText}>Got it</Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export default ReviewTransfer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  icon: {
    marginRight: 10,
  },
  headerTextContainer: {
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
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  rowDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    color: 'black',
  },
  value: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  detailsLink: {
    fontSize: 16,
    color: 'blue',
  },
  amount: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  transferFee: {
    fontSize: 16,
    color: 'gray',
  },
  InputContainer: {
    marginTop: 20,
    flexDirection: "column",
    alignItems: "center",
  },
  pinDotsContainer: {
    flexDirection: 'row',
  },
  pinDot: {
    fontSize: 16,
  },
  forgotPin: {
    fontSize: 16,
    color: 'blue',
    textAlign: "center",
  },
  clearPin: {
    fontSize: 16,
    color: 'red',
    textAlign: "center",
    marginVertical: 10,
  },
  bottomSheetContent: {
    padding: 20,
  },
  rowTransfer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bottomSheetText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  bottomSheetText2: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  transferDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  gotItButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#000',
    alignItems: 'center',
    borderRadius: 25,
  },
  gotItText: {
    color: '#fff',
    fontSize: 16,
  },
  hiddenInput: {
    position: 'absolute',
    opacity: 0,
    textAlign: "center",
  },
  pinContainer: {
    flexDirection: 'row',
    marginBottom: 32,
  },
  pinCircle: {
    width: 30,
    height: 30,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  pinText: {
    fontSize: 34,
    color: "blue",
  },
});
