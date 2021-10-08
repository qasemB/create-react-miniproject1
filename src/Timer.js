import React from 'react';
import ReactDOM from 'react-dom';

import './style.css'

class Timer extends React.Component{
  constructor(){
    super();
    this.state = {
      time : new Date().toLocaleTimeString()
    }
  }
  componentDidMount(){
      setInterval(()=>{
        this.setState({
          time:new Date().toLocaleTimeString()
        })
      } , 1000)
  }
  render(){
    return(
      <h2 className="timer">
        it is {this.state.time}
      </h2>
    )
  }
}

export default Timer;