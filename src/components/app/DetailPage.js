/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { getCharacter } from '../../api_fetch/api';

export default class DetailPage extends Component {
  
  state = {
    details: {}
  }

  componentDidMount = () => {
    // eslint-disable-next-line max-len
    getCharacter(this.props.match.params.id)
      .then(details => this.setState({ details }));
  }

  render() {
    const { details } = this.state;
    return (
      <div>
        <h1>{details.name}</h1>
        <img src={details.image} alt={details.name} />
        <p>Status: {details.status}</p>
        <p>Species: {details.species}</p>
        <p>Gender: {details.gender}</p>
        <p>Origin: {details?.origin?.name}</p>
      </div>
    );
  }
}
