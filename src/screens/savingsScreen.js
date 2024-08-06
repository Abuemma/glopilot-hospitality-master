import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons';

const SavingsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.savingsText}>Savings</Text>
        <Text style={styles.optionText}>More options</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.card}>
          <View style={styles.rowDetails}>
            <Text style={styles.mainText}>PayTarget</Text>
            <Text style={styles.text}>NEW</Text>
            <MaterialIcons style={styles.icons} name='arrow-forward' size={20} />
          </View>
          <View style={styles.rowDetails2}>
            <Text style={styles.subText}>Reach your goals</Text>
            <Text style={styles.subText2}>Save with discipline</Text>
          </View>
          <View style={styles.rowDetails3}>
            <Text style={styles.rate}>16% per annum</Text>
            <Image source={require('../assets/target.png')} style={styles.icon1} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <View style={styles.rowDetails}>
            <Text style={styles.mainText}>PaySave</Text>
            <MaterialIcons style={styles.icons} name='arrow-forward' size={20} />
          </View>
          <View style={styles.rowDetails2}>
            <Text style={styles.subText}>Earn everyday</Text>
            <Text style={styles.subText2}>Withdraw anytime</Text>
            <Text style={styles.subText3}>No fee</Text>
          </View>
          <View style={styles.rowDetails3}>
            <Text style={styles.rate}>15% per annum</Text>
            <Image source={require('../assets/daily.png')} style={styles.icon1} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <View style={styles.rowDetails}>
            <Text style={styles.mainText}>PayLock</Text>
            <MaterialIcons style={styles.icons} name='arrow-forward' size={20} />
          </View>
          <View style={styles.rowDetails2}>
            <Text style={styles.subText}>Fixed deposit</Text>
            <Text style={styles.subText2}>Earn interest upfront</Text>
          </View>
          <View style={styles.rowDetails3}>
            <Text style={styles.rate}>Up to 26% per annum</Text>
            <Image source={require('../assets/lockmoney.png')} style={styles.icon1} />
          </View>
        </TouchableOpacity>

        <View style={styles.moreOptions}>
          <Text style={styles.more}>More</Text>
          <TouchableOpacity style={styles.moreOption}>
            <Image source={require('../assets/gift.png')} style={styles.iconSmall} />
            <View style={styles.columnOption}>
              <Text style={styles.moreText}>Referrals</Text>
              <Text style={styles.moreSubtext}>Refer and earn</Text>
            </View>
            <MaterialIcons style={styles.iconArrow} name='arrow-forward-ios' size={20} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.moreOption}>
            <Image source={require('../assets/wallet.png')} style={styles.iconSmall} />
            <View style={styles.columnOption}>
              <Text style={styles.moreText}>Autosave</Text>
              <Text style={styles.moreSubtext}>Easily schedule your deposits</Text>
            </View>
            <MaterialIcons style={styles.iconArrow} name='arrow-forward-ios' size={20} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SavingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  savingsText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  optionText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 16,
    color: "blue",
    textDecorationLine: "underline",
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 33,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  rowDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  mainText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    backgroundColor: "blue",
    borderRadius: 12,
    color: 'white',
    fontWeight: "600",
    paddingHorizontal: 8,
    fontSize: 12,
    marginRight: 132,
  },
  icons: {
    backgroundColor: "black",
    color: "white",
    borderRadius: 15,
    padding: 3,
  },
  rowDetails2: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 6,
  },
  subText: {
    fontSize: 12,
    color: '#555',
    backgroundColor: "#E1F5FE",
    fontWeight: "600",
    paddingHorizontal: 8,
    borderRadius: 15,
  },
  subText2: {
    fontSize: 12,
    color: '#555',
    backgroundColor: "#FFEBEE",
    fontWeight: "600",
    paddingHorizontal: 8,
    borderRadius: 15,
  },
  subText3: {
    fontSize: 12,
    color: '#555',
    backgroundColor: "#FFF9C4",
    fontWeight: "600",
    paddingHorizontal: 8,
    borderRadius: 15,
  },
  rowDetails3: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rate: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#00b300',
    paddingHorizontal: 8,
    borderRadius: 15,
    backgroundColor: "#E0F2F1",
  },
  icon1: {
    height: 40,
    width: 40,
  },
  moreOptions: {
    marginTop: 16,
  },
  more:{
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  moreOption: {
    backgroundColor: '#f9f9f9',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  columnOption: {
    flexDirection: "column",
    flex: 1,
    marginLeft: 8,
  },
  moreText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  moreSubtext: {
    fontSize: 12,
    color: '#555',
  },
  iconSmall: {
    height: 30,
    width: 30,
  },
  iconArrow: {
    color: '#555',
  },
});
