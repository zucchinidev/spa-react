import React, { PropTypes } from 'react'
import Card from './card'

const CardList = ({ teachers }) => (
  <div className="section">
    {teachers.map(teacher => <Card {...teacher} key={teacher.id} />)}
  </div>
)

CardList.propTypes = {
  teachers: PropTypes.array
}

export default CardList
