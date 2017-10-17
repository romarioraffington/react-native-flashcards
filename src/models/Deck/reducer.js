// Our Dependencies
import { decks } from '../../storage/data'
import { FETCH_DECKS, SAVE_DECK } from './constants';

const initialState = {
  isFetching: false,
  decks,
  error: false,
}

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_DECKS:
      return {
        ...state,
        isFetching: true,
      }
    case SAVE_DECK:
      return {
        ...state,
        decks: {
          ...state.decks,
          [action.payload]: {
            title: action.payload
          }
        }
      }
    default: {
      return {
        ...state
      }
    }
  }
}