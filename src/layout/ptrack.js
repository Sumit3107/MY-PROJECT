import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Stopwatch from "./stopwatch";
import '../css/ptrack.css'
export class ptrack extends Component {
    constructor(props){
        super(props);
        this.state={
            times:[
                {
                    hours:"",
                    minutes:"",
                    sec:"",
                    cen:""
                }
            ]
        }    
    }
    saveTimer=(h,m,s,c)=>{
        const newtime={
            hours:h,
            minutes:m,
            sec:s,
            cen:c
        }
        this.setState({times: [...this.state.times, newtime]});
    }
    render() {
        console.log("hjagsj"+this.state.times[0].hours);
        return (
            <Router> 
                <div className="pcont">
                    <div className="phead">
                        <h1>Taskname</h1>
                        <div className="time">
                            <Stopwatch saveTimer={this.saveTimer}/>
                        </div>
                    </div>
                    <div className="pdet">
                        <h2>/Project</h2>
                        <h3 style={{textAlign:"center"}}>Work History</h3>
                        <div>
                        <Route exact path="/profile/projecttracker/time" render={props => (
                            <React.Fragment>
                                {this.state.times.map((time,index)=>{
                                    return(
                                        <div className="his" key={index}>
                                            <ul>
                                                <li>{time.key} {time.hours}:{time.minutes}:{time.sec}:{time.cen}</li>
                                            </ul>
                                        </div>
                                    )
                                })}
                            </React.Fragment>
                        )}/>
                        </div>
                    </div>
                </div>
            </Router>       
        )
    }
}

export default ptrack
