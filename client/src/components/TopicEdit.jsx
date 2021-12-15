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

  const { topic } = formData;
  const { id, ...rest} = selectedTopic

  useEffect(() => {
    const prefillFormData = () => {
      
      setFormData({ topic: rest.topic });
    };
    if (id) prefillFormData();
  }, [selectedTopic, id, rest]);



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
              handleTopicUpdate(id, formData);
            }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
