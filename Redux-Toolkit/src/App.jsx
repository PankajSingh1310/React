import React, { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, decrementByAmount } from './feautres/CounterSlice.js'

export function App() {

  const [val, setVal] = useState(0);

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  console.log(val)

  return (
    <div className='counter'>
      <div>
        <button
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <br /> <br />
        <span>{count}</span>

        <br /> <br />

        <button
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <br /> <br />

        <input type="number" 
        value={val}
        placeholder='Enter the amount'
        onChange={(e) => setVal(e.target.value)}
        />

        <br /> <br />

        <button
          onClick={() => dispatch(incrementByAmount(val))}
        >
          Increase by Value
        </button>

        <button
          onClick={() => dispatch(decrementByAmount(val))}
        >
          Decrease by Value
        </button>

      </div>
    </div>
  )
}

export default App
