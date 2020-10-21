import React, { Component } from 'react';
import { getCharacters } from '../../api_fetch/api';

export default class PageCharacter extends Component {

  state = {
    characters: []
  }

  componentDidMount = () => {
    // eslint-disable-next-line max-len
    getCharacters()
      .then(characters => this.setState({ characters }));
  }

  render() {
    const { characters } = this.state;
    const characterFilter = characters.map(character => (
      <li key={character.id}>
        <h1>{character.name}</h1>
      </li>
    ));
    return (
      <div className="RMcharacters">
        <h1>Rick and Morty Universe</h1>
        <ul>{characterFilter}</ul>
      </div>
    );
  }
}

