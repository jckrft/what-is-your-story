import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { postResponse } from "../services/responses";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import '../assets/css/ResponseCreate.css'

export default function ResponseCreate() {
  const [formData, setFormData] = useState({
    response: "",
  });

  const { response } = formData;
  const { id } = useParams();
  const history = useHistory();

  const handleChange = (e) => {
    const { value } = e.target;
    setFormData({ response: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postResponse(id, formData);
    history.push(`/topics/${id}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="response-form">
        <TextField
          className="response-textfield"
          autoFocus
          margin="dense"
          type="text"
          name="response"
          label="response"
          id={"response"}
          fullWidth
          multiline
          rows={4}
          variant="standard"
          value={response}
          onChange={handleChange}
        />
        <Button>submit</Button>
      </form>
    </div>
  );
}
