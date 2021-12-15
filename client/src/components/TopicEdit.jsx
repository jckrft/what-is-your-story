import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function TopicEdit({ handleTopicUpdate, handleClose, open, selectedTopic }) {
  const [formData, setFormData] = useState({
    topic: "",
  });
  const [postId, setPostId] = useState('')
  const { topic } = formData;
  
  useEffect(() => {
    const prefillFormData = () => {
      const { id, ...rest} = selectedTopic
      setPostId(id)
      setFormData({ topic: rest.topic });
    };
    if (selectedTopic) prefillFormData();
  }, [selectedTopic]);



  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>edit your topic</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            type="text"
            name="topic"
            label="topic"
            id={"topic"}
            value={formData.topic}
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
              handleTopicUpdate(postId, formData);
              handleClose()
            }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
