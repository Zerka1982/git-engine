import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './User.css'

class User extends Component {
    render() {
        const {avatar_url, login, html_url, repos_url} = this.props.user;
        return (
            <div>
                <div className="card">
                    <img className="card-img-top" src= {avatar_url} alt="" />
                    <div className="card-body">
                        <h4 className="card-title">{login}</h4>
                        <p className="card-text buttonHolders">
                            <Link className="btn btn-primary" to={'/users/'+login}>Show more</Link>
                            <Link className="btn btn-warning" to={repos_url}>Repositories</Link> 
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default User
