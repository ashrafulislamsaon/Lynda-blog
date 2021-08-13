import './Navbar.css';
import {Link} from 'react-router-dom';



const Navbar = () => {
    return (
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand" href="#">LYNDA</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/sports" className="nav-link" href="#">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/lifestyle" className="nav-link" href="#">Lifestyle</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/tech" className="nav-link" href="#">Tech</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="jobs" className="nav-link" href="#">Jobs</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/history" className="nav-link" href="#">History</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/travel" className="nav-link" href="#">Travel</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/economy" className="nav-link" href="#">Economy</Link>
                            </li>
                        </ul>
                        <form className="d-flex searchBox">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="searchBtn" type="submit"><i className="fas fa-search searchIcon"></i></button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};
export default Navbar;