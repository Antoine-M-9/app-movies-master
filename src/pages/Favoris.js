import { useContext } from "react";
import Movie from "../components/Movie";
import FavoriteContext from "../FavoriteContext";

const Favoris = () => {
    let {favs} = useContext(FavoriteContext);
    return (
        <div>
            <h1>Mes Favoris</h1>
            <div>
                {
                    favs.map (item => <Movie key={item.id} datasMovies={item} />)
                }
            </div>
        </div>
    )
}

export default Favoris;