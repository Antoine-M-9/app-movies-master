import { Fragment, useContext, useEffect, useState } from "react";
import Movie from '../components/Movie';
import favoris from '../images/favoris.svg';
import add from '../images/add.svg';
import './Accueil.css';
import FavoriteContext from "../FavoriteContext";

const Accueil = (props) => {

    let [apiDatas, setApiDatas] = useState([]);
    let [is404, set404] = useState(false);
    let [currentFilm, setCurrent] = useState([]);
    let favContext = useContext(FavoriteContext);

    useEffect(
        () => {
            fetch('https://api.themoviedb.org/3/discover/movie?api_key=959c1abcbad04883c563e2bacdb2ae98')
                .then(response => {
                    if (!response.ok) {
                        set404(true);
                        return;
                    }
                    return response.json();
                })
                .then(apiResults => {
                    setApiDatas(apiResults.results);
                    setCurrent(apiResults.results[1]);
                })
                .catch(err => set404(true));
        }, []
    )




    if (is404) {
        return (<h1>error-404</h1>);
    }
    return (
        <Fragment>
            {
                (currentFilm) && 
                <div>
                        <img className="image" src={'https://image.tmdb.org/t/p/w500/' + currentFilm.backdrop_path}/>
                        <div className="content">
                            <h1>{currentFilm.title}</h1>
                            <p>Langue - ({currentFilm.original_language})</p>
                            <p className="overview">{currentFilm.overview}</p>
                            <div className="button">
                                <span onClick={() => {
                                    favContext.register(props.datasMovie)
                                }} className={"a"}><img src={favoris} alt="" /></span>
                                <span className="a b"><img src={add} alt="" /></span>
                            </div>
                        </div>
                </div>
            }
            <div className="flex">
                {
                    apiDatas.map(
                        item =>
                            <Movie clickEvent={setCurrent} datasMovie={item} key={item.id} />
                    )
                }
            </div>

        </Fragment>
    )
}

export default Accueil;