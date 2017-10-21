// Our Dependencies
import * as types from './constants';

const initialState = {
  lastQuizTaken: '',
  lastScore: '',
}

export default (state = initialState, action) => {
  switch(action.type) {
    case types.REHYDRATE:
      return {
        ...state,
        ...action.payload.status,
      }

    case types.GET_STATUS:
      return {
        ...state,
      }

    case types.SAVE_STATUS: 
      return {
        ...state,
        ...action.payload
      }
      
    default: {
      return {
        ...state
      }
    }
  }
}