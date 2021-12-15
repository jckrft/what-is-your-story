import { useState, useEffect } from 'react'
import { Switch, Route, useHistory, useParams } from 'react-router-dom';
import { getAllTopics, postTopic, putTopic, deleteTopic } from '../services/topics'
import { getUserResponses, putResponse, deleteResponse } from '../services/responses';
import Topics from '../screens/Topics'
import Topic from '../screens/Topic';
import TopicCreate from '../screens/TopicCreate';
import TopicEdit from '../components/TopicEdit'
import MyResponses from '../screens/MyResponses';
import ResponseCreate from '../screens/ResponseCreate';
import ResponseEdit from '../screens/ResponseEdit';
import Landing from '../screens/landing/Landing';


export default function MainContainer({currentUser}) {
  const [topics, setTopics] = useState([])
  // const [responses, setResponses] = useState([]);
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const fetchTopics = async () => {
      const topicList = await getAllTopics();
      setTopics(topicList);
    };
    fetchTopics();
  }, []);

  // useEffect(() => {
  //   const fetchResponses = async () => {
  //     const responseList = await getUserResponses();
  //     setResponses(responseList);
  //   };
  //   fetchResponses();
  // }, []);

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

  const handleTopicDelete = async (id) => {
    await deleteTopic(id);
    setTopics((prevState) => prevState.filter((topic) => topic.id !== id))
  }

  // const handleResponseUpdate = async (id, formData) => {
  //   const newResponse = await putResponse(id, formData);
  //   setResponses((prevState) =>
  //     prevState.map((response) => {
  //       return response.id === Number(id) ? newResponse : response;
  //     })
  //   );
  //   history.push(`/topics/${id}/responses`)
  // }

  // const handleResponseDelete = async (id) => {
  //   await deleteResponse(id);
  //   setResponses((prevState) => prevState.filter((response) => response.id !== id));
  // };


  return (
    <div>
      <Switch>
      <Route path='/responses/:id/edit'>
          <ResponseEdit
            // responses={responses}
            // handleResponseUpdate={handleResponseUpdate}
          />
        </Route>
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
            // responses={responses}
            currentUser={currentUser}
          />
        </Route>
        <Route path='/topics'>
          <Topics
            topics={topics}
            currentUser={currentUser}
            handleTopicDelete={handleTopicDelete}
          />
        </Route>
        <Route path='/saved/:username'>
          <MyResponses
            // responses={responses}
            // handleResponseDelete={handleResponseDelete}
            currentUser={currentUser}
          />
        </Route>
        <Route path='/'>
          <Landing />
        </Route>
      </Switch>
    </div>
  )
}
