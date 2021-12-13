import { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom';
import {getAllTopics, postTopic, putTopic} from '../services/topics'
import Topics from '../screens/Topics'
import TopicCreate from '../screens/TopicCreate';
import TopicEdit from '../screens/TopicEdit'

export default function MainContainer({currentUser}) {
  const [topics, setTopics] = useState([])
  const [responses, setResponses] = useState([])
  const history = useHistory();

  useEffect(() => {
    const fetchTopics = async () => {
      const topicList = await getAllTopics();
      setTopics(topicList);
    };
    fetchTopics();
  }, [])

  const handleTopicCreate = async (formData) => {
    const newTopic = await postTopic(formData);
    setTopics((prevState) => [...prevState, newTopic]);
    history.push('/topics')
  }

  const handleTopicUpdate = async (id, formData) => {
    const newTopic = await putTopic(id, formData);
    setTopics((prevState) =>
      prevState.map((topic) => {
        return topic.id === Number(id) ? newTopic : topic;
      })
    );
    history.push('/topics');
  }

  return (
    <div>
      <Switch>
        <Route path='/topics/:id/edit'>
          <TopicEdit
            topics={topics}
            handleTopicUpdate={handleTopicUpdate}
            currentUser={currentUser}
          />
        </Route>
        <Route path='/topics/new'>
          <TopicCreate
            handleTopicCreate={handleTopicCreate}
          /> 
        </Route>
        <Route path='/topics'>
          <Topics
            topics={topics}
            currentUser={currentUser}
          />
        </Route>
      </Switch>
    </div>
  )
}
