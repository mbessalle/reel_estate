import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Listings from "./components/Listings";
import ScheduleViewing from "./components/ScheduleViewing";
import AboutUs from "./components/AboutUs";
import NavBar from "./navbar/navbar";
import './App.css';

function App() {
  return (
    <div className="App">
       <NavBar />
      <Switch>
        <Route path="/AboutUs/:language" component={AboutUs} />
        <Route path="/ScheduleViewing" component={ScheduleViewing} />
        <Route path="/Listings" component={Listings} />
        <Route path="/Home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
