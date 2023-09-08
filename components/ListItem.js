import PropTypes from 'prop-types';
import {mediaUrl} from '../utils/app-config';
import {Avatar, ListItem as RNEListItem} from '@rneui/themed';

const ListItem = ({singleMedia, navigation}) => {
  return (
    <RNEListItem
      bottomDivider
      onPress={() => {
        console.log('touched', singleMedia.title);
        navigation.navigate('Single', singleMedia);
      }}
    >
      <Avatar
        size="large"
        source={{uri: mediaUrl + singleMedia.thumbnails.w160}}
      ></Avatar>
      <RNEListItem.Content>
        <RNEListItem.Title>{singleMedia.title}</RNEListItem.Title>
        <RNEListItem.Subtitle numberOfLines={3}>
          {singleMedia.description}
        </RNEListItem.Subtitle>
      </RNEListItem.Content>
      <RNEListItem.Chevron />
    </RNEListItem>
  );
};

ListItem.propTypes = {
  singleMedia: PropTypes.object,
  navigation: PropTypes.object,
};

export default ListItem;
