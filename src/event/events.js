import React, { Component } from 'react';
import { connect } from 'react-redux';
import Event from './event';

import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator
} from 'react-native';

@connect((state) => ({
    events: state.events,
    loading: state.loading

  })
)

export default class Events extends Component {
  render() {
    const { events, loading } = this.props;
    return (
      <View style={styles.container}>
        {
          !loading
          ? <ScrollView>
            {
              events.map((event) =>
                <Event key={event._id} event={event}/>
              )
            }
            </ScrollView>
          : <ActivityIndicator
            animating={loading}
            style={styles.loader}
            size="large"
          />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,         // start below status bar
    flex: 1,
  },
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContent: {
    flexDirection: 'row',   // arrange posters in rows
    flexWrap: 'wrap',       // allow multiple rows
  },
});