import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import Event from './event';

@connect((state) => ({
    events: state.events,
    loading: state.loading

  })
)

export default class Events extends Component {
  render() {
    const { events, loading } = this.props;
    return (
      <View>
        {
          !loading
          ? <View>
            {
              events.map((event) =>
                <Event key={event._id} event={event}/>
              )
            }
            </View>
          : <Text>Events loading..</Text>
        }
      </View>
    );
  }
}