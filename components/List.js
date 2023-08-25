import { FlatList } from "react-native";
import ListItem from "./ListItem";
import {StyleSheet, SafeAreaView, Platform} from 'react-native';
import { useEffect, useState } from "react";

const url = 'https://raw.githubusercontent.com/mattpe/wbma/master/docs/assets/test.json';
let mediaArray = [];





const List = () => {
  const [mediaArray, setMediaArray] = useState([]);

  const loadMedia = async () => {
    try {
      const response = await fetch(url);
      const json = response.json();
      //console.log(json);
      setMediaArray(json);
    } catch (error) {
      console.error('loadMedia failed', error);
      }
  };

  useEffect(() => {
    loadMedia();
  }, []);


  return
    <FlatList data={mediaArray}
     renderItem={({item}) => <ListItem singleMedia={item}/> } />;
};


export default List;
