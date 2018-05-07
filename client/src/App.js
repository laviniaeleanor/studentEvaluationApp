import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import './App.css';
import LoginPage from './components/login/LoginPage'
import SignupPage from './components/signup/SignupPage'
import LogoutPage from './components/logout/LogoutPage'
import Topbar from './components/Topbar'
import Homepage from './components/homepage/Homepage'
import BatchPage from './components/batchpage/BatchPage'

class App extends Component {
  render() {
    return (

      <Router>
        <div>
          <nav>
            <Topbar />
          </nav>
          <main style={{marginTop:75}}>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/logout" component={LogoutPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/batches" component={Homepage} />
            <Route exact path="/batches/:id" component={BatchPage} />
            <Route exact path="/" render={ () => <Redirect to="/classes" /> } />

          </main>
        </div>
      </Router>
    )
  }
}


export default App;
