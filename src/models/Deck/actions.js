import * as types from './constants'

export const getDecks = () => ({
  type: types.GET_DECKS,
})

export const saveDeck = (title) => ({
  type: types.SAVE_DECK,
  payload: title,
})

export const saveCard = (card) => ({
  type: types.SAVE_CARD,
  payload: { ...card },
})