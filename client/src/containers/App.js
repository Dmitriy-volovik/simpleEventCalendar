import React, { Component } from 'react';
import './App.css';
import Calendar from "../components/calendar";
import Header from "../components/header";

class App extends Component {

  render() {
    return (
      <div >
        <Header />
        <Calendar />
      </div>
    );
  }
}

export default App;
