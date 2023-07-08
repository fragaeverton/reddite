import './Header.css';

const Header = () => {
    return (
        <header >
            <div className="logo">
                <div className="logo-icon"/>
                <p>Reddit<span>E</span></p>
            </div>
            <form className="search">
                <input placeholder="Search" />
            </form>
        </header>
    )
}

export default Header;