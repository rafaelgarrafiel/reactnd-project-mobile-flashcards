import * as API from '../utils/api';

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const RECEIVE_DECK = 'RECEIVE_DECK'
export const ADD_DECK = 'ADD_DECK'

export const receiveDecks = decks => ({
    type: RECEIVE_DECKS,
    decks
});

export const receiveDeck = deck => ({
  type: RECEIVE_DECK,
  deck,
})

export const addDeck = deck => ({
  type: ADD_DECK,
  deck,
})

export const getDecks = () => dispatch => (
  // console.log("Novo")
    API
      .getDecks()
      .then(decks => dispatch(receiveDecks(decks)))
    // API
      // .getDecks()
      // .then((decks) => {
        // console.log(decks)
      // })
);

export const saveDeckTitle = (deck) => dispatch => (
  // console.log(title)
    API
      .saveDeckTitle(deck)
      .then(newDeck => dispatch(addDeck(deck)))
);

// export const getCategories = () => dispatch => (
//     API
//       .getCategories()
//       .then(categories => dispatch(fetchCategories(categories)))
// );