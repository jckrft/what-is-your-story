import React from 'react'
import { Link } from 'react-router-dom'


export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>
      <h1>what is your story?</h1>
      {
        currentUser ? 
          <div className='welcome'>
            <p>hello {currentUser.username}</p>
            <button onClick={handleLogout}>logout</button>
          </div> : 
      
          <div>
            <Link to='/signin' >sign in </Link>
            <Link to='/signup'>| sign up</Link>
          </div>
      }
      {currentUser &&
        <nav>
          <Link to='/topics'>topics</Link>
          <Link to={`/saved/${currentUser.username}`}>saved</Link>
        </nav>}
      {props.children}
    </div>
  )
}
