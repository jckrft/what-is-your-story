import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SignIn(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const { username, password } = formData;
  const { handleLogin } = props;

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  
  return (
    <div>
      <form onSubmit={(ev) => {
        ev.preventDefault(); handleLogin(formData)
      }}>
        <h3>sign in</h3>
        <label>username:
          <input
            type='text'
            name='username'
            value={username}
            onChange={handleChange} />
        </label>
        <br />
        <label>password:
          <input
            type='password'
            name='password'
            value={password}
            onChange={handleChange} />
        </label>
        <br />
        <Link to='/signup'>sign up</Link>
        <br />
        <button>submit</button>
      </form>
    </div>
  )
}