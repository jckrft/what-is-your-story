import { useState, useEffect } from 'react';
import {useHistory, Link } from 'react-router-dom'
import { getUserResponses, putResponse, deleteResponse } from '../services/responses';
import ResponseEdit from './ResponseEdit';

export default function MyResponses({currentUser}) {
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
    setResponses((prevState) => prevState.filter((response) => response.id !== id));
  };

  return (
    <div>
      <h3>my work</h3>
      {responses?.map(response => (
        <div key={response.id}>
        {/* <p>{response.topic}</p> */}
          <p>{response.response}</p>
          {/* <p>{responses.topic.topic}</p> */}
          {currentUser?.id === response.user_id ? 
            <>
              <Link to={`/responses/${response.id}/edit`}>
                {/* <ResponseEdit /> */}
                <button>edit</button>
              </Link>
              <button onClick={() => handleResponseDelete(response.id)}>Delete</button>
            </>
          : null} 
        </div>
      ))}

    </div>
  )
}
{/* 
  {responses.map((response) => 
{currentUser?.id === response.user_id ?
            <div>
              <p>{response.response}</p>
              <p>{response.username}</p>
            </div>
            : <p>nothing to show here... yet</p> */}

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

                  {/* {responses.legnth! == 0 ? (
        <div>
          {responses.map((response, index) =>
            <div key=>
            </div>)}
        </div>
        )} */}