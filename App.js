import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import Contact from './Contact';
import Menu from './Menu';

function App() {
  return (
    <Router>
    <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Menu">Menu</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
      <Switch>      
      <Route exact path="/Home">
        <Home/>
      </Route>      
      <Route exact path="/Menu">
        <Menu/>        
      </Route>
      <Route exact path="/Contact">
        <Contact/>
      </Route>
      </Switch>
      </ul>
    </div>
  </nav>  
  </Router>  
  );
}

export default App;
