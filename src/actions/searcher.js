import * as types from './actionTypes'

export const filterDogs = (filter) => {
  return {
    type: types.FILTER_DOG,
    payload: {
      ...filter
    }
  }
}
