import {useState} from "react";
import { Link } from "react-router-dom";
import TopicEdit from "../components/TopicEdit";

export default function Topics({ topics, handleTopicDelete, handleTopicUpdate, currentUser }) {
  const [open, setOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState({})

  return (
    <div>
      <h3>topics</h3>
      {topics.map((topic) => (
        <div key={topic.id}>
          <Link to={`/topics/${topic.id}`}>
            <p>{topic.topic}</p>
          </Link>
          {currentUser?.id === topic.user_id && (
            <>
              {/* <TopicEdit /> */}
              
                <button onClick={() => {
                  setOpen(true)
                  setSelectedTopic(topic)
                }}>edit</button>
              <button onClick={() => handleTopicDelete(topic.id)}>
                Delete
              </button>
            </>
          )}
        </div>
      ))}

      <Link to="/topics/new">
        <button>create</button>
      </Link>
      <TopicEdit
        handleTopicUpdate={handleTopicUpdate}
        handleClose={() => setOpen(false)}
        open={open}
        selectedTopic={selectedTopic}
      />
    </div>
  );
}

// { currentUser?.id === topic.user_id && (
//   <>
//         {/* <Link to={`/topics/${topic.id}/edit`}> */}
//           <button>edit</button>
//         {/* </Link> */}
//         </>
//       )}
