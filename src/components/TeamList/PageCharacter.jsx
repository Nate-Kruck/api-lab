/* eslint-disable react/jsx-key */
/* eslint-disable max-len */
import React, { Component } from 'react';
import { getCharacters } from '../../api_fetch/api';
import { Link } from 'react-router-dom';
import styles from '../../styles/main.css';

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
      <Link to={`/detail/${character.id}`} key={character.id}>
        <li className={styles.card}>
          <p>{character.name}</p>
          <div className={styles.bar}>
            <div className={styles.emptybar}>
              <div className={styles.filledbar}></div>
            </div>
          </div>
          <img className={styles.imagebro} src={character.image} alt={character.name}/>
        </li>
      </Link>
    ));
    return (
      <div className="RMcharacters">
        <h1>Rick and Morty Universe</h1>
        <ul>{characterFilter}</ul>
      </div>
    );
  }
}

