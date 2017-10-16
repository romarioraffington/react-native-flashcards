import { 
  GET_DECKS, 
  SAVE_DECK,
 } from './actions/constants';

export default (state = {}, action) => {
  switch(action.type) {
    case GET_DECKS:
      return {
        ...state,
        ...action.payload
      }
    case SAVE_DECK:
      return {
        ...state,
        ...action.payload
      }
    return state
  }
}