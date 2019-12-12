import './App.css';
import React, { Component } from 'react'

 class Time extends Component {
     constructor(props){
         super(props)
         
     this.state={
         timeMs:0,
         isRuning:false
     }
    }
    
     start =() =>{
        if (this.state.isRuning){
            clearInterval(this.interval)
            this.setState({
                isRuning:false
            })
      } 
     else{ this.interval=setInterval(
          () => {
             this.setState({
                 timeMs: this.state.timeMs + 1,isRuning:true}) 
            },
            1000
        )
    }}
    reset=()=>{clearInterval(this.interval)
        this.setState({
            isRuning:false,timeMs:0
        })}
    msToTime =seconds =>
{const sec = seconds % 60;
  const min= Math.floor(seconds / 60) % 60;
  const hour=Math.floor(seconds / 3600)%60;
  const hours=Math.floor(hour/10) > 0 ? hour: '0' + hour;
  const minute=Math.floor(min/10) > 0 ? min : '0' + min;
  const second=Math.floor(sec/10) > 0 ? sec : '0' + sec;
  return (hours) + ':'
  + (minute) + ':'
  + (second)
}
     
    render() {
        return (
        <div className='time'>
            <div className='timeD'>
        <p> {this.msToTime(this.state.timeMs)}</p>
            </div>
             <div className='timeI'>
                <div >Hour </div>
                <div >Minute </div>
                <div >second </div>
             </div>
            <button className="btnS" onClick={this.start}> {this.state.isRuning?"Pause":"Start"}</button>
            <button className="btnR" onClick={this.reset}> Reset</button> 
        </div>)
        
    }
 }
export default Time