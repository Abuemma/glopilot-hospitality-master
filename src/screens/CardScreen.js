import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import { MaterialIcons, FontAwesome5, Octicons } from 'react-native-vector-icons';
import BottomSheet from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const { height } = Dimensions.get('window');

const CardScreen = ({ navigation }) => {
  const [isVisible, setIsVisible] = useState(false);
  const bottomSheetRef = useRef(null);

  const handleShowCard = () => {
    setIsVisible(true);
    bottomSheetRef.current?.expand();
  };

  const handleHideCard = () => {
    setIsVisible(false);
    bottomSheetRef.current?.close();
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View>
        <View style={styles.rowheader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons style={styles.icons} name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Get my card</Text>
        </View>
        <View style={styles.SecondText}>
          <Text style={styles.text1}>Congratulations! You're eligible for a</Text>
          <Text style={styles.text1}>PayTech debit card</Text>
        </View>
        <View>
          <View style={styles.rowText}>
            <Text style={styles.text2}>Pay only</Text>
            <Text style={styles.text3}> ₦1,000 + delivery</Text>
          </View>
        </View>
        <View style={styles.cardContain}>
          <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={true} contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.card1}>
              <Image source={require('../assets/lock shoeld.png')} style={styles.icon1} />
              <Text style={styles.text4}>Your transactions are 100% safe and secure</Text>
              <Text style={styles.text5}>You're in total control. Spend where you want. Freeze or unfreeze your card at any time</Text>
            </View>

            <View style={styles.card1}>
              <Image source={require('../assets/POS.png')} style={styles.icon2} />
              <Text style={styles.text4}>Payments just got easier</Text>
              <Text style={styles.text5}>Withdraw from any ATM in Nigeria & make POS and online payments all with your PayTech ATM Card </Text>
            </View>

            <View style={styles.card1}>
              <Image source={require('../assets/money hand.png')} style={styles.icon1} />
              <Text style={styles.text4}>Earn while you spend</Text>
              <Text style={styles.text5}>Get 2% cashback up to ₦500 monthly </Text>
            </View>
          </ScrollView>
        </View>
        <View style={styles.card2}>
          <Text style={styles.Button} onPress={handleShowCard}>Get my card</Text>
          <Text style={styles.text6}>Already have a PayTechCard? Activate here</Text>
        </View>

        <BottomSheet ref={bottomSheetRef} index={-1} enablePanDownToClose={true} snapPoints={['25%', '30%']}>
          <View style={styles.bottomSheetContainer}>
            <Octicons style={styles.cancel} name="x" size={23} color="#000" onPress={handleHideCard} />
            <View style={styles.rowDetails}>
              <Image source={require('../assets/pickup.png')} style={styles.icon3} />
              <View style={styles.rowDetails2}>
                <Text style={styles.cardText}>Pick up from a PayTech Agent today</Text>
                <Text style={styles.lagosText}>Only in Lagos for now</Text>
                <Text>Pick up and start transacting immediately</Text>
              </View>
              <MaterialIcons style={styles.Icon} name='keyboard-arrow-right' size={20} />
            </View>

            <View style={styles.rowDetails}>
              <Image source={require('../assets/delivery.png')} style={styles.icon3} />
              <View style={styles.rowDetails2}>
                <Text style={styles.cardText}>Get it delivered to your doorstep</Text>
                <Text>A personalized card with your name on it</Text>
                <Text>Delivery takes about 10 working days</Text>
              </View>
              <MaterialIcons style={styles.Icon} name='keyboard-arrow-right' size={20} />
            </View>
          </View>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
};

export default CardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowheader: {
    flexDirection: 'row',
    marginTop: 50,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 19,
    fontWeight: '700',
    marginLeft: 20,
    color: "#000",
  },
  icons: {
    paddingHorizontal: 10,
  },
  SecondText: {
    paddingHorizontal: 20,
    marginTop: 15,
  },
  text1: {
    fontSize: 17,
    fontWeight: "600",
  },
  text2: {
    fontSize: 16,
    color: "grey",
    fontWeight: "400",
  },
  text3: {
    fontSize: 16,
    color: "#81C784",
    fontWeight: "bold",
  },
  rowText: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E0F7FA",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 12,
    width: 220,
    marginLeft: 20,
    marginTop: 12,
    borderColor: "grey",
  },
  card1: {
    backgroundColor: "white",
    borderRadius: 10,
    width: 320,
    height: 300,
    marginHorizontal: 20,
    padding: 18,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  icon1: {
    width: 130,
    height: 130,
    padding: 9,
    borderRadius: 100,
    alignSelf: "center",
  },
  icon2: {
    width: 200,
    height: 140,
    padding: 9,
    alignSelf: "center",
  },
  text4: {
    marginTop: 10,
    fontWeight: "800",
    fontSize: 15,
    textAlign: "center",
  },
  text5: {
    marginTop: 10,
    fontWeight: "500",
    fontSize: 14,
    textAlign: "center",
    color: "grey"
  },
  cardContain: {
    marginBottom: 100,
    marginTop: 20,
  },
  Button: {
    fontSize: 16,
    color: 'white',
    padding: 10,
    fontWeight: '700',
    alignSelf: "center",
    backgroundColor: "black",
    borderRadius: 55,
    width: '70%',
    height: '21%',
    textAlign: "center",
  },
  text6: {
    color: 'blue',
    textAlign: "center",
    marginTop: 12,
    textDecorationLine: "underline",
  },
  bottomSheetContainer: {
    padding: 20,
    backgroundColor: 'white',
  },
  cardText: {
    fontSize: 16,
    fontWeight: '700',
  },
  cancel: {
    marginRight: -310,
    marginTop: -60,
  },
  rowDetails: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 12,
    marginLeft: 12,
  },
  rowDetails2: {
    flexDirection: "column",
    marginTop: 12,
  },
  lagosText: {
    backgroundColor: "#4DB6AC",
    borderRadius: 12,
    width: 144,
    color: "white",
    fontSize: 14,
    paddingHorizontal: 4,
    fontWeight: '500',
  },
  icon3: {
    width: 50,
    height: 55,
    padding: 7,
    borderRadius: 100,
    alignSelf: "center",
    marginRight: 15,
  },
  Icon: {
    marginLeft: 10,
  }
});
