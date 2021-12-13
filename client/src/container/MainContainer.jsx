import { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom';
import {getAllTopics} from '../services/topics'
import Topics from '../screens/Topics'

export default function MainContainer() {
  const [topics, setTopics] = useState([])
  const [responses, setResponses] = useState([])

  useEffect(() => {
    const fetchTopics = async () => {
      const topicList = await getAllTopics();
      setTopics(topicList);
    };
    fetchTopics();
  }, [])

  return (
    <div>
      <Switch>
        <Route></Route>
        <Route path='/topics'>
          <Topics topics={topics} />
        </Route>
      </Switch>
    </div>
  )
}
