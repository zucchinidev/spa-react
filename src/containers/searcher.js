import React, { Component, PropTypes } from 'react'
import { SearchFilters, CardList } from '../components'
import { connect } from 'react-redux'
import { filterDogs } from '../actions/searcher'

class Searcher extends Component {
  render () {
    const { dogs, onFilter } = this.props
    return (
      <div>
        <SearchFilters onFilter={onFilter} />
        <div className="container">
          <CardList dogs={dogs} />
        </div>
      </div>
    )
  }
}

Searcher.propTypes = {
  dogs: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string
  })),
  onFilter: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    dogs: state.searcher.dogs
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onFilter: (filterData) => dispatch(filterDogs(filterData))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Searcher)
