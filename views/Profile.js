import React, { useContext } from 'react'
//import PropTypes from 'prop-types'
import { SafeAreaView, StyleSheet, Text, Button } from 'react-native'
import { MainContext } from '../contexts/MainContext';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Profile = props => {
  const {setIsLoggedIn, user} = useContext(MainContext);
  const logOut = async () => {
    console.log('profile, logout');
    try {
      await AsyncStorage.clear();
      setIsLoggedIn(false);
    }catch(error) {
      console.error(error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
    <Text>Profile view</Text>
    <Button title="Log out" onPress={logOut}/>
    <Text>{user.username}</Text>
    <Text>{user.email}</Text>
    <Text>{user.full_name}</Text>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? 30 : 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',


  },
  TouchableOpacity: {
    marginVertical: 2,
  },
  box: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'lightgrey',

  },
  Image: {
    margin: 5,
    width: '45%',
    height: 'auto',
  },
  View: {
    width: '50%',
    margin: 5,

  },
  Text: {
    height: 'auto',
    width: '100%',
  },
});

Profile.propTypes = {}

export default Profile
