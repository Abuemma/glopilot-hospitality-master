import { ScrollView, StyleSheet, Text, View, RefreshControl, TouchableOpacity, FlatList, Pressable, TextInput, Modal } from 'react-native';
import React, { useState, useRef, useEffect} from 'react';
import { SimpleLineIcons, MaterialCommunityIcons, Fontisto, FontAwesome, Octicons, Ionicons, Entypo, MaterialIcons } from 'react-native-vector-icons'; 
import BottomSheet from '@gorhom/bottom-sheet';
import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const transactions = [
  { id: '1', type: 'NIP Commission', date: 'Aug 28, 2023, 5:49 PM', amount: '₦25.00', status: 'Success', icon: 'N' },
  { id: '2', type: 'Bank Transfer', date: 'Aug 28, 2023, 5:49 PM', amount: '₦1,575.00', status: 'Success', icon: 'A' },
  { id: '3', type: 'NIP Commission', date: 'Aug 28, 2023, 5:49 PM', amount: '₦25.00', status: 'Success', icon: 'N' },
];

const HomePageScreen = ({ navigation }) => {
  const bottomSheetRef = useRef(null);
  const bottomSheetRef2 = useRef(null);
  const scrollViewRef = useRef(null);
  const scrollViewRef2 = useRef(null);  

  const handleShowBottomSheet = () => {
    bottomSheetRef.current?.expand();
    scrollViewRef.current?.scrollToEnd({ animated: true });
  };
  const handleSelectDisco = (disco) => { 
    navigation.navigate(disco);
    bottomSheetRef.current?.close();
  };

  const handleShowBottomSheet2 = () => {
    bottomSheetRef2.current?.expand();
    scrollViewRef2.current?.scrollToEnd({ animated: true });
  };
  const handleSelectDisco2 = (disco) => {
    navigation.navigate(disco);
    bottomSheetRef2.current?.close();
  };
  const handleSelect = () => {
    bottomSheetRef2.current?.close();
    bottomSheetRef.current?.close();

  };  
  const [modalVisible, setModalVisible] = useState(false); 
  const [refreshing, setrefreshing] = useState(false); 
  const [username, setUsername] = useState('');
  
  const onRefresh = () => {
    setrefreshing(true);
    setTimeout(() => {
      setrefreshing(false);
    }, 2000);
  }



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
  
    const AmtCard = ({ amount }) => (
      <View style={styles.card1}>
        <View style={styles.rowcard}>
          <Text style={styles.text1}>{amount}</Text>
          <Ionicons name="eye-off-outline" color="white" size={24} />
        </View>
        <Text style={styles.text2}>Account balance</Text>
        <Text style={styles.text3}>Account details</Text>
      </View>
    );

  const renderTransaction = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Receipt')}>
      <View style={styles.rowDetails}>
        <View style={styles.icon}>
          <Text>{item.icon}</Text>
        </View>
        <View style={styles.columnDetails}>
          <Text style={styles.type}>{item.type}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>
        <View style={styles.columnDetails2}>
          <Text style={styles.amount}>{item.amount}</Text>
          <Text style={styles.status}>{item.status}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <GestureHandlerRootView style={styles.container}>
      <Pressable onPress={() => handleSelect()}>
      <View style={styles.rowheader}>
        <View style={styles.rowheader1}>
          <FontAwesome name='user-circle-o' color={'black'} size={24} />
          <View style={styles.columnText}>
            <Text>{username + ','} Welcome to</Text>
            <Text style={styles.subtext}>PayTech</Text>
          </View>
        </View>
        <View style={styles.icon2}>
          <Fontisto name='history' color={'black'} size={24} />
        </View>
      </View>
      </Pressable>
      <View style={styles.cardContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollViewContent}>
        <AmtCard amount="₦200" />
        <AmtCard amount="₦300" />
        <AmtCard amount="₦1000" />
          
        </ScrollView>
      </View>

      <ScrollView ref={scrollViewRef} showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        <View style={styles.alignit}>
          <View style={styles.rowDetails}>
          <TouchableOpacity onPress={() => navigation.navigate('addMoney')}>
            <View style={styles.iconText}>
              <View style={styles.icons}>
                <Ionicons name='paper-plane' color={'black'} size={24} />
              </View>
              <Text style={styles.textUnder}>Transfer</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleShowBottomSheet2}>
              <View style={styles.iconText}>
                <View style={styles.icons}>
                  <Octicons name='plus-circle' color={'black'} size={24} />
                </View>
                <Text style={styles.textUnder}>Add money</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('CardScreen')}>
              <View style={styles.iconText}>
                <View style={styles.icons}>
                  <Entypo name='credit-card' color={'black'} size={24} />
                </View>
                <Text style={styles.textUnder}>Cards</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.iconText}>
              <View style={styles.icons}>
                <Octicons name='note' color={'black'} size={24} />
              </View>
              <Text style={styles.textUnder}>Bills</Text>
            </View>
          </View>

          <View style={styles.loanCard}>
            <View style={styles.loantext}>
              <Text style={styles.text4}>Get a loan in 5 minutes!</Text>
              <Text style={styles.text5}>Up to ₦3,000,000 available</Text>
            </View>
            <Text style={styles.Button}>Get loan</Text>
          </View>

          <View style={styles.loanCard}>
            <View style={styles.loantext}>
              <Text style={styles.text4}>Upgrade your bank account to level 2</Text>
              <Text style={styles.text5}>Get higher loans and increased</Text>
              <Text style={styles.text5}>transaction limits of up to</Text>
              <Text style={styles.text5}>₦200,000!</Text>
            </View>
            <Text style={styles.Button}>Upgrade</Text>
          </View>
          <Pressable onPress={() => handleSelect()}>
          <View style={styles.AirtimeSection}>
            <Text style={styles.airtimeText}>Airtime and bills</Text>
            <View style={styles.airtimeCard}>
              <TouchableOpacity onPress={() => navigation.navigate('AirtimeScreen')}>
                <View style={styles.alignIcons}>
                  <View style={styles.icons1}>
                    <SimpleLineIcons name='phone' color={'grey'} size={20} />
                  </View>
                  <Text style={styles.textUnder}>Airtime</Text>
                  <Text style={styles.Button1}>3% off</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleShowBottomSheet}>
                <View style={styles.alignIcons}>
                  <View style={styles.icons1}>
                    <SimpleLineIcons name='globe' color={'grey'} size={20} />
                  </View>
                  <Text style={styles.textUnder}>Data</Text>
                  <Text style={styles.Button1}>3% off</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Electricity')}>
                <View style={styles.alignIcons}>
                  <View style={styles.icons1}>
                    <SimpleLineIcons name='energy' color={'grey'} size={20} />
                  </View>
                  <Text style={styles.textUnder}>Electricity</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <View style={styles.alignIcons}>
                  <View style={styles.icons1}>
                    <FontAwesome name='tv' color={'grey'} size={20} />
                  </View>
                  <Text style={styles.textUnder}>TV</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          </Pressable>

          <View style={styles.line} />

          <View style={styles.transactionsRow}>
            <Text style={styles.transactionText}>Recent transactions</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Transaction')}>
              <Text style={styles.viewallText}>View all</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={transactions}
            renderItem={renderTransaction}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.transactionList}
          />
        </View>
      </ScrollView>


      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>TV Subscription </Text>
            <Text style={styles.modalText}>TV Subscription </Text>
            <Text style={styles.modalText}>TV Subscription </Text>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        enablePanDownToClose={true}
        snapPoints={['25%', '30%']}
        style={styles.bottomSheet}
      >
        <View style={styles.bottomSheetContent}>
          <Text style={styles.bottomSheetText}>Data Subscription</Text>
          <TouchableOpacity onPress={() => handleSelectDisco('cheap')}  style={styles.bottomSheetOption}>
            <View style={styles.rowDetails2}>
              <Text style={styles.bottomSheetOptionText}>Cheap Data</Text>
              <Text style={styles.bottomSheetOptionSubText}>up to 60% discount</Text>
            </View>
            <MaterialIcons style={styles.Icon} name='keyboard-arrow-right' size={20} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSelectDisco('Regular')} style={styles.bottomSheetOption}>
            <Text style={styles.bottomSheetOptionText}>Regular Data</Text>
            <MaterialIcons style={styles.Icon} name='keyboard-arrow-right' size={20} />
          </TouchableOpacity>
        </View>
      </BottomSheet>

      <BottomSheet
        ref={bottomSheetRef2}
        index={-1}
        enablePanDownToClose={true}
        snapPoints={['25%', '45%']}
        style={styles.bottomSheet}
      >
        <View style={styles.bottomSheetContent}>
          <Text style={styles.bottomSheetText}>Data Subscription</Text>
          <TouchableOpacity onPress={() => handleSelectDisco2('BankTransfer')}  style={styles.bottomSheetOption}>
            <View style={styles.rowDetails2}>
            <MaterialCommunityIcons style={styles.Icon} name='bank' size={20} />
              <Text style={styles.bottomSheetOptionText}>Bank Transfer</Text>
            </View>
            <MaterialIcons style={styles.Icon} name='keyboard-arrow-right' size={20} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSelectDisco2('fund')}  style={styles.bottomSheetOption}>
            <View style={styles.rowDetails2}>
            <Fontisto style={styles.Icon} name='hashtag' size={20} />
              <Text style={styles.bottomSheetOptionText}>USSD</Text>
            </View>
            <MaterialIcons style={styles.Icon} name='keyboard-arrow-right' size={20} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSelectDisco2('cheap')}  style={styles.bottomSheetOption}>
            <View style={styles.rowDetails2}>
            <MaterialIcons style={styles.Icon} name='key' size={20} />
            <Text style={styles.bottomSheetOptionText}>Vault</Text>
            </View>
            <MaterialIcons style={styles.Icon} name='keyboard-arrow-right' size={20} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSelectDisco2('cheap')}  style={styles.bottomSheetOption}>
            <View style={styles.rowDetails2}>
              <Fontisto style={styles.Icon} name='circle-o-notch' size={20} />
              <Text style={styles.bottomSheetOptionText}>Payoneer</Text>
            </View>
            <MaterialIcons style={styles.Icon} name='keyboard-arrow-right' size={20} />
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};




export default HomePageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  rowheader: {
    flexDirection: "row",
    marginTop: 44,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  rowheader1: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  columnText: {},
  icon2: {},
  subtext: {
    fontWeight: "700",
    fontSize: 17,
  },
  cardContainer: {
    marginBottom: 20,
  },
  scrollViewContent: {
    paddingHorizontal: 10,
  },
  card1: {
    backgroundColor: "indigo",
    borderRadius: 10,
    width: 300,
    marginHorizontal: 10,
    padding: 18,
  },  
  card2: {
    backgroundColor: "black",
    borderRadius: 10,
    width: 300,
    marginHorizontal: 10,
    padding: 18,
  },
  card3: {
    backgroundColor: "#26A69A",
    borderRadius: 10,
    width: 300,
    marginHorizontal: 10,
    padding: 18,
  },
  rowcard: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: '100%',
  },
  text1: {
    color: "white",
    fontWeight: "700",
    fontSize: 20,
  },
  text2: {
    color: "white",
    fontSize: 14,
  },
  text3: {
    color: "white",
    fontWeight: "700",
    fontSize: 14,
    textDecorationLine: "underline",
  },
  alignit: {
    paddingHorizontal: 20,
  },
  textUnder:{
   fontWeight: '600',
   fontSize: 13,
  },
  rowDetails: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  iconText: {
    alignItems: "center",
  },
  icons:{
    borderRadius:1,
    backgroundColor: "#e0f7fa",
    borderRadius:30,
    padding: 8,
  },
  loanCard: {
    backgroundColor: '#e0f7fa',
    borderWidth:1,
    borderColor:"#90CAF9",
    borderRadius: 10,
    padding: 11,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  loantext:{
  },
  text4: {
    fontWeight: '700',
    fontSize: 13,
  },
  text5:{
    fontSize: 12,
    fontWeight: "300",
  },
  Button: {
    fontSize: 14,
    color: 'white',
    padding:5,
    fontWeight: '700',
    alignSelf:"center",
    backgroundColor: "black",
    borderRadius: 55,
    width:78,
    textAlign: "center",
    height: 33,

  },
  AirtimeSection: {
    marginBottom: 20,
  },
  airtimeText: {
    fontWeight: '700',
    fontSize: 14,
    marginBottom: 10,
  },
  airtimeCard: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#ECEFF1',
    borderRadius: 20,
    paddingVertical: 25,
    paddingHorizontal: 20,
    gap:35,
  },
  alignIcons: {
    alignItems: 'center',
    
  },
  icons1:{
    borderRadius:1,
    backgroundColor: "white",
    borderRadius:30,
    padding: 8,
    marginBottom:7,
  },
  Button1: {
    fontSize: 12,
    color: 'white',
    padding:5,
    fontWeight: '600',
    alignSelf:"center",
    backgroundColor: "indigo",
    borderRadius: 55,
    marginTop:7,
    textAlign: "center",
  },
  transactionText:{
    fontWeight: "700",
    fontSize: 14,

  },
  transactionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  viewallText: {
    color: 'indigo',
    fontWeight: '500'
  },
  rowDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,

  },
  icon: {
    backgroundColor: "#F3E5F5",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    marginLeft: -10,
    marginRight: 10,
  },
  columnDetails: {
    flex: 1,
  },
  columnDetails2: {
    alignItems: 'flex-end',
  },
  type:{
    fontWeight: "700",
    fontSize: 16,
  },
  date:{
    fontSize: 10,
    color: "#1c2a3a",
    fontWeight: "600",
  },
  amount:{
    fontWeight: "700",
    fontSize: 16

  },
  status:{
    fontSize: 10,
    color: "#1c2a3a",
    fontWeight: "600",

  },
  bottomSheet: {
      padding: 10,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      backgroundColor: 'white',
      
  },
  bottomSheetContent: {
      padding: 20,
  },
  bottomSheetText: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
  },
  bottomSheetOption: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 15,
  },
  bottomSheetOptionText: {
      fontSize: 16,
  },
  bottomSheetOptionSubText: {
      fontSize: 12,
      color: 'white',
      backgroundColor: "blue",
      borderRadius: 12,
      padding: 4,
  },
  rowDetails2:{
    flexDirection: "row",
    gap:10,
  },
  centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
    },
  modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
  button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
  buttonClose: {
      backgroundColor: "#2196F3",
    },
  textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
    },
  modalText: {
      marginBottom: 15,
      textAlign: "center",
    },
  
  

});
