import dogs from '../data'
import { FILTER_DOG } from '../actions/actionTypes'

const searcher = (state = { dogs, originalDogs: dogs }, action) => {
  switch (action.type) {
    case FILTER_DOG:
      const filter = action.payload.text
      const dogs = state.originalDogs.filter(dog => applyFilter(dog.name, filter))
      return {
        filter,
        dogs,
        originalDogs: [...state.originalDogs]
      }
    default:
      return state
  }
}

const applyFilter = (name, filter) => {
  return name.toLowerCase().includes(filter.toLowerCase())
}

export default searcher
