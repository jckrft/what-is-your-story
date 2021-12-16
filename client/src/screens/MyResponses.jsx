import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import {
  getUserResponses,
  putResponse,
  deleteResponse,
} from "../services/responses";
import "../assets/css/MyResponses.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ResponseEdit from "./ResponseEdit";

export default function MyResponses({ currentUser }) {
  const [responses, setResponses] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const fetchResponses = async () => {
      const responseList = await getUserResponses();
      setResponses(responseList);
    };
    fetchResponses();
  }, [currentUser]);

  const handleResponseDelete = async (id) => {
    await deleteResponse(id);
    setResponses((prevState) =>
      prevState.filter((response) => response.id !== id)
    );
  };

  return (
    <div>
      <h3>my work</h3>
      {responses?.map((response) => (
        <div key={response.id} className="response-container">
          {/* <p>{response.topic}</p> */}
          <div className="response-buttons">
            <p className="response-card">{response.response}</p>
            {/* <p>{responses.topic.topic}</p> */}
            {currentUser?.id === response.user_id ? (
              <div className="response-buttons">
                <Link to={`/responses/${response.id}/edit`}>
                  {/* <ResponseEdit /> */}
                  <button className="response-edit">
                    <EditIcon />
                  </button>
                </Link>
                <button
                  className="response-delete"
                  onClick={() => handleResponseDelete(response.id)}>
                  <DeleteIcon />
                </button>
              </div>
            ) : (
              <p>nothing to see here... yet</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
{
  /* 
  {responses.map((response) => 
{currentUser?.id === response.user_id ?
            <div>
              <p>{response.response}</p>
              <p>{response.username}</p>
            </div>
            : <p>nothing to show here... yet</p> */
}

// {responses.map((response) => (
//   <div>
//     { currentUser?.id === response.user_id &&
//       <div>
//         <p>{response.response}</p>
//         <p>{response.username}</p>
//       </div>
//     : <p>nothing to show here</p>

//       }
//     </div>
//   ))}

{
  /* {responses.legnth! == 0 ? (
        <div>
          {responses.map((response, index) =>
            <div key=>
            </div>)}
        </div>
        )} */
}
