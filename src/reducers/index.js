import { combineReducers } from 'redux';
import { Cards } from './Cards'
import { Decks } from './Decks'

const rootReducer = combineReducers({
  Cards,
  Decks
});

export default rootReducer;