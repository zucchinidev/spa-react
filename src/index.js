import React from 'react'
import { createStore } from 'redux'
import searcher from './reducers/searcher'
import { Searcher } from './containers'
import { Provider } from 'react-redux'
let store = createStore(searcher)

const SampleSpa = () => (
  <Provider store={store}>
    <Searcher />
  </Provider>
)

export default SampleSpa
