import * as API from '../utils/api';

export const RECEIVE_CARDS = 'RECEIVE_CARDS'
export const ADD_CARD = 'ADD_CARD'

export const receiveCards = cards => ({
  type: RECEIVE_CARDS,
  cards,
})

export const addCard = card => ({
  type: ADD_CARD,
  card,
})
