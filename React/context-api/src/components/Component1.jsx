import React , {useContext} from 'react'
import { countContext } from '../context/Context'

function Component1() {
  const counter = useContext(countContext)

  return (
    <div>{counter.count}</div>
  )
}

export default Component1