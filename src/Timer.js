import React from 'react';
import ReactDOM from 'react-dom';

import './style.css'

var interval;

class Timer extends React.Component{
  constructor(){
    super();
    this.state = {
      hour:0,
      minute:0,
      second:0,
      isStart:false
    }
  }

  startInterval = ()=>{
    if (this.state.isStart == false) {
      this.setState({
        isStart: true
      })
      interval = setInterval(()=>{
        this.setState({
          second: this.state.second + 1
        })
        if (this.state.second == 60) {
          this.setState({
            second: 0,
            minute: this.state.minute + 1
          })
        }
        if (this.state.minute == 60) {
          this.setState({
            minute: 0,
            hour: this.state.hour + 1
          })
        }
      } , 1000)
    }
  }

  stopInterval = ()=>{
    this.setState({
      isStart: false
    })
    clearInterval(interval);
  }

  resetInterval = ()=>{
    this.stopInterval();
    this.setState({
      hour:0,
      minute:0,
      second:0,
    })
  }

  render(){
    let h = this.state.hour
    let m = this.state.minute
    let s = this.state.second
    return(
      <>
        <h2 className="timer">
          {`${h > 9 ? h : "0"+h} : ${m > 9 ? m : "0"+m} : ${s > 9 ? s : "0"+s}`}
        </h2>
        <div className="button_box">
          <span className="action_button start_burtton" onClick={this.startInterval}>start</span>
          <span className="action_button stop_burtton" onClick={this.stopInterval}>stop</span>
          <span className="action_button reset_burtton" onClick={this.resetInterval}>reset</span>
          <span className="action_button reset_burtton" onClick={this.props.handleSetTitle}>test</span>

        </div>
      </>
    )
  }
}

export default Timer;