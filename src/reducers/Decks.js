import { 
  RECEIVE_DECKS, 
  RECEIVE_DECK, 
  ADD_DECK
} from '../actions/Decks'

export const Decks = (state = {}, action) => {

    const { type, decks, deck } = action
    console.log(action)
    // console.log(state)
    // debugger

    switch ( type ) {

        case RECEIVE_DECKS :
            return {
              ...state,
              decks: decks
            }

        case RECEIVE_DECK :
            return state

        case ADD_DECK :
            return { 
                ...state,
                decks: [...state.decks, {
                    deck
                  }]
            }

        default :
            return state
    }
}