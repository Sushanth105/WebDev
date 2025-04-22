import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar'
import './App.css'
import { decrement , increment ,incrementByAmount , reset ,decrementByAmount} from './features/counter/counterSlice'
import { useSelector , useDispatch } from 'react-redux'

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <NavBar/>
      <button onClick={()=> dispatch(decrement())}>-</button>
      <span>{count}</span>
      <button onClick={()=> dispatch(increment())}>+</button>
      <div>
        <button onClick={()=> dispatch(decrementByAmount(2))}>decrementByTwo</button>
        <button onClick={()=> dispatch(incrementByAmount(2))}>incrementByTwo</button>
      </div>
      <div>
        <button onClick={()=> dispatch(reset())}>reset</button>
      </div>
    </>
  )
}

export default App
