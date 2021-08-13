import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from './pages/Home/Home';
import SinglePostPage from './pages/SinglePostPage/SinglePostPage';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import AddPost from './pages/Dashboard/AddPost/AddPost';
import EditUser from './pages/Dashboard/EditUser/EditUser';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import AllPost from './components/AllPost/AllPost';


function App() {
  const  { user } = useContext(AuthContext);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
              <Home/>
          </Route>
          <Route path="/post">
            <AllPost/>
          </Route>
          <Route  path="/posts/:id">
              <SinglePostPage/>
          </Route>
          <Route  path="/login">
              {
                user ? <Redirect to="/"/> : <Login/>
              }
          </Route>
          <Route  path="/register">
              <Registration/>
          </Route>
          <Route  path="/dashboard/add-post">
              <AddPost/>
          </Route>
          <Route  path="/dashboard/edit-user">
              <EditUser/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
