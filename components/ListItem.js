import { Image, Text, TouchableOpacity } from "react-native";
import PropTypes from 'prop-types';


const ListItem = (props) => {
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
};

ListItem.PropTypes = {};
  singleMedia: PropTypes.object
export default ListItem;
