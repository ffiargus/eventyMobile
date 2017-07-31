import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Event extends Component {
  render() {
    const { type, serviceid, icon, timestamp, title, data, _id } = this.props.event;
    return (
      <View>
        <Text>{title}</Text>
        <Text>{type}</Text>
      </View>
    );
  }
}