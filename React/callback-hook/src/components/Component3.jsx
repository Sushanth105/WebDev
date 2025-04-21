import React, { memo } from 'react'

function Component3(props) {
    console.log("component3")
    return (
        <div>Component3 is {props.value()}</div>
    )
}

export default memo(Component3)