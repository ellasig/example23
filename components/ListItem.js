import React from 'react';
import { Image, Text, TouchableOpacity, View, ImageBackground, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const ListItem = (props) => {
  return (

      <View style={styles.container}>


      <TouchableOpacity style={styles.TouchableOpacity}>
        <View style={styles.box}>
          <Image
            style={styles.Image}
            source={{ uri: props.singleMedia.thumbnails.w160 }}
          />
          <View style={styles.View}>
            <Text style={styles.Title}>{props.singleMedia.title}</Text>
            <Text style={styles.Description}>{props.singleMedia.description}</Text>
          </View>
          </View>
      </TouchableOpacity>
      </View>
  );
};


ListItem.propTypes = {
  singleMedia: PropTypes.object,
};

const styles = StyleSheet.create({


  container: {
    margin: 10,
    padding: 10,
    backgroundColor: 'grey',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 10,
  },

  header: {
    height: 200,
    //justifyContent: 'center',
    //alignItems: 'center'
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  
  TouchableOpacity: {
    marginVertical: 2,
    padding: 5,
  },

  box: {
    flexDirection: 'row',
    borderRadius: 15,
    margin: 10,
    padding: 10,
    justifyContent: 'center'
  },
  Image: {
    width: '45%',
    height: 250,
    borderRadius: 40,

  },

  View: {
    width: '60%',
    marginLeft: 20,
  },
  Title: {
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'italic',

  },
  Description: {
    marginTop: 5,
    marginBottom: 5,
    fontStyle: 'italic',
    margin: 5,
    color: 'white'


  },
});

export default ListItem;
