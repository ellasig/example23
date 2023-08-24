import {FlatList, StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';
import {StatusBar} from 'expo-status-bar';

const mediaArray = [
  {
    'key': '0',
    'title': 'Title 1',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.',
    'thumbnails': {
      w160: 'http://placekitten.com/160/161',
    },
    'filename': 'http://placekitten.com/2048/1920',
  },
  {
    'key': '1',
    'title': 'Title 2',
    'description': 'Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. ',
    'thumbnails': {
      w160: 'http://placekitten.com/160/164',
    },
    'filename': 'http://placekitten.com/2041/1922',
  },
  {
    'key': '2',
    'title': 'Title 3',
    'description': 'Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. ',
    'thumbnails': {
      w160: 'http://placekitten.com/160/167',
    },
    'filename': 'http://placekitten.com/2039/1920',
  },
];

/*
const App = () => {
 return (
   <>
      <View style={styles.container}>
      <FlatList
    data={mediaArray}
    renderItem={({item}) => {
      return (
        <TouchableOpacity>
          <Image
            style={{width: 100, height: 100}}
            source={{uri: item.thumbnails.w160}}
          />
          <View>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        </TouchableOpacity>
      );
    }}
  />
   <StatusBar style="auto"/>
   </View>
   </>
 );
};

*/
/*
const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#fff',
   alignItems: 'center',
   justifyContent: 'center',
 },
});
*/



const App = () => {
  return (
    <>
       <View style={styles.container}>
       <FlatList
     data={mediaArray}
     renderItem={({item}) => {
      return (
        <TouchableOpacity style={styles.itemContainer}>
          <Image
            style={styles.thumbnail}
            source={{uri: item.thumbnails.w160}}
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        </TouchableOpacity>
      );
    }}

   />
    <StatusBar style="auto"/>
    </View>
    </>
  );
 };


 const styles = StyleSheet.create({

  itemContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  thumbnail: {
    width: 100,
    height: 200,
    /*marginRight: 10,*/
    borderRadius: 5,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    /*marginBottom: 5, */
  },
  description: {
    fontSize: 14,
  },
});






export default App;
