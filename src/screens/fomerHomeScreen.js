import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import {SimpleLineIcons, Ionicons, MaterialIcons, AntDesign, Octicons, Foundation, FontAwesome6, FontAwesome5} from 'react-native-vector-icons/'



const fmrHomePageScreen = ({ navigation }) => {
  return (
    <SafeAreaView styles={styles.container}>
      
      <View style={styles.profile}>
        <View style={styles.iconProfile}>
        <SimpleLineIcons name='user' color={'grey'} size={24} />
        </View>
        <Text style={styles.welcomeText}>Hey Miracle </Text>
        <Text style={styles.label}>welcome </Text>
        <Ionicons style={styles.notificationicon} name='notifications' size={22} />
    </View>
    
    <ScrollView style={styles.ScrollContent}>
     <View style={styles.card}>
     <Text style={styles.balanceText}>Available Balance </Text>
     <Text style={styles.Balance}>N66,628.00 </Text>
     </View>

     <View style={styles.iconsContainer}>
      <View style={styles.iconsText}>
      <TouchableOpacity onPress={() => alert('You press deposit')}>
      <SimpleLineIcons style={styles.icon} name='wallet' size={18} />
      <Text style={styles.iconText}>Deposit</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.iconsText}>
      <SimpleLineIcons style={styles.icon} name='arrow-right' size={18} />
      <Text style={styles.iconText}>  Send</Text>
      </View>
      <View style={styles.iconsText}>
      <Octicons style={styles.icon} name='history' size={18} />
      <Text style={styles.iconText}> History</Text>
      </View>
     </View>

     <View style={styles.rowicons}>
      <View style={styles.textbuttons}>
      <TouchableOpacity onPress={() => navigation.navigate('AirtimeScreen')}>
        <Ionicons style={styles.smallicons} name="phone-portrait-outline" size={20} />
      <Text style={styles.rowiconsText}>Airtime</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.textbuttons}>
      <TouchableOpacity onPress={() => alert("You press deposit")}>
        <AntDesign style={styles.smallicons} name="earth" size={20} />
      </TouchableOpacity>
      <Text style={styles.rowiconsText}>Data</Text>
      </View>
      
      <View style={styles.textbuttons}>
      <TouchableOpacity onPress={() => alert("You press deposit")}>
        <SimpleLineIcons style={styles.smallicons} name="bulb" size={20} />
      </TouchableOpacity>
      <Text style={styles.rowiconsText}>Electricity</Text>
      </View>

      <View style={styles.textbuttons}>
      <TouchableOpacity onPress={() => alert("You press deposit")}>
        <Ionicons style={styles.smallicons} name="tv-outline" size={20} />
      </TouchableOpacity>
      <Text style={styles.rowiconsText}>TV</Text>
      </View>
     </View>   

     <View style={styles.rowicons}>
      <View style={styles.textbuttons}>
      <TouchableOpacity  onPress={() => alert("You press deposit")}>
        <Ionicons style={styles.smallicons} name="football-outline" size={20} />
      </TouchableOpacity>
      <Text style={styles.rowiconsText}>Betting</Text>
      </View>

      <View style={styles.textbuttons}>
      <TouchableOpacity onPress={() => alert("You press deposit")}>
        <AntDesign style={styles.smallicons} name="wifi" size={20} />
      </TouchableOpacity>
      <Text style={styles.rowiconsText}>Data Pin</Text>
      </View>
      
      <View style={styles.textbuttons}>
      <TouchableOpacity onPress={() => alert("You press deposit")}>
        <Foundation style={styles.smallicons} name="mobile-signal" size={20} />
      </TouchableOpacity>
      <Text style={styles.rowiconsText}>A2cash</Text>
      </View>

      <View style={styles.textbuttons}>
      <TouchableOpacity onPress={() => alert("You press deposit")}>
        <FontAwesome6 style={styles.smallicons} name="book-bookmark" size={20} />
      </TouchableOpacity>
      <Text style={styles.rowiconsText}>Rechrge</Text>
      </View>
     </View>   


     <View style={styles.rowicons}>
      <View style={styles.textbuttons}>
      <TouchableOpacity  onPress={() => alert("You press deposit")}>
        <SimpleLineIcons style={styles.smallicons} name="graduation" size={20} />
      </TouchableOpacity>
      <Text style={styles.rowiconsText}>Exam</Text>
      </View>

      <View style={styles.textbuttons}>
      <TouchableOpacity onPress={() => alert("You press deposit")}>
        <FontAwesome5 style={styles.smallicons} name="sms" size={20} />
      </TouchableOpacity>
      <Text style={styles.rowiconsText}>Bulk SMS</Text>
      </View>
      
      <View style={styles.textbuttons}>
      <TouchableOpacity onPress={() => alert("You press deposit")}>
        <AntDesign style={styles.smallicons} name="tags" size={20} />
      </TouchableOpacity>
      <Text style={styles.rowiconsText}>Coupon</Text>
      </View>

      <View style={styles.textbuttons}>
      <TouchableOpacity onPress={() => alert("You press deposit")}>
        <Octicons style={styles.smallicons} name="unverified" size={20} />
      </TouchableOpacity>
      <Text style={styles.rowiconsText}>KYC</Text>
      </View>
     </View>   


      <View style={styles.recent}>
        <Text style={styles.recenttext}>Recent Transactions</Text>
      </View>
      <View style={styles.divider}></View>

    
      
      <TouchableOpacity onPress={() => navigation.navigate("Receipt")}>
      <View style= {styles.rowTransactions}>
          <View style={styles.TransactionIcon}>
          <MaterialIcons name="download-for-offline" size={34} color={"#4CAF50"}/>
          </View>
        <View style={styles.amount1}>
        <Text style={styles.transactionText1}>Wallet ₦23,000.00</Text>
        <View style={styles.dateIconContainer}>
        <SimpleLineIcons name="clock" size={12} color={"black"}/>
        <Text style={styles.transactionText}>2nd March, 2024</Text>
        </View>
        </View>

        <View style={styles.amount2}>
        <Text style={styles.transactionText2}>✔ ₦23,000.00</Text>
        <Text style={styles.successText2}>success</Text>
        </View>
      </View>
      </TouchableOpacity>
      

      <TouchableOpacity onPress={() => navigation.navigate("Receipt")}>
      <View style= {styles.rowTransactions}>
          <View style={styles.TransactionIcon}>
          <MaterialIcons name="download-for-offline" size={34} color={"#4CAF50"}/>
          </View>
        <View style={styles.amount1}>
        <Text style={styles.transactionText1}>Wallet ₦23,000.00</Text>
        <View style={styles.dateIconContainer}>
        <SimpleLineIcons name="clock" size={12} color={"black"}/>
        <Text style={styles.transactionText}>2nd March, 2024</Text>
        </View>
        </View>

        <View style={styles.amount2}>
        <Text style={styles.transactionText2}>✔ ₦23,000.00</Text>
        <Text style={styles.successText2}>success</Text>
        </View>  
      </View>
      </TouchableOpacity>

      <View style= {styles.rowTransactions}>
          <View style={styles.TransactionIcon}>
          <MaterialIcons name="download-for-offline" size={34} color={"#4CAF50"}/>
          </View>
        <View style={styles.amount1}>
        <Text style={styles.transactionText1}>Wallet ₦23,000.00</Text>
            <View style={styles.dateIconContainer}>
            <SimpleLineIcons name="clock" size={12} color={"black"}/>
            <Text style={styles.transactionText}>2nd March, 2024</Text>
            </View>
        </View>

        <View style={styles.amount2}>
            <Text style={styles.transactionText2}>✔ ₦23,000.00</Text>
            <Text style={styles.successText2}>success</Text>
        </View>
      </View>
    </ScrollView>
     
    </SafeAreaView>
  )
}

export default fmrHomePageScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    logo:{
      marginTop: 50,
      marginLeft: 30,
        textAlign: "left",
        justifyContent: "center",
        fontSize: 12,
        fontWeight: "700",
        color: 'black',
        
    },
    splash:{
        backgroundColor: 'white',
        height: '100%'
    },
    button:{
        backgroundColor: "#0066FF",
        color: 'white',
        padding: 20,
        alignItems: "center",
        width: 3400,
        marginTop: 250,
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 4,
    },
    card:{
      backgroundColor: 'indigo',
      height: 180,
      width: 320,
      borderRadius: 20,
      textAlign: "center",
      alignSelf: "center"
    },
    balanceText:{
      color: 'white',
      alignSelf: "flex-start",
      marginLeft: 10,
      marginTop: 20,
      fontSize: 14,
      fontWeight: "600"
    },
    Balance:{
      marginTop: 20,
      marginLeft: 10,
      color: 'white',
      fontSize: 24,
      fontWeight: '900'
    },
    notificationicon:{
      marginHorizontal: 100,
      marginTop: 50,
      marginLeft: '65%'
    },
    iconsContainer:{
      flexDirection: "row",
      justifyContent: "space-evenly",
      marginBottom: 30,
      
    },
    icon:{
      backgroundColor: "white",
      padding: 15,
      marginVertical: -26,
      borderRadius: 50,
      borderWidth: 1,
      borderColor: '#ccc',
      marginBottom: 1,
      alignItems: "center",
      justifyContent: "center"
    },
    iconsText:{
      flexDirection: "column",
    },
    iconText:{
      fontWeight: "700",
      fontSize: 14,
    },
    iconProfile:{
      marginTop: 40,
      backgroundColor: "#ccc",
      width: 40,
      height: 40,
      borderRadius: 100,
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center"
    },
    profile:{
      flexDirection: "row",
      width: "110%",
      marginLeft: 17,
      marginBottom: 11,

    },
    welcomeText:{
      marginTop: 40,
      marginLeft: 10,
      fontWeight: "700"
    },
    label:{
      marginTop: 60,
      marginHorizontal: -80,
      fontSize: 12,
      fontWeight: "600",
      color: '#F9A825',
      backgroundColor: "#FFF176",
      height: 18
    },
  rowicons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
    marginTop: 10,
  },
  smallicons: {
    marginBottom: 5, // Ensure icons are centered with their text
  },
    rowiconsText:{
      marginTop: 10,
      marginLeft: -10,
      fontWeight: "500",
       textAlign: "center", 
       alignSelf: "center",
    },
  textbuttons: {
    textAlign: "center",
    alignItems: "center",
    width: 70,  // Adjust width to ensure proper alignment
  },
    recenttext:{
      color: '#000',
      fontWeight:"700",
      fontSize: 18,
      marginTop: 20,

    },
    recent:{
      color: "black",
      marginLeft: 36,
      marginTop: 5,
      marginBottom: 10,

    },
    divider:{
      height: 1,
      color: "black",
      backgroundColor: "#ccc",
      width: "90%",
      alignSelf: "center",
  },
  TransactionIcon:{
    marginTop: 22,
    marginLeft: 1,
  },
  rowTransactions:{
    flexDirection: "row",
    marginLeft: 32,
    gap: 10,
  },

  TransactionIcon:{
    marginLeft: -20,
    marginTop: 18,
    backgroundColor: "#C8E6C9",
    padding: 5,
    borderRadius: 50,
   
  },
  
  amount1:{
    marginTop:20,

    
  },
  amount2:{
    marginTop: 20,
    marginLeft: 55,
    
    
  },
  transactionText1:{
    fontWeight: "700",   
  },
  transactionText:{
    fontWeight: "400",
    
  },
  dateIconContainer:{
   flexDirection: "row",
   alignItems: "center",
   gap: 5,
  }, 
  transactionText2:{
    color:"#4CAF50",
    fontWeight: "600",

  },
  successText2:{
    color:"#4CAF50",
    alignSelf: "flex-end",
    fontWeight: "600",

  },
  ScrollContent:{
    marginBottom: 40,
  }
})