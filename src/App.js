import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component'

function App() {
  return (
    <div>
    <Route exact path='/' component={HomePage} />
    </div>
  );
}

export default App;
