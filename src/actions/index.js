import { 
  GET_DECKS, 
  SAVE_DECK,
} from './constants';

export const getDecks = ({ decks }) => ({
  type: GET_DECKS,
  payload: decks,
})

export const saveDeck = (title) => ({
  type: SAVE_DECK,
  payload: title,
})