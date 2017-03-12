import { combineReducers } from 'redux'

import searcher from './searcher'
import dog from './dog'

const rootReduce = combineReducers({
  searcher,
  dog
})

export default rootReduce
