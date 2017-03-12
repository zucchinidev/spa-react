import React, { PropTypes } from 'react'

const DogDescription = ({ name, avatar, description }) => {
  return (
    <div className="container">
      <div className="row">
        <img alt={name} className="col s3 responsive-img" src={avatar} />
        <p className="flow-text">
          {description}
        </p>
      </div>
    </div>
  )
}

DogDescription.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  description: PropTypes.string
}

export default DogDescription
