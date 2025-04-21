import React , {memo} from 'react'

function Component4(props) {
    console.log("component4")
    return (
        <div>Component4 is {props.value()}</div>
    )
}

export default memo(Component4)