import { 
  SAVE_DECK,
  FETCH_DECKS, 
} from './constants'

export const saveDeck = (title) => ({
  type: SAVE_DECK,
  payload: title,
})

export const fetchDecks = () => ({
  type: FETCH_DECKS,
})
