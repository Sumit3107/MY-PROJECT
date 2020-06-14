import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProjectTracker from './ptrack'
import Project from './project'
import '../css/profile.css'
export class profile extends Component {
    render() {
        return (
            <Router>
                <div className="cont">
                    <div className="pro">
                        <Project />
                    </div>
                    <div className="ptr">
                        <Route path="/profile/projecttracker" component={ProjectTracker} /> 
                    </div>
                </div>
            </Router>
        )
    }
}

export default profile
