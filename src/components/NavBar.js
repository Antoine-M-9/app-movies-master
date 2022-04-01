import { Link } from 'react-router-dom';
import search from '../images/search.svg';
import './NavBar.css';

const NavBar = () => {

    const linkList = [
        ['/', 'Home'],
        ['/favoris', 'Favories'],
        ['/list', 'List']
    ]

    return (
        <nav className="mainNav">
            <h1>likeMovies</h1>
            <div>
                {
                    linkList.map(
                        ([url, titre], index) => <Link key={index} to={url}>{titre}</Link>
                    )
                }
            </div>
            <form className='search'>
                <img src={search} alt="icon-search" />
                <input className='input' type="text" />
            </form>
        </nav>
    )
}

export default NavBar;