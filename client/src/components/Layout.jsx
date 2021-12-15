import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer';
// import SignIn from '../screens/SignIn';
// import SignUp from '../screens/SignUp';


export default function Layout(props) {
  const { currentUser, handleLogout, setLoginOpen } = props;
  return (
    <div>
      {
        currentUser ? 
          <div className='welcome'>
            <h1>what is your story?</h1>
            <p>hello {currentUser.username}</p>
            <button onClick={handleLogout}>logout</button>
          </div> : 
      
          <div>
            <a href='#' onClick={(e) => {
              e.preventDefault();
              setLoginOpen(true)
                        } } >sign in </a>
            <Link to='/signup'>| sign up</Link>
            {/* <SignIn />
            <SignUp /> */}
          </div>
      }
      {currentUser ?
        <nav>
          
          <Link to='/topics'>topics</Link>
          <Link to={`/saved/${currentUser.username}`}>saved</Link>
        </nav>
        : null}
      {props.children}
      <Footer />
    </div>
  )
}
