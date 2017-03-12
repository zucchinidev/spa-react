import React, { PropTypes } from 'react'

const DogTitle = ({ name }) => {
  return (
    <div className="section pink">
      <div className="container">
        <div className="row">
          <div className="col sm12 m9">
            <h1 className="header center-on-small-only grey-text text-lighten-5">
              {name}
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

DogTitle.propTypes = {
  name: PropTypes.string
}

export default DogTitle
