import { useContext, useEffect, useState } from "react";
import FavoriteContext from "../FavoriteContext";

const Movie = (props) => {

    let { title, poster_path, id } = props.datasMovie;
    let favContext = useContext(FavoriteContext);
    let [isFav, setFav] = useState('');

    // useEffect(
    //     () => {
    //         let find = false;
    //         for (let movieFav of favContext.favs) {
    //             if (movieFav.id !== props.id) {
    //             continue;
    //         }
    //         find = true;
    //         setFav('active');
    //         break;
    //     }
    //     if (!find) {
    //         setFav('');
    //     }
    //    }, [favContext]        
    // )


    return (
        <div>
            <div className="postMovie">
                <img onClick={() => props.clickEvent(props.datasMovie)} src={'https://image.tmdb.org/t/p/w500/' + poster_path} />
                <h3>{title}</h3>
            </div>
        </div>
    )
}

export default Movie;