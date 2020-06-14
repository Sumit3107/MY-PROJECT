import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../css/register.css'
export class register extends Component {
    render() {
        return (
            <div>
                <form>
                    <h2 style={{textAlign:'center'}}>Register</h2>
                    Name
                    <input type="text" name="name"placeholder="Name" required/>
                    Username
                    <input type="text" name="username"placeholder="Username" required/>
                    Email
                    <input type="email" name="email" placeholder="Email Address" required/>
                    Password
                    <input type="password" name="pass" placeholder="Password" required/>
                    <Link className="reg" to="/profile">Register</Link>
                </form>
            </div>
        )
    }
}
export default register
