import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { eventReducer } from './redux/eventReducer';
import { apiMiddleware } from './redux/apiMiddleware';
import { Text, View } from 'react-native';
import Events from './event';

const middleware = applyMiddleware(apiMiddleware);
const store = createStore(eventReducer, middleware);

store.dispatch({type: 'GET_EVENT_DATA'})

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <Text>Hello</Text>
          <Events />
        </View>
      </Provider>
    );
  }
}