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
  const [loginOpen, setLoginOpen] = useState(false);
  const history = useHistory();

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
    setLoginOpen(false)
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
        <Layout
          currentUser={currentUser}
          handleLogout={handleLogout}
          setLoginOpen={setLoginOpen}
        >
        {/* <Route path='/'>
          <Landing />
        </Route> */}
        <Route path='/signin'>
        </Route>
        <Route path='/signup'>
            <SignUp handleRegister={handleRegister}/>
        </Route>

          <Route path='/'>
            <MainContainer currentUser={currentUser} />
          </Route>
          </Layout>
        </Switch>
      <SignIn handleLogin={handleLogin} open={loginOpen} handleClose={() => setLoginOpen(false)}/>
    </div>
  );
}

export default App;
