import React from 'react'
import { Link } from 'react-router-dom'


export default function Layout(props) {
  return (
    <div>
      <h1>what is your story?</h1>
      <Link to='/signin'>sign in </Link>
      <Link to='/signup'>| sign up</Link>
      {props.children}
    </div>
  )
}
