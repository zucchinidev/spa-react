import React, { Component, PropTypes } from 'react'
import { SearchFilters, CardList } from '../components'
import { connect } from 'react-redux'

class Searcher extends Component {
  render () {
    return (
      <div>
        <SearchFilters />
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
  }))
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps)(Searcher)

