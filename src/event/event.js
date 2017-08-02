import React, { Component } from 'react';
import { includes } from 'lodash';

import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';

export default class Event extends Component {
  render() {
    const { type, serviceid, icon, timestamp, title, data, _id } = this.props.event;
    return (
      <View style={styles.event}>
        <Image
          style={styles.image}
          source={{uri: includes(icon, 'https://') ? icon : 'https://www.trashedgraphics.com/images/default_icon.png'}}
        />
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.type}>{type}</Text>
        </View>
        <View/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  event: {
    padding: 10,         // start below status bar
    margin: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#9099A2',
    borderWidth: 1,
    borderRadius: 10
  },
  title: {

  },
  type: {

  },
  image: {
    width: 100,
    height: 100
  }
});