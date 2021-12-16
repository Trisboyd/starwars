import React from 'react';

import Hero from './components/Hero/hero';
import Preloader from './components/Preloader/preloader';
import Card from './components/Card/card';
import api from './utilities/api';
import ErrorResponse from './components/ErrorResponse/errorResponse';
import { Page } from './components/page';

const App = () => {

  // __________________________________________character info state variables
  const [character, setCharacter] = React.useState({});

  const [species, setSpecies] = React.useState();

  const [films, setFilms] = React.useState([]);

  const [ship, setShip] = React.useState([]);

  // ________________________________________search state variables

  const [isErrorOpen, setIsErrorOpen] = React.useState(false);

  const [isLoaderOpen, setIsLoaderOpen] = React.useState(false);

  const [isCardOpen, setIsCardOpen] = React.useState(false);

  // ________________________________________________API functions
  const getSpecies = (data) => {
    api.getInfo(String(data.results[0].species[0]))
      .then((speciesData) => {
        setSpecies(speciesData.name)
      })
  }

  const getFilms = (data) => {
    data.results[0].films.map((film) => {
      api.getInfo(String(film))
        .then(response => {
          setFilms(oldFilms => [...oldFilms, response.title, ', ',])
        })
    })
  }

  const getStarship = (data) => {
    data.results[0].starships.map((starship) => {
      api.getInfo(String(starship))
        .then(response => {
          setShip(oldShip => [...oldShip, response.name, ', '])
        })
    })
  }

  const getCharacter = (input) => {
    setFilms([]);
    setShip([]);
    setIsLoaderOpen(true);
    api.getCharacter(input)
      .then((response) => {
        setCharacter(response.results[0]);
        getSpecies(response);
        getFilms(response);
        getStarship(response);
        setIsErrorOpen(false);
        setIsCardOpen(true);
      })
      .catch(error => {
        setIsErrorOpen(true);
        console.log(error)
      })
      .finally(res => {
        setIsLoaderOpen(false);
      })
  }

  return (
    <Page>
      <Hero
        getCharacter={getCharacter}
      />
      {isLoaderOpen && <Preloader />}
      {isErrorOpen && <ErrorResponse />}
      {isCardOpen &&
        <Card
          character={character}
          species={species}
          films={films}
          ships={ship} />
      }
    </Page>
  );
}

export default App;
