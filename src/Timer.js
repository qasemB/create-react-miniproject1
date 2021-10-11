import React from 'react';
import ReactDOM from 'react-dom';

import './style.css'

var interval;

class Timer extends React.Component{
  constructor(){
    super();
    this.state = {
      time : new Date().toLocaleTimeString()
    }
  }

  componentDidMount(){

    console.log("componentDidMount");

    interval = setInterval(()=>{
      this.setState({
        time:new Date().toLocaleTimeString()
      })
    } , 1000)
  }

  componentDidUpdate(){
    if (this.state.time == "8:39:59 PM") {
      clearInterval(interval);
    }
  }

  componentWillUnmount(){
    
  }

  render(){
    console.log("render");
    return(
      <h2 className="timer">
        it is {this.state.time}
      </h2>
    )
  }
}

export default Timer;