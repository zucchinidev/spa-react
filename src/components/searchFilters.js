import React, { Component, PropTypes } from 'react'
class SearchFilters extends Component {

  constructor (...args) {
    super(...args)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()
    this.props.onFilter({
      text: this.input.value
    })
  }

  render () {
    return (
      <nav>
        <div className="nav-wrapper">
          <div className="col s12">
            <form onSubmit={this.handleSubmit}>
              <div className="input-field">
                <input ref={(node) => (this.input = node)} id="search" type="search" />
                <label htmlFor="search"><i className="material-icons">search</i></label>
                <i className="material-icons">close</i>
              </div>
            </form>
          </div>
        </div>
      </nav>
    )
  }
}

SearchFilters.propTypes = {
  onFilter: PropTypes.func
}

export default SearchFilters
