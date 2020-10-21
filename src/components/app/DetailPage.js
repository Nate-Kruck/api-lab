/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { getCharacter } from '../../api_fetch/api';
import styles from '../../styles/detailpage.css';

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
        <h1>
          <span className={styles.spanbro}>
            {details.name}
          </span>
        </h1>
        <div className={styles.wrapperbro}>
          <div className={styles.detailcard}>
            <span className={styles.enclosedbro}>
              <img src={details.image} alt={details.name} />
            </span>
            {/* <span className={styles.hovermebro}>
              <p>Hover Me Bro</p>
            </span> */}
            <span className={styles.textbro}>
              <p>Status: {details.status}</p>
              <p>Species: {details.species}</p>
              <p>Gender: {details.gender}</p>
              <p>Origin: {details?.origin?.name}</p>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
