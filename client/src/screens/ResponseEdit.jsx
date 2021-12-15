import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { getOneResponse, putResponse } from '../services/responses'

export default function ResponseEdit({ responses }) {
  const history = useHistory()
  const [formData, setFormData] = useState({
    response: ''
  });

  const { response } = formData;
  const { id } = useParams()

  useEffect(() => {
    const fetchResponse = async () => {
      const responseData = await getOneResponse(id);
      setFormData({response: responseData.response});
    };
    fetchResponse();
  }, [])
  
  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  };


  const handleResponseUpdate = async () => {
    const newResponse = await putResponse(id, formData);

    // setResponses((prevState) =>
    //   prevState.map((response) => {
    //     return response.id === Number(id) ? newResponse : response;
    //   })
    // );
    history.push('/topics')
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
        edit
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>edit your response</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                type='text'
                name='response'
                label='response'
                id={'response'}
                value={formData.response}
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
              handleResponseUpdate(id, formData)
            }}
          >
                Submit
              </Button>
            </DialogActions>
        </Dialog>
    </div>
  )
}
