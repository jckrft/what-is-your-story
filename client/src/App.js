import './App.css';
import Landing from './screens/landing/Landing';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import Layout from './components/Layout';
import MainContainer from './container/MainContainer';
import { Link, Switch, Route, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { loginUser, registerUser, verifyUser, removeToken } from './services/auth'

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory()

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData)
    }
    handleVerify()
  }, [])
  
  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push('/topics')
  }

  const handleRegister = async (formData) => {
    const userData = await registerUser(formData) 
    setCurrentUser(userData)
    history.push('/topics')
  }

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
    history.push('/')
  }

  return (
    <div className="App">
      <Switch>
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        {/* <Route path='/'>
          <Landing />
        </Route> */}
        <Route path='/signin'>
          <SignIn handleLogin={handleLogin} />
        </Route>
        <Route path='/signup'>
            <SignUp handleRegister={handleRegister}/>
        </Route>

          <Route path='/'>
            <MainContainer currentUser={currentUser} />
          </Route>
          </Layout>
        </Switch>
    </div>
  );
}

export default App;
