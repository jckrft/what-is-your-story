import React from 'react'
import { Link } from 'react-router-dom'

export default function Topics({topics}) {
  return (
    <div>
      <h3>topics</h3>
      {topics.map(topic => (
        <p>{topic.topic}</p>
      ))}
      <Link to='/topics/new'>
        <button>create</button>
        </Link>
    </div>
  )
}
