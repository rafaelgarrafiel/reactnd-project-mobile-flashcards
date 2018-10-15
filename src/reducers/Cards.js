import { 
  RECEIVE_CARD, 
  ADD_CARD, 
} from '../actions/Cards'

export const Cards = (state = {}, action) => {

    const { type } = action

    switch ( type ) {

        case RECEIVE_CARD :
            return state

        case ADD_CARD :
            return state

        default :
            return state
    }
}