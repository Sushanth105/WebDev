import React from 'react'

function Component1(props) {
    console.log("component1")
    return (
        <div>Component1 is {props.value}</div>
    )
}

export default Component1