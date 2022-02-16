import "./App.css";
import { Component } from "react";
import CardList from "./Components/card-list/CardList";
import SearchField from "./Components/search-field/SearchField";
import InputSearch from "./Components/input-search/InputSearch";

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      searchField: "",
      InputField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((userList) => this.setState({ users: userList }))
      .catch((err) => console.log(err));
  }


  onChangeInputHandler = (e) => {
    this.setState({ InputField: e.target.value }, () => console.log(this.state.InputField));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  sayThis = () => {
    console.log(this);
  }

  render() {
    const { users, searchField } = this.state; // pull out values from state using object destructuring
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1 className="monsterTitle">{this.state.InputField ? this.state.InputField : 'Monsters Rolodex'}</h1>
        <button onClick={this.sayThis}>Say "this"</button> <br />
        <InputSearch onChangeHandler={this.onChangeInputHandler} /> <br />
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
