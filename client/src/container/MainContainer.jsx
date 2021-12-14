import { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom';
import { getAllTopics, postTopic, putTopic } from '../services/topics'
import { getAllResponses, postResponse } from '../services/responses';
import Topics from '../screens/Topics'
import Topic from '../screens/Topic';
import TopicCreate from '../screens/TopicCreate';
import TopicEdit from '../components/TopicEdit'
import MyResponses from '../screens/MyResponses';
import ResponseCreate from '../screens/ResponseCreate';

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

  useEffect(() => {
    const fetchResponses = async () => {
      const responseList = await getAllResponses();
      setResponses(responseList);
    };
    fetchResponses();
  }, []);

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
        <Route path='/topics/:id/responses/new'>
          <ResponseCreate />
        </Route>
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
        <Route path='/topics/:id'>
          <Topic
            topics={topics}
            responses={responses}
            currentUser={currentUser}
          />
        </Route>
        <Route path='/topics'>
          <Topics
            topics={topics}
            currentUser={currentUser}
          />
        </Route>
        <Route path='/saved/:username'>
          <MyResponses
            // responses={responses}
            // currentUser={currentUser}
          />
        </Route>
      </Switch>
    </div>
  )
}
