import React, { Component } from 'react'
import axios from 'axios'
import User from './User'
import SearchUsers from './SearchUsers'

export class Users extends Component {
    state = {
        users: []
    }
    getUsers = () => {
        axios.get('https://api.github.com/users')
            .then(response => {
                //console.table(response.data)
                        this.setState({
                            users: response.data
                        }) 
            })
    }
    componentDidMount () {
        this.getUsers()
    }

    searchFromGit = (data) => {
        if(data !== '') {
            axios.get("https://api.github.com/search/users?q="+data)
            .then(response => {
                this.setState({
                    users: response.data.items
                })
            })
        }
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12 mb-2">
                        <SearchUsers getUserResults={this.searchFromGit} />
                    </div>
                </div>
                <div className="row">
                    {this.state.users.map( user => (
                        <div className="col-md-4 my-2" key={user.id}>
                            <User user={user} />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Users
