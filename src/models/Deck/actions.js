import * as types from './constants'

export const saveDeck = (title) => ({
  type: types.SAVE_DECK,
  payload: title,
})

export const getDecks = () => ({
  type: types.GET_DECKS,
})
