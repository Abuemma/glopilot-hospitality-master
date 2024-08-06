import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import {Ionicons, SimpleLineIcons, MaterialIcons, MaterialCommunityIcons} from 'react-native-vector-icons/'

const renderTransaction = ({ item }) => (
<View style={styles.card}>
            <View style={styles.headerRow}>
                <View style={styles.titleRow}>
                    <Text style={styles.text1}>{item.id}</Text>
                    <Text style={styles.text2}>{item.name}</Text>
                </View>
                <Text style={styles.text3}>NO BVN</Text>
            </View>
            <View style={styles.bodyRow}>
                <View style={styles.col1}>
                <Text style={styles.colText}>Daily Transaction Limit</Text>
                <Text style={styles.colText}>Transfer Per Time</Text>
                <Text style={styles.colText}>Maximum Balance</Text>
                </View>
                <View style={styles.col2}>
                <Text style={styles.colText2}>{item.limit}</Text>
                <Text style={styles.colText2}>{item.Transfer}</Text>
                <Text style={styles.colText2}>{item.Maximum}</Text>
                </View>
            </View>
        </View>
    

   );

   const transactionsLimit = [
    { id: '1',name: 'KYC 1', data: 'No BVN', limit: '#50,000', Transfer: '₦0.00', Maximum: 'Unlimited'},
    { id: '2',name: 'KYC 2', data: 'BVN', limit: '#500,000', Transfer: '₦100,000.00', Maximum: 'Unlimited'},
    { id: '3',name: 'KYC 3', data: 'BVN + NIN', limit: '#2,000,000', Transfer: '₦500,000.00', Maximum: 'Unlimited'},
    { id: '4',name: 'KYC 4', data: 'Business', limit: '#5,000,000', Transfer: '₦1,000,000.00', Maximum: 'Unlimited' },
  ];

const TransactionLimitScreen = ({navigation}) => {
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
       <MaterialIcons name='arrow-back' size={26} color={'black'} />
       </TouchableOpacity>
        <Text style={styles.supportText}>Transaction Limit</Text>
      </View>




      <FlatList
            data={transactionsLimit}
            renderItem={renderTransaction}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.transactionList}
            showsVerticalScrollIndicator={false}
          />

    </View>
  )
}
export default TransactionLimitScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        },
        header:{
         flexDirection: "row",
         gap: 100,
         marginTop: 50,
         marginLeft: 18,
         alignItems: "center", 
         marginBottom: 20, 
        },
        supportText:{
         fontWeight: "700",
         fontSize: 16,
         marginLeft: -18,
        },
        card:{
        borderWidth: 2,
        paddingHorizontal: 10,
        width: "95%",
        alignSelf: "center",
        paddingVertical: 10,
        borderRadius: 10,
        borderColor: "indigo",
        marginBottom: 15,

        },
        headerRow:{
        flexDirection: "row",
        justifyContent:"space-around",
        gap: 151,
        alignItems: "center",
        textAlign: "center",
        marginLeft: -17,
        marginBottom: 5,

        },
        text1:{
        padding: 5,
        backgroundColor: "#F3E5F5",
        borderRadius: 100,
        width: 30,
        alignItems: "center",
        textAlign: "center",
        marginRight: 10,
        color: "indigo",


        },
        text2:{
            fontWeight: "600",

        },
        text3:{
        padding: 8,
        backgroundColor: "#F3E5F5",
        borderRadius: 100,
        fontSize: 12,
        color: "indigo",
        fontWeight: "500",


        },
        titleRow:{
        flexDirection: "row",
        alignItems: "center",
        gap: -5
      },
      bodyRow:{
        flexDirection: "row",
        justifyContent:"space-around",
        marginLeft: 16
        

      },
      col1:{

      },
      col2:{
        alignItems: "flex-end",
        marginLeft: 26,


      },
      colText:{
       marginBottom:6,
       color: "black",
      },
      colText2:{
        fontWeight: "800",
        marginBottom:6,
      }


})