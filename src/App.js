import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import Details from './Components/Details/Details';
import Blogs from './Components/Blogs/Blogs';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>

          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path="/details/:id">
            <Details></Details>
          </Route>
          <Route path='/contact'>
            <Contact></Contact>
          </Route>
          <Route path='/blogs'>
            <Blogs></Blogs>
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
