import React from 'react';
import logo from './logo.svg';
import './App.css';
const msToTime =seconds =>
{const sec = seconds % 60;
  const min= Math.floor(seconds / 60) % 60;
  const hour=Math.ceil(seconds / 3600)%60;
  const hours=Math.floor(hour/10) > 0 ? hour: '0' + hour;
  const minute=Math.floor(min/10) > 0 ? min : '0' + min;
  const second=Math.floor(sec/10) > 0 ? sec : '0' + sec;
  return (hours) + ':'
  + (minute) + ':'
  + (second)
}
const   Time= (props) =>{
  
  return (
<div className='time'>
    <div className='timeD'>
<p> {msToTime(props.seconds)}</p>
    </div>
     <div className='timeI'>
        <div >Hour </div>
        <div >Second </div>
        <div >Minute </div>
     </div>
</div>)
}

function App() {
  return (
    <div className="App">
      <Time seconds={}/>
    </div>
  );
}

export default App;
