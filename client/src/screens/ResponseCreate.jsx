import { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {postResponse} from '../services/responses'

export default function ResponseCreate() {
  const [formData, setFormData] = useState({
    response: ''
  })

  const { response } = formData;
  const { id } = useParams();
  const history = useHistory();

  const handleChange = (e) => {
    const { value } = e.target 
    setFormData({response: value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await postResponse(id, formData)
    history.push(`/topics/${id}`)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label> add response
          <input
            type='text'
            value={response}
            onChange={handleChange}
          />
        </label>
        <button>submit</button>
      </form>
    </div>
  )
}
