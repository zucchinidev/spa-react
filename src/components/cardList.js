import React, { PropTypes } from 'react'
import Card from './card'

const CardList = ({ dogs }) => (
  <div className="section">
    {dogs.map(dog => <Card {...dog} key={dog.id} />)}
  </div>
)

CardList.propTypes = {
  dogs: PropTypes.array
}

export default CardList
