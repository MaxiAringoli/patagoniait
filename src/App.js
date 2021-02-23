import React, { Component } from "react";
import Home from "./components/Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  componentDidMount() {
    fetch("https://basset.free.beeceptor.com/reactjs-test/accommodations")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ result: data });
      })
      .catch(console.log);
  }

  render() {
    return (
      <div>{this.state.result && <Home hotelDto={this.state.result} />}</div>
    );
  }
}

export default App;
