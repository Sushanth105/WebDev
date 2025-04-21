import React, { memo } from 'react'

function Component2(props) {
    console.log("component2")
    return (
        <div>Component2 is {props.value}</div>
    )
}

export default memo(Component2)