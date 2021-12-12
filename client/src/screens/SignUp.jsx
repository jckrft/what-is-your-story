import { useState } from 'react'

export default function SignUp(props) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const { username, email, password } = formData;
  const { handleRegister } = props;

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
        ev.preventDefault();
        handleRegister(formData)
      }}>
        <h3>sign up</h3>
        <label>username:
          <input
            type='text'
            name='username'
            value={username}
            onChange={handleChange} />
        </label>
        <br />
        <label>email:
          <input
            type='text'
            name='email'
            value={email}
            onChange={handleChange} />
        </label>
        <label>password:
          <input
            type='password'
            name='password'
            value={password}
            onChange={handleChange} />
        </label>
        <br />
        <button>submit</button>
      </form>
    </div>
  )
}