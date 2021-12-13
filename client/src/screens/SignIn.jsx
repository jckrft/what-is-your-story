import { useState } from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <div>
      <div>
      <Button onClick={handleOpen}>sign in</Button>
        <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography>sign in</Typography>
            <Typography>
      <form onSubmit={(ev) => {
        ev.preventDefault(); handleLogin(formData)
      }}>
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
              </Typography>
          </Box>
        </Modal>
        </div>
    </div>
  )
}
