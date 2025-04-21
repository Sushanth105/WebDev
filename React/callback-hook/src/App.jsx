import { useState ,useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component1 from './components/Component1'
import Component2 from './components/Component2'
import Component3 from './components/Component3'
import Component4 from './components/Component4'

function App() {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState("Good")

  const setB =()=>{
    return "Bad"
  }

  const setM = useCallback(
    () => {
      return 'Bad'
    },
    [], // we can put dependency that can render only when the dependency changes
  )
  

  return (
    <>
      {/* <Component1 value={value} />  */}
      {/* <Component2 value={value} /> */}
      {/* <Component3 value={setB} /> */}
      <Component4 value={setM} />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
