import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Ionicons, SimpleLineIcons, MaterialIcons, MaterialCommunityIcons } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';

const ProfileScreen = () => {
  const [username, setUsername] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const getUsername = async () => {
      try {
        const storedUsername = await AsyncStorage.getItem('@username');
        if (storedUsername !== null) {
          setUsername(storedUsername);
        }
      } catch (e) {
        console.error(e);
      }
    };

    getUsername();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.accountText}>Account</Text>
        <Text style={styles.versionText}>v1.3.7</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.acronymnText}>
          <Text style={styles.theText}>AJ</Text>
        </View>
        <View style={styles.rrowText}>
        <View style={styles.columnText}>
          <Text style={styles.welcomeText}>Welcome</Text>
          <Text style={styles.nameText}>{username}</Text> 
        </View>
        <Text style={styles.profileText}>Profile</Text>
        </View>
      </View>
      <StatusBar/>
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate('Business')}>
          <View style={styles.tabItems}>
            <View style={styles.icon1}>
              <Ionicons name='briefcase-outline' size={20} color={'#009688'} />
            </View>   
            <Text style={styles.arrowText}>Business Settings</Text> 
            <SimpleLineIcons style={styles.arrowIcon} name='arrow-right' size={14} />
          </View>
        </TouchableOpacity> 
        <View style={styles.divider}></View>

        <TouchableOpacity onPress={() => navigation.navigate('BankTransfer')}>
          <View style={styles.tabItems}>
            <View style={styles.icon2}>
              <MaterialCommunityIcons name='bank-outline' size={20} color={'indigo'} />
            </View>
            <Text style={styles.arrowText}>Account Numbers</Text>
            <SimpleLineIcons style={styles.arrowIcon} name='arrow-right' size={14} />   
          </View>
        </TouchableOpacity>  
        <View style={styles.divider}></View>

        <View style={styles.tabItems}>
          <View style={styles.icon3}>
            <Ionicons name='shield-outline' size={20} color={'#388E3C'} />
          </View>
          <Text style={styles.arrowText}>Verification</Text>
          <SimpleLineIcons style={styles.arrowIcon} name='arrow-right' size={14} />
        </View>
        <View style={styles.divider}></View>

        <TouchableOpacity onPress={() => navigation.navigate("TransactionLimit")}>
          <View style={styles.tabItems}>
            <View style={styles.icon4}>
              <SimpleLineIcons name='clock' size={20} color={'#FF5722'} />
            </View>
            <Text style={styles.arrowText}>Transaction Limits</Text>
            <SimpleLineIcons style={styles.arrowIcon} name='arrow-right' size={14} />    
          </View>
        </TouchableOpacity> 

        <TouchableOpacity onPress ={() => navigation.navigate("Setting")} >
          <View style={styles.divider}></View>
          <View style={styles.tabItems}>
            <View style={styles.icon5}>
              <Ionicons name='settings-outline' size={20} color={'#1565C0'} />
            </View>
            <Text style={styles.arrowText}>Settings</Text>
            <SimpleLineIcons style={styles.arrowIcon} name='arrow-right' size={14} />    
          </View>
        </TouchableOpacity>

        <View style={styles.divider}></View>
        <View style={styles.tabItems}>
          <View style={styles.icon6}>   
            <SimpleLineIcons name='question' size={20} color={'#FF9800'} />
          </View>
          <Text style={styles.arrowText}>Contact Us</Text>
          <SimpleLineIcons style={styles.arrowIcon} name='arrow-right' size={14} />
        </View>
        <View style={styles.divider}></View>
       
        <TouchableOpacity onPress={() => navigation.navigate("support")}>
          <View style={styles.tabItems}>
            <View style={styles.icon6}>
              <MaterialIcons name='support-agent' size={20} color={'indigo'} />
            </View>
            <Text style={styles.arrowText}>Support</Text>
            <SimpleLineIcons style={styles.arrowIcon} name='arrow-right' size={14} />       
          </View>
          <View style={styles.divider}></View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <View style={styles.tabItems}>
            <View style={styles.icon7}> 
              <Ionicons name='log-out-outline' size={20} color={'#4CAF50'} />
            </View>
            <Text style={styles.arrowText}>Logout</Text>
            <SimpleLineIcons style={styles.arrowIcon} name='arrow-right' size={14} />
          </View>
          <View style={styles.divider}></View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Pass')}>
          <View style={styles.tabItems}>
            <View style={styles.icon8}>
              <MaterialIcons name='delete-outline' size={20} color={'#F44336'} />
            </View>
            <Text style={styles.arrowText}>Delete Account</Text>
            <SimpleLineIcons style={styles.arrowIcon} name='arrow-right' size={14} />
          </View>
          <View style={styles.divider}></View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  header:{
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 65,
    gap: 210,
    marginLeft: -5,
  },
  accountText:{
    fontSize: 20,
    fontWeight: "600",
  },
  versionText:{
    fontSize: 15,
    fontWeight: "400",
    marginLeft: -46,
  },
  card:{
    marginTop: 25,
    backgroundColor: "indigo",
    borderRadius: 10,
    alignSelf: "center",
    width: '95%',
    flexDirection: "row",
    height: 80,
  },
  acronymnText:{
    borderRadius: 100,
    backgroundColor: "#F3E5F5",
    width: 50,
    justifyContent: "center",
    marginTop: 15,
    marginLeft: 13,
    height: 50,
    alignItems: "center",
    marginRight: 10,
  },
  theText:{
    fontSize: 17,
    fontWeight: "700",
  },
  columnText:{
    marginTop: 19,  
  },
  welcomeText:{
    color: "#DDDEDE",
    fontWeight: "400",
    fontSize: 11,
    marginBottom: -8,   
  },
  nameText:{
    color: "whitesmoke",
    fontWeight: "bold",
    marginTop: 6,
  },
  profileText:{
    marginTop: 30,
    textAlign: "left",
    marginLeft: "auto",
    fontWeight: "400",
    color: "whitesmoke",
    fontSize: 12,
  },
  rrowText:{
   flexDirection: 'row',
   width: '77%',
   justifyContent: "space-between",


  },
  icon1:{
    backgroundColor: "#E0F2F1",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,    
  },
  icon2:{
    backgroundColor: "#F3E5F5",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,    
  },
  icon3:{
    backgroundColor: "#E8F5E9",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,    
  },
  icon4:{
    backgroundColor: "#FFF8E1",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,    
  },
  icon5:{
    backgroundColor: "#E3F2FD",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,    
  },
  icon6:{
    backgroundColor: "#FFF3E0",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,    
  },
  icon7:{
    backgroundColor: "#E8F5E9",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,    
  },
  icon8:{
    backgroundColor: "#FFEBEE",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,    
  },
  tabItems:{
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 5,
    width: 310,
  },
  arrowText:{
    color: "black",
    marginTop: 11,
    fontWeight: "600",
  },
  arrowIcon:{
    marginTop: 11,
    marginLeft: "auto",
  },
  divider:{
    height: 1,
    backgroundColor: "#ccc",
    width: "90%",
    alignSelf: "center",
  },
});
