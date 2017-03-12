import * as types from './actionTypes'

export const requestDog = (id) => {
  return {
    type: types.REQUEST_DOG,
    payload: {
      id
    }
  }
}
