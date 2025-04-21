import React, { useContext, useEffect } from 'react'
import Component1 from './Component1'
import { countContext } from '../context/Context'

function Button() {

    const counter = useContext(countContext);
    return (
        <div>
            <button onClick={()=>{counter.setCount(counter.count + 1)}} >
                <Component1 />
            </button>
        </div>
    )
}

export default Button