const jokes = require('./jokes/index.json');

let lastJokeId = 0;
jokes.forEach(jk => jk.id = ++lastJokeId);

const randomJoke = () => {
  return jokes[Math.floor(Math.random() * jokes.length)];
}

const filterJokes = (type) => {
  if(type){
    return jokes.filter(joke => joke.type == type)
  }else{
    return jokes
  }
}

/**
 * Get N jokes from a jokeArray paginated
 */
const getPaginated = (jokesPerPage = 10, page = 0, type = "") => {
  
  const start = page * jokesPerPage
  const end = start + +jokesPerPage
  let filteredJokes = filterJokes(type)
  return filteredJokes.slice(start, end);

};

/**
 * Get N random jokes from a jokeArray
 */
const randomN = (jokeArray, n) => {
  const limit = jokeArray.length < n ? jokeArray.length : n;
  const randomIndicesSet = new Set();

  while (randomIndicesSet.size < limit) {
    const randomIndex = Math.floor(Math.random() * jokeArray.length);
    if (!randomIndicesSet.has(randomIndex)) {
      randomIndicesSet.add(randomIndex);
    }
  }

  return Array.from(randomIndicesSet).map(randomIndex => {
    return jokeArray[randomIndex];
  });
};

const randomTen = () => randomN(jokes, 10);

const randomSelect = (number) => randomN(jokes, number);

const jokeByType = (type, n) => {
  return randomN(jokes.filter(joke => joke.type === type), n);
};

/** 
 * @param {Number} id - joke id
 * @returns a single joke object or undefined
 */
const jokeById = (id) => (jokes.filter(jk => jk.id === id)[0]);

const jokesCount = (type) => {
  let filteredJokes = filterJokes(type)
  return filteredJokes.length
}

module.exports = { jokes, randomJoke, randomN, randomTen, randomSelect, jokeById, jokeByType, getPaginated, jokesCount };
