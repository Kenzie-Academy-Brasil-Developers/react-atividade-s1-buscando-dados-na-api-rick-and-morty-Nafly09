import "./App.css";
import { Component } from "react";
import Characters from "./components/Characters";

class App extends Component {
  state = {
    characters: [],
  };

  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => {
        return response.json();
      })
      .then((response) => this.setState({ characters: response.results }))
      .catch((error) => console.log("Erro na requisição"));
  }

  render() {
    const { characters } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1>Meus Personagens</h1>
          <Characters characters={characters} />
        </header>
      </div>
    );
  }
}

export default App;
