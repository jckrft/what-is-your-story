import './App.css';
import Home from './screens/Home';
import SignIn from './screens/SignIn';
import Layout from './components/Layout';
import { Link, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Layout>
      <Switch>
        {/* <Route path='/'>
          <Home />
        </Route> */}
        <Route path='/signin'>
          <SignIn />
        </Route>
        <Route path='/signup'>
          <h1>sign up</h1>
        </Route>
        </Switch>
        </Layout>
    </div>
  );
}

export default App;
