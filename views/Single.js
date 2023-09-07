import React from 'react';
import PropTypes from 'prop-types';
import {ActivityIndicator} from 'react-native';
import {mediaUrl} from '../utils/app-config';
import {Card, Icon, ListItem, Text} from '@rneui/themed';
import {formatDate} from '../utils/functions';

const Single = ({route, navigation}) => {
  const singleMedia = route.params;
  console.log('route params', route.params);
  return (
    <Card>
      <Card.Title>{singleMedia.title}</Card.Title>
      <Card.Image
        source={{
          uri: mediaUrl + singleMedia.filename,
        }}
        PlaceholderContent={<ActivityIndicator />}
        resizeMode="center"
        style={{height: 300}}
      />
      <ListItem>
        <Text>{singleMedia.description}</Text>
      </ListItem>
      <ListItem>
        <Icon name="person" />
        <Text>user ID: {singleMedia.user_id}</Text>
      </ListItem>
      <ListItem>
        <Icon name="today" />
        <Text>Uploaded at: {formatDate(singleMedia.time_added)}</Text>
      </ListItem>
    </Card>
  );
};

Single.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};

export default Single;
