import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import { getOneTopic } from '../services/topics'

export default function Topic({currentUser}) {
  const [topic, setTopic] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchTopic = async () => {
      const oneTopic = await getOneTopic(id);
      setTopic(oneTopic);
    };

    fetchTopic();
  }, [id]);

  // const addResponseToTopic = async (formData) => {
  //   const newResponse = await postResponse(formData);

  //   setResponses((prevState) => [...prevState, newResponse]);
  //   history.push('/')
  // }
  return (
    <div>
      <h3>{topic?.topic}</h3>
      {topic?.responses.map(response => (
        <div>
          <p>{response.response}</p>
          <p>{response.user.username}</p>
        </div>
      ))}
      <Link to={`/topics/${topic?.id}/responses/new`}>
      <button>create</button>
      </Link>
    </div>
  )
}
