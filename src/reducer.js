// External Dependencies
import { combineReducers } from 'redux';

// Reducers
import deck from './models/Deck/reducer';
import status from './models/Status/reducer';

export default combineReducers({
  deck,
  status,
})