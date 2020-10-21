export const getCharacters = () => {
  // eslint-disable-next-line max-len
  return fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json())
    .then(json => json.results);
};

export const getCharacter = id => {
  // eslint-disable-next-line max-len
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => res.json());
};

