import React from 'react'
import { Link } from 'react-router-dom'

export default function Topics({topics, currentUser}) {
  return (
    <div>
      <h3>topics</h3>
      {topics.map((topic) => (
        <div key={topic.id}>
        <p>{topic.topic}</p>
        <Link to={`/topics/${topic.id}/edit`}>
          <button>edit</button>
        </Link>
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