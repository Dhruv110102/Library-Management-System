import React from 'react';
import "./App.css";
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import Site from './components/pages/Site';
import Issue from './components/Issue/Issue';
import Return from './components/Return/Return';
import Search from './components/search/search';

function App() {
  return (
    <Router>
    <Navbar/>
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/sign-up' component={SignUp}/>
      <Route path='/sign-in' component={SignIn}/>
      <Route path='/site' component={Site}/>
      <Route path='/issue' component={Issue}/>
      <Route path='/return' component={Return}/>
      <Route path='/search' component={Search}/>
    </Switch>
    </Router>
    

    
    
    
  );
}

export default App;
