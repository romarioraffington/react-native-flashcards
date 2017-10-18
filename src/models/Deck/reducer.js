// Our Dependencies
import * as types from './constants';

const initialState = {
  decks: {},
}

export default (state = initialState, action) => {
  switch(action.type) {
    case types.REHYDRATE: 
      return {
        ...state,
        decks: {
          ...state.decks,
          ...action.payload.deck,
        }
      }
    case types.GET_DECKS:
      return {
        ...state,
      }
    case types.SAVE_DECK:
      return {
        ...state,
        decks: {
          ...state.decks,
          [action.payload]: {
            title: action.payload,
            questions: [],
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