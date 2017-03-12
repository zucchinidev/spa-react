import * as types from '../actions/actionTypes'
import dogs from '../data'

const dog = (state = {}, action) => {
  switch (action.type) {
    case types.REQUEST_DOG:
      return dogs.filter(dog => dog.id === action.payload.id).reduce(d => d)
    default:
      return state
  }
}

export default dog
