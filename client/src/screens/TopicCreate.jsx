import { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function TopicCreate(props) {
  const [formData, setFormData] = useState({
    topic: '',
  })
  const { topic } = formData;
  const {handleTopicCreate} = props

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
        create
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>add a topic</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                type='text'
                name='topic'
                label='topic'
                id='topic'
                fullWidth
                variant="standard"
                onChange={handleChange} 
              />
              <br />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={(ev) => {
                ev.preventDefault();
              handleTopicCreate(formData)
            }}
          >
                Submit
              </Button>
            </DialogActions>
        </Dialog>
    </div>
  )
}
