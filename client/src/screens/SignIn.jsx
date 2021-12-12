import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SignIn() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const { username, password } = formData;

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  return (
    <div>
      <form>
        <h3>sign in</h3>
        <label>username:
          <input
            type='text'
            name='username'
            value={username}
            onChange={handleChange} />
        </label>
        <br />
        <label>username:
          <input
            type='text'
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
