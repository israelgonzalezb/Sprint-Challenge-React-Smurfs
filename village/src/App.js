import React, { Component } from "react";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import axios from "axios";
import { Route } from "react-router-dom";
import NavBar from "./NavBar";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
    this.addSmurf = this.addSmurf.bind(this);
  }
  
  getData(){
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        this.setState({ smurfs: res.data });
        console.log(res);
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.getData();
  }
  
  componentDidUpdate(prevState){
    if (this.state !== prevState){
      this.getData();
    }
  }
  
  addSmurf = (smurf, event) => {
    event.preventDefault();
    //debugger;
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(console.log("added new smurf"))
      .catch(err => console.log(err));

  };

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
         <NavBar />
        <Route path="/smurf-form" render={(props) =>
          <SmurfForm {...props} addSmurf={this.addSmurf}/>}
        />
        <Route path="/" exact render={(props) => 
          <Smurfs {...props} smurfs={this.state.smurfs} />}
        />
        
      </div>
    );
  }
}

export default App;
