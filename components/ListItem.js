import React from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const ListItem = (props) => {
  return (
    <TouchableOpacity style={styles.TouchableOpacity}>
      <View style={styles.box}>
        <Image
          style={styles.Image}
          source={{ uri: props.singleMedia.thumbnails.w160 }}
        />
        <View style={styles.View}>
          <Text style={styles.Title}>{props.singleMedia.title}</Text>
          <Text>{props.singleMedia.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

ListItem.propTypes = {
  singleMedia: PropTypes.object,
};

const styles = StyleSheet.create({
  TouchableOpacity: {
    marginVertical: 2,
  },
  box: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'lightblue',
    borderRadius: 5,
  },
  Image: {
    margin: 10,
    width: '45%',
    height: 200,
    borderRadius: 5,
  },
  View: {
    width: '50%',
    margin: 5,
  },
  Title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ListItem;
