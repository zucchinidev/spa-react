import React from 'react'
import { SearchFilters, CardList } from './components'
import data from './data'

const SampleSpa = () => (
  <div>
    <SearchFilters />
    <div className="container">
      <CardList teachers={data} />
    </div>
  </div>
)

export default SampleSpa
