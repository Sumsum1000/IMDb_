import './NavHeader.css';
import logo from './Images/IMDb.png';
import hamburger from './Images/hamburger-icon.png';
import serachIcon from './Images/Search-icon.png';

export default function NavHeader() {
    return (
        <header className='header-container'>
            <img className='logo' src={logo} alt='logo' />
            <div className='burger-container'>
                <img className='hamburger-img' src={hamburger} />
                <span className='menu-text'>Menu</span>
            </div>
            <div className='search-area'>
                <div className='rect-search-container'>
                    <div className='left-search'>
                        <span>All</span>
                        <span className='arrow'></span>
                        <div className='search-devider'></div>
                        <span>Search IMDb</span>
                    </div>
                    <img className='search-icon' src={serachIcon} />
                </div>
            </div>
        </header>
    )
}