import React from 'react'
import { Link } from 'react-router-dom'
import TopicEdit from '../components/TopicEdit'

export default function Topics({topics, handleTopicDelete, currentUser}) {
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
        <Link to={`/topics/${topic.id}/edit`}>
          <button>edit</button>
              </Link>
              <button onClick={() => handleTopicDelete(topic.id)}>Delete</button>
              </>
            )}
      </div>
      ))}
      
      
      <Link to='/topics/new'>
        <button>create</button>
      </Link>
    </div>
  )
}


// { currentUser?.id === topic.user_id && (
//   <>
//         {/* <Link to={`/topics/${topic.id}/edit`}> */}
//           <button>edit</button>
//         {/* </Link> */}
//         </>
//       )}