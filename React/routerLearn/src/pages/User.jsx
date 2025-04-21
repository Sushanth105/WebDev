import React from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../components/NavBar';

function User(props) {
    let param = useParams();
  return (
    <div>
        <NavBar/>
        <div>{props.great}</div>
        This is {param.name}
    </div>
  )
}

export default User