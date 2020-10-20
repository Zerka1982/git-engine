import React, { Component } from 'react'

class SearchUsers extends Component {
    state = {
        search: ''
    }
    handleChange = (e) => {
        this.setState({
            search: e.target.value
        })
    }
    searchUsers = (e) => {
        e.preventDefault();
        this.props.getUserResults(this.state.search)
    }
    render() {
        const { search } = this.state
        return (
            <form onSubmit={this.searchUsers}>
                <div className="form-group">
                    <input onChange={this.handleChange} value={search} id="search" placeholder="Search Users..." type="text" className="form-control" />
                    <button className="btn btn-success btn-block my-2">Search</button>
                </div>
            </form>
        )
    }
}
export default SearchUsers