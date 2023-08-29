import React from 'react';
import PropTypes from 'prop-types';
import { Text, SafeAreaView, StyleSheet} from 'react-native';

const Single = ({route, navigation}) => {
  const singleMedia = route.params;
  console.log('route params', route.params);
  return (
    <SafeAreaView style= {styles.container}>
      <Text>{singleMedia.title}</Text>
    </SafeAreaView>
  );
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

Single.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};

export default Single
