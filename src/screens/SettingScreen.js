import { StyleSheet, Text, View, TouchableOpacity, Switch, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { MaterialIcons, Fontisto, SimpleLineIcons,Ionicons } from 'react-native-vector-icons';

const SettingScreen = ({ navigation }) => {
  const [isBiometricEnabled, setIsBiometricEnabled] = useState(false);

  const toggleSwitch = () => setIsBiometricEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.rowheader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons style={styles.icons} name="arrow-back" size={24} color="indigo" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Settings</Text>
      </View>
       <ScrollView>
          <Text style={styles.bigText}>Security & Privacy</Text>
          <View style={styles.card}>
            <TouchableOpacity style={styles.row}>
              <View style={styles.iconContainer}>
                <SimpleLineIcons name='lock' size={20} color={'indigo'} />
              </View>
              <Text style={styles.text}>Change Password</Text>
              <SimpleLineIcons style={styles.arrowIcon} name='arrow-right' size={14} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.row}>
              <View style={styles.iconContainer}>
                <SimpleLineIcons name='lock' size={20} color={'indigo'} />
              </View>
              <Text style={styles.text}>Reset User PIN</Text>
              <SimpleLineIcons style={styles.arrowIcon} name='arrow-right' size={14} />
            </TouchableOpacity>
            <View style={styles.row}>
              <View style={styles.iconContainer}>
                <Ionicons name='eye-off-outline' color={'indigo'} size={20} />
              </View>
              <Text style={styles.text}>Hide Balance</Text>
              <Switch 
                style={styles.switch}
                trackColor={{ false: '#E0E0E0', true: '#44E' }}
                thumbColor={isBiometricEnabled ? 'white' : 'white'}
                ios_backgroundColor="#F5F5F5"
                onValueChange={toggleSwitch}
                value={isBiometricEnabled}
              />
            </View>
          </View>

          <Text style={styles.bigText}>App & Device</Text>
          <View style={styles.card}>
            <TouchableOpacity style={styles.row}>
              <View style={styles.iconContainer}>
                <SimpleLineIcons name='screen-smartphone' size={20} color={'indigo'} />
              </View>
              <Text style={styles.text}>Device Management</Text>
              <SimpleLineIcons style={styles.arrowIcon} name='arrow-right' size={14} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.row}>
              <View style={styles.iconContainer}>
                <SimpleLineIcons name='bell' size={20} color={'indigo'} />
              </View>
              <Text style={styles.text}>Notification Preferences</Text>
              <SimpleLineIcons style={styles.arrowIcon} name='arrow-right' size={14} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.row}>
              <View style={styles.iconContainer}>
                <MaterialIcons name='palette' size={20} color={'indigo'} />
              </View>
              <Text style={styles.text}>Themes</Text>
              <SimpleLineIcons style={styles.arrowIcon} name='arrow-right' size={14} />
            </TouchableOpacity>
          </View>

          <Text style={styles.bigText}>Transactions</Text>
          <View style={styles.card}>
            <TouchableOpacity style={styles.row}>
              <View style={styles.iconContainer}>
                <SimpleLineIcons name='phone' size={20} color={'indigo'} />
              </View>
              <Text style={styles.text}>Phone Number Account</Text>
              <SimpleLineIcons style={styles.arrowIcon} name='arrow-right' size={14} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.row}>
              <View style={styles.iconContainer}>
                <Fontisto name='arrow-swap' size={20} color={'indigo'} />
              </View>
              <Text style={styles.text}>Transaction Limits</Text>
              <SimpleLineIcons style={styles.arrowIcon} name='arrow-right' size={14} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.row}>
              <View style={styles.iconContainer}>
                <SimpleLineIcons name='wallet' size={20} color={'indigo'} />
              </View>
              <Text style={styles.text}>Account Limits</Text>
              <SimpleLineIcons style={styles.arrowIcon} name='arrow-right' size={14} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.row}>
              <View style={styles.iconContainer}>
                <SimpleLineIcons name='people' size={20} color={'indigo'} />
              </View>
              <Text style={styles.text}>Beneficiaries</Text>
              <SimpleLineIcons style={styles.arrowIcon} name='arrow-right' size={14} />
            </TouchableOpacity>
          </View>

          <Text style={styles.bigText}>Others</Text>
          <View style={styles.card}>
            <TouchableOpacity style={styles.row}>
              <View style={styles.iconContainer}>
                <Ionicons name='language' size={20} color={'indigo'} />
              </View>
              <Text style={styles.text}>Language</Text>
              <SimpleLineIcons style={styles.arrowIcon} name='arrow-right' size={14} />
            </TouchableOpacity>
          </View>

        </ScrollView>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  rowheader: {
    flexDirection: 'row',
    marginTop: 40,
    marginBottom: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 100,
    color: '#000',
  },
  icons: {
    paddingHorizontal: 10,
  },
  bigText: {
    marginLeft: 22,
    marginBottom: 10,
    fontSize: 12,
    fontWeight: 'bold',
    color: "grey",
  },
  card: {
    backgroundColor: 'white',
    width: '90%',
    height: 'auto',
    marginLeft: 22,
    borderRadius: 7,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  iconContainer: {
    backgroundColor: "#F3E5F5",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,    
  },
  text: {
    flex: 1,
    color: 'black',
    marginLeft: 20,
    fontWeight: '600',
  },
  arrowIcon: {
    marginTop: 11,
    color: '#000',
  },
});

