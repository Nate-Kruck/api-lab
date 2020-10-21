export const getCharacters = () => {
  // eslint-disable-next-line max-len
  return fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json())
    .then(json => json.results);
};

