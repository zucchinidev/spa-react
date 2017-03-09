import React, { Component, PropTypes } from 'react'
import { SearchFilters, CardList } from '../components'
import { connect } from 'react-redux'
import { filterDogs } from '../actions/searcher'


class Searcher extends Component {
  render () {
    return (
      <div>
        <SearchFilters onFilter={this.props.onFilter} />
        <div className="container">
          <CardList dogs={this.props.dogs} />
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

const mapStateToProps = (state) => state
const mapDispatchToProps = (dispatch) => {
  return {
    onFilter: (filter) => dispatch(filterDogs(filter))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Searcher)

