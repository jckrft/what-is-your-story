import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'

export default function TopicEdit({ topics, handleTopicUpdate }) {
  const [formData, setFormData] = useState({
    topic: '',
  })

  const { topic } = formData;
  const { id } = useParams();


  useEffect(() => {
    const prefillFormData = () => {
      const topicItem = topics.find((topic) => topic.id === Number(id));
      setFormData({ topic: topicItem.topic });
    };
    if (topics.length) prefillFormData();
  }, [topics, id]);

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

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
          <DialogTitle>edit your topic</DialogTitle>
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
              handleTopicUpdate(id, formData)
            }}
          >
                Submit
              </Button>
            </DialogActions>
        </Dialog>
    </div>
  )
}
