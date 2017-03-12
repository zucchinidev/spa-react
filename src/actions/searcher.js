import * as types from './actionTypes'

/**
 * Execute action when we need filter dogs
 * @param {{}} filterData
 * @param {string} filterData.text
 * @returns { { type, payload: {filterData} } }
 */
export const filterDogs = (filterData) => {
  return {
    type: types.FILTER_DOG,
    payload: {
      ...filterData
    }
  }
}
