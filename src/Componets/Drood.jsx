import React from 'react'
import { useState } from 'react'

const Drood = () => {
    const [count,setCount] = useState(0)
  return (
    <div>
      <button className='color' onClick={() => setCount(count + 1)}>PLUS</button>
      <button className='color1' onClick={() => setCount(count - 1)}>MINUS</button>
      <button className='color' onClick={() => setCount(count * 0)}>RESET</button>
      <button className='color11' onClick={() => setCount(Math.floor(Math.random() * 500))}>RANDOM NUMBER</button>
      <div className='center1'>
      {count%2===0? "Even" : "Odd"}
      </div>
      <div className='center'>
      {count}
      </div>
    </div>
  )
}

export default Drood
