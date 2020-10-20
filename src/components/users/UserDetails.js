import React, { Component } from 'react'
import axios from 'axios';
import User from './User';

class UserDetails extends Component {
    state = {
        user: {}
    }
    componentWillMount () {
        const login = this.props.match.params.login;
        axios.get(`https://api.github.com/users/${login}`)
            .then(res => {
                console.log(res.data)
                this.setState({
                    user: res.data
                })
            })
    }
    render() {
        
        return (
            <div>
                <User user={this.state.user} />
            </div>
        )
    }
}

export default UserDetails