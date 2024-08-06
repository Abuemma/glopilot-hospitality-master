import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Ionicons, SimpleLineIcons, MaterialIcons, MaterialCommunityIcons} from 'react-native-vector-icons/'
import { SafeAreaView, ScrollView,TouchableOpacity } from 'react-native'


const SupportScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialIcons style={styles.arrowIcon} name='keyboard-arrow-left' size={27} />
        </TouchableOpacity>
        <Text style={styles.supportText}>Contact Support</Text>
      </View>

      <ScrollView>
      <TouchableOpacity onPress={() => alert('You press deposit')}>
      <View style={styles.card}>
        <View style={styles.symbolicon}>
        <Ionicons  name='call-outline' size={20} />
        </View>
        <View style={styles.columnText}>
            <Text style={styles.callText}>Call Us</Text>
            <Text style={styles.availableText}>Available between 9am - 5pm </Text>
        </View>
        <MaterialIcons style={styles.Icon} name='keyboard-arrow-right' size={20} />
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => alert('You press Email')}>
      <View style={styles.card}>
        <View style={styles.symbolicon}>
        <Ionicons  name='mail-outline' size={20} />
        </View>
        <View style={styles.columnText}>
            <Text style={styles.callText}>Email Us</Text>
            <Text style={styles.availableText}>Reach us through email </Text>
        </View>
        <MaterialIcons style={styles.Icon} name='keyboard-arrow-right' size={20} />
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => alert('You press Whatsapp')}>
      <View style={styles.card}>
        <View style={styles.symbolicon}>
        <Ionicons  name='logo-whatsapp' size={20} />
        </View>
        <View style={styles.columnText}>
            <Text style={styles.callText}>Whatsapp</Text>
            <Text style={styles.availableText}>Available 24/7........For swift response</Text>
        </View>
        <MaterialIcons style={styles.Icon} name='keyboard-arrow-right' size={20} />
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => alert('You press Facebook')}>
      <View style={styles.card}>
        <View style={styles.symbolicon}>
        <Ionicons  name='logo-facebook' size={20} />
        </View>
        <View style={styles.columnText}>
            <Text style={styles.callText}>Facebook</Text>
            <Text style={styles.availableText}>Reach us on Facebook</Text>
        </View>
        <MaterialIcons style={styles.Icon} name='keyboard-arrow-right' size={20} />
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => alert('You press Twitter')}>
      <View style={styles.card}>
        <View style={styles.symbolicon}>
        <Ionicons  name='logo-twitter' size={20} />
        </View>
        <View style={styles.columnText}>
            <Text style={styles.callText}>Twitter</Text>
            <Text style={styles.availableText}>Reach us on Twitter </Text>
        </View>
        <MaterialIcons style={styles.Icon} name='keyboard-arrow-right' size={20} />
      </View>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => alert('You press Instagram')}>
      <View style={styles.card}>
        <View style={styles.symbolicon}>
        <Ionicons  name='logo-instagram' size={20} />
        </View>
        <View style={styles.columnText}>
            <Text style={styles.callText}>Instagram</Text>
            <Text style={styles.availableText}>Reach us on Instagram </Text>
        </View>
        <MaterialIcons style={styles.Icon} name='keyboard-arrow-right' size={20} />
      </View>
      </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  )
}

export default SupportScreen

const styles = StyleSheet.create({
  container:{
  flex: 1,
  color: "#E0E0E0",
  },
  header:{
   flexDirection: "row",
   marginTop: 55,
   gap:10,
   marginLeft: 10,
  
  },
  supportText:{
    fontWeight: "bold",
    fontSize: 17,
  },
  arrowIcon:{
    fontWeight: "bold"
  },
  card:{
    marginTop: 25,
    backgroundColor: "white",
    borderRadius: 10,
    alignSelf: "center",
    width: 330,
    flexDirection: "row",
    height: 100,

  },
  symbolicon:{
    marginTop: 8,
    backgroundColor: "#F3E5F5",
    width: 50,
    height: 50,
    borderRadius: 150,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginHorizontal:10,
  },
  columnText:{
    alignSelf: "center",

  },
  callText:{
    fontWeight: "bold"
  },
  Icon:{
    alignSelf: "center",
    marginLeft: "auto",

  },

    
})