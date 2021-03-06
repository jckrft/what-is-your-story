import { useState } from "react";
import { Link } from "react-router-dom";
import TopicEdit from "../components/TopicEdit";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import "../assets/css/Topics.css";

export default function Topics({
  topics,
  handleTopicDelete,
  handleTopicUpdate,
  currentUser,
}) {
  const [open, setOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState({});

  return (
    <div>
      {/* <h3>topics</h3> */}
      <div className="topic-container">
        {topics.map((topic) => (
          <div key={topic.id} className="topic-card">
            <Link to={`/topics/${topic.id}`} className="topic-links">
              <p className="topics">{topic.topic}</p>
            </Link>
            {currentUser?.id === topic.user_id && (
              <div className="topic-buttons">
                <button
                  className="topic-edit"
                  onClick={() => {
                    setOpen(true);
                    setSelectedTopic(topic);
                  }}
                >
                  <EditIcon />
                </button>
                <button
                  className="topic-delete"
                  onClick={() => handleTopicDelete(topic.id)}>
                  <DeleteIcon />
                </button>
              </div>
            )}
          </div>
        ))}

        <Link to="/topics/new" className="add-link">
          <button className="topic-add"><AddIcon /></button>
        </Link>
        <TopicEdit
          handleTopicUpdate={handleTopicUpdate}
          handleClose={() => setOpen(false)}
          open={open}
          selectedTopic={selectedTopic}
        />
      </div>
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
