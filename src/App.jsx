import React from 'react';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import About from './About';
import Navbar from './Components/Navbar';
import Contact from './Contact';
import Home from './Home';
import Services from './Services';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/contact" component={Contact} />
          <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
