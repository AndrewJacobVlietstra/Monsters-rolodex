import "./App.css";
import { Component } from "react";
import CardList from "./Components/card-list/CardList";

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(userList => this.setState({users: userList}))
      .catch(err => console.log(err));
    
  }

  render() {
    return (
      <div className="App">
      <CardList users={this.state.users} />
      </div>
    );
  }
}

export default App;
