import dogs from '../data'
import { FILTER_DOG } from '../actions/actionTypes'
const searcher = (state = { dogs }, action) => {
  switch (action.type) {
    case FILTER_DOG:
      return {
        dogs: state.dogs.filter(dog => applyFilter(dog.name, action.payload.text))
      }
    default:
      return state
  }
}

const applyFilter = (name, filter) => {
  return filter !== '' ? name.toLowerCase().includes(filter.toLowerCase()) : true
}

export default searcher
