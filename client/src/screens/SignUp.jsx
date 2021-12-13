import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

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

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <div>
        <Button onClick={handleClickOpen}>
        sign up
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>sign up</DialogTitle>
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
                          autofocus
                          margin="dense"
        label='email'
          
            type='text'
            name='email'
            value={email}
            onChange={handleChange} 
          
            />
          <TextField
                          autofocus
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
        handleRegister(formData)
      }}>Submit</Button>
        </DialogActions>
        </Dialog>
    </div>
  )
}