// Our Dependencies
import * as types from './constants';

const initialState = {
  decks: {},
}

export default (state = initialState, action) => {
  switch(action.type) {
    case types.REHYDRATE: 
      const { decks } = action.payload.deck || {}
      return {
        ...state,
        decks: {
          ...state.decks,
          ...decks,
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

    case types.SAVE_CARD:
      const { title, question, answer } = action.payload
      return {
        ...state,
        decks: {
          ...state.decks,
          [title]: {
           ...state.decks[title],
            questions: state.decks[title].questions.concat({
              question,
              answer,
            })
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