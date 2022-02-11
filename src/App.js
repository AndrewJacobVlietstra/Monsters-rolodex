import "./App.css";
import { Component } from "react";
import CardList from "./Components/card-list/CardList";
import SearchField from "./Components/search-field/SearchField";

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      searchField: "",
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((userList) => this.setState({ users: userList }))
      .catch((err) => console.log(err));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { users, searchField } = this.state;
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1 className="monsterTitle">Monsters Rolodex</h1>
        <SearchField
          handleChange={this.handleChange}
          searchPlaceholder="Search Monsters"
        />
        <CardList users={filteredUsers} />
      </div>
    );
  }
}

export default App;
