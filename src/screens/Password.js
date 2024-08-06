import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcon, FontAwesome6 } from 'react-native-vector-icons';


const Password = () => {
  const [pin, setPin] = useState('');

  const ChangePin = (value) => {
    if (value.length <= 4) {
      setPin(value);
    }
  };

  const handleClearLastDigit = () => {
    setPin(pin.slice(0, -1));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your Transaction Pin</Text>
      <View style={styles.pinContainer}>
        {Array(4).fill().map((_, index) => (
            <View 
            key={index} 
            style={[styles.pinCircle, {backgroundColor: pin.length > index ? 'black' :'#fff',  }]}/>
            //<Text style={styles.pinText} >{pin[index] ? "." : ''}</Text> you can use instead of the style filling
          ))}         
      </View>
      <TextInput
        style={styles.hiddenInput}
        maxLength={4}
        value={pin}
        onChangeText={ChangePin}
      />
      <View style={styles.numberPad}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <TouchableOpacity key={num} style={styles.numberButton} onPress={() => ChangePin(pin + num)}>
            <Text style={styles.numberText}>{num}</Text>
          </TouchableOpacity>
        ))}
      </View>
      
      <View style={styles.Row}>
        <View style={{flexDirection: "row", alignItems: "center", marginLeft: "auto", }}>
          <TouchableOpacity  style={styles.numberButton2} onPress={() => ChangePin(pin+ 0 )}>
              <Text style={styles.numberText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.clearButton} onPress={handleClearLastDigit}>
              <FontAwesome6 name= 'delete-left' size={20} style={styles.icom} /> 
            </TouchableOpacity>
        </View>
          <TouchableOpacity onPress={() => setPin('')}>
            <Text style={styles.resetText}>Reset Pin</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 18,
    marginBottom: 32,
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
  hiddenInput: {
    position: 'absolute',
    opacity: 0,
  },
  numberPad: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
  },
  numberButton: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 50,
  },
  numberButton2: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    margin:8,
    backgroundColor: '#f0f0f0',
    borderRadius: 50,
    marginLeft: 85,
  },
  numberText: {
    fontSize: 24,
  },
  clearButton: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  resetText: {
    color: '#007BFF',
    alignContent: "center",
    alignSelf: "center",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontSize: 16,
    textDecorationColor: '#007BFF',
    textDecorationStyle: 'solid',
    textDecorationLine: "underline",

  },
  clearText: {
    color: '#FF0000',
  },
  
});

export default Password;
