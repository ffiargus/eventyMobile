import { combineReducers } from 'redux';
// import { reducer as reduxFormReducer } from 'redux-form';
import { eventReducer } from './eventReducer';

//combine form and custom event reducer
export const reducer = combineReducers({
  // form: reduxFormReducer,
  event: eventReducer,
});