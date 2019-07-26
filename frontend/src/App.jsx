import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Register from './components/Users/register';
import Login from './components/Users/Login';

function App(props) {
  return ( 
  <div className = "App" >
    <Router>
      <Route exact path='/' render={(props)=><Register 
        {...props} url={'/register'}
        btnName={'register'}/>}
        />
      <Route exact path='/login' render={(props) => <Login
      {...props} url={'/login'} 
      btnName={'login'}/>}
      />
    </Router>
    </div>
  );
}

export default App;