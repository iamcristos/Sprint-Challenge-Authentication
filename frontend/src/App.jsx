import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import Register from './components/Users/register';
import Login from './components/Users/Login';
import Jokes from './components/Jokes/Jokes';

function App(props) {
  return ( 
  <div className = "App" >
    <Router>
      <ToastContainer />
      <Route exact path='/' render={(props)=><Register 
        {...props} url={'/register'}
        btnName={'register'}/>}
        />
      <Route exact path='/login' render={(props) => <Login
      {...props} url={'/login'} 
      btnName={'login'}/>}
      />
      <Route exact path='/jokes' render={(props) => <Jokes 
      {...props} />} 
      />
    </Router>
    </div>
  );
}

export default App;