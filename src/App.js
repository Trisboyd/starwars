import React from 'react';

import Hero from './components/Hero/hero';
import Preloader from './components/Preloader/preloader';
import Card from './components/Card/card';
import api from './utilities/api';
import ErrorResponse from './components/ErrorResponse/errorResponse';
import { Page } from './components/Styles/page';

const App = () => {

  // __________________________________________character info state variables
  const [character, setCharacter] = React.useState({});

  const [species, setSpecies] = React.useState();

  const [films, setFilms] = React.useState([]);

  const [ship, setShip] = React.useState([]);

  // ________________________________________search state variables

  const [isErrorOpen, setIsErrorOpen] = React.useState(false);

  const [isLoaderOpen, setIsLoaderOpen] = React.useState(false);

  const [isValidRes, setisValidRes] = React.useState(false);

  // ________________________________________________API functions
  const getSpecies = (data) => {
    api.getInfo(String(data.results[0].species[0]))
      .then((speciesData) => {
        setSpecies(speciesData.name)
      })
  }

  const getFilms = (data) => {
    data.results[0].films.map((film) => {
      console.log(String(film));
      api.getInfo(String(film))
        .then(response => {
          setFilms(oldFilms => [...oldFilms, response.title, ', '])
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
    // reset film and ship information or these arrays will add new results on top of old ones
    // with every new search
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
        setisValidRes(true);
      })
      .catch(error => {
        setIsErrorOpen(true);
        setisValidRes(false);
      })
      .finally(res => {
        setIsLoaderOpen(false);
      })
  }

  const setPage = () => {
    if (isLoaderOpen) {
      return <Preloader />
    }
    else if (isValidRes && !isErrorOpen) {
      return <Card
        character={character}
        species={species}
        films={films}
        ships={ship} />
    }
    else if (!isValidRes && isErrorOpen) {
      return <ErrorResponse />
    }
  }

  return (
    <Page>
      <Hero
        getCharacter={getCharacter}
      />
      {setPage()}

      {/* The following could also work to determine how the page is set, but using an if/else function
      seemed cleaner */}
      {/* --------------------------------------------------------------- */}
      {/* {isLoaderOpen ?
        <Preloader /> :
        isValidRes && !isErrorOpen ?
          <Card
            character={character}
            species={species}
            films={films}
            ships={ship} /> :
          !isValidRes && isErrorOpen && <ErrorResponse />
      } */}
      {/* ------------------------------------------------------------------ */}

    </Page>
  );
}

export default App;
