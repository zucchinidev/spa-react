import React from 'react'
import { createStore } from 'redux'
import rootReduce from './reducers/root'
import { Searcher, Dog } from './containers'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'

let store = createStore(rootReduce)

const SampleSpa = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Searcher} />
      <Route path="/dog/(:id)" component={Dog} />
    </Router>
  </Provider>
)

export default SampleSpa
