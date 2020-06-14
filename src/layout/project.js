import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../css/project.css'
export class project extends Component {
    render() {
        return (
            <div className="forms">
                <h1>Open Your Project</h1>
                <form>
                    <label>Task Name</label>
                    <input type="text" name="taskname" required/>
                    <label>Project:</label>
                    <select>
                        <option value="Project 1">Project 1</option>
                        <option value="Project 2">Project 2</option>
                        <option value="Project 3">Project 3</option>  
                    </select>
                    <label>Start:</label>
                    <input type="time" name="start" required/>
                    <label>End:</label>
                    <input type="time" name="end" required/>
                    <Link className="reg" to="/profile/projecttracker" >Submit</Link>
                </form>
            </div>
        )
    }
}

export default project
