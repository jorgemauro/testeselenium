import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state={
    title:"Welcome to React",
  }
  render() {
    return (
      <div className="App">
      <form className="form">
      <input name="session[email]"/>
      </form>
      <button id="sel-button" className="button" onClick={()=>{this.setState({title:"Show me the money"})}}>Click!</button>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.title}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;