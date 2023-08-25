import {StyleSheet, SafeAreaView, Platform} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import List from './components/List';



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
       <SafeAreaView style={styles.container}>
        <List/>
    <StatusBar style="auto"/>
    </SafeAreaView>
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
