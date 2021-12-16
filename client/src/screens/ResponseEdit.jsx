import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getOneResponse, putResponse } from "../services/responses";
import "../assets/css/ResponseEdit.css";

export default function ResponseEdit({ responses }) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    response: "",
  });

  const { response } = formData;
  const { id } = useParams();

  useEffect(() => {
    const fetchResponse = async () => {
      const responseData = await getOneResponse(id);
      setFormData({ response: responseData.response });
    };
    fetchResponse();
  }, []);

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleResponseUpdate = async () => {
    const newResponse = await putResponse(id, formData);

    // setResponses((prevState) =>
    //   prevState.map((response) => {
    //     return response.id === Number(id) ? newResponse : response;
    //   })
    // );
    history.push("/topics");
  };

  return (
    <div className="response-edit">
      <form className="edit-form">
        <TextField
          className='edit-textfield'
          autoFocus
          margin="dense"
          type="text"
          name="response"
          label="response"
          id={"response"}
          value={formData.response}
          fullWidth
          multiline
          variant="standard"
          onChange={handleChange}
        />
        <br />
        <Button
          onClick={(ev) => {
            ev.preventDefault();
            handleResponseUpdate(id, formData);
          }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
