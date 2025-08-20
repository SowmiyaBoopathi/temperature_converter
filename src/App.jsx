import { useState } from 'react';
import Show from './show';
import Farenheit from './faren';

function App() {
  const [celsius,setCelsius] = useState(25);
  const [conv,setConv]=useState(true);
  function increase()
  {
    let val=celsius+1;
    setCelsius(val);
  }

  function decrease()
  {
    let val=celsius-1;
    setCelsius(val);
  }
  function setShow()
  {
    setConv(!conv);
    console.log(conv);
    
  }

  return (
    <>
    <h1 style={{fontSize:"60px"}}>Temperature Coverter</h1>
    <div className='all'>
      {conv && <Show celsius={celsius}/>}
      {!conv && <Farenheit  celsius={celsius} /> }
      <button className='btn' onClick={increase}>Increase</button>
      <button className='btn' onClick={decrease}>Decrease</button>
      <button className='btn' onClick={setShow}>Converter</button>
    </div>
    </>
  )
}

export default App
