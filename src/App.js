import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import FavoriteContext from './FavoriteContext';
import Accueil from './pages/Accueil';
import Favoris from './pages/Favoris';
import Recherche from './pages/Recherche';

function App() {
  let [favs, setFavs] = useState([]);
  useEffect(
    () => {
      if (localStorage) {
        let movies = localStorage.getItem('fav');
        if (movies && movies.length) {
          movies = JSON.parse(movies);
        } else {
          movies = [];
        }
        setFavs(movies);
      }
    }, []
  )

  const register = (movie) => {
    if (localStorage) {
      let add = true;
      let movies = localStorage.getItem('fav');
      if (movies && movies.length) {
        movies = JSON.parse(movies);
      } else {
        movies = [];
      }
      movies = movies.filter(
        (item) => {
          if (item.id === movie.id) {
            add = false;
            return false;
          } else {
            return true;
          }
        }
      )
      if (add) {
        movies.push(movie);
      }
      setFavs(movies);
      let moviesStorage = JSON.stringify(movies);
      localStorage.setItem('fav', moviesStorage);
    }
  }

  return (
    <div className="App">
      <FavoriteContext.Provider value={{favs, register}}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Accueil />}/>
          <Route path="/" element={<Favoris />}/>
          <Route path="/recherche" element={<Recherche />}/>
        </Routes>
      </FavoriteContext.Provider>
    </div>
  );
}

export default App;
