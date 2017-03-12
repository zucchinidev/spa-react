import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { DogTitle, DogDescription } from '../components'
import { requestDog } from '../actions/dog'
class Dog extends Component {
  componentDidMount () {
    this.props.onRequestDog(this.props.id)
  }

  render () {
    return (
      <div>
        <DogTitle {...this.props} />
        <DogDescription {...this.props} />
      </div>
    )
  }
}

Dog.propTypes = {
  onRequestDog: PropTypes.func,
  id: PropTypes.string
}

const mapStateToProps = (state, ownProps) => {
  // ownProps: React-Router. Params has all properties of router.
  return {
    ...ownProps.params,
    ...state.dog,
    id: ownProps.params.id // get param id for url
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestDog: (id) => dispatch(requestDog(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dog)
