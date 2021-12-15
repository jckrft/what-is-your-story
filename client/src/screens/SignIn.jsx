import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function SignIn(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const { username, password } = formData;
  const { handleLogin, open, handleClose } = props;

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }



  return (
    <div>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>sign in</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                type='text'
                name='username'
                label='username'
                value={username}
                onChange={handleChange} 
              />
              <br />
              <TextField
                autoFocus
                margin="dense"
                label='password'
                type='password'
                name='password'
                value={password}
                onChange={handleChange} 
              />
              <br />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={(ev) => {
                ev.preventDefault();
                handleLogin(formData)}}>
                Submit
              </Button>
            </DialogActions>
        </Dialog>
    </div>
  )
}
