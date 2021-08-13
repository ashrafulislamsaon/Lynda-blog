import './Topbar.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import {AuthContext} from '../../context/AuthContext';



const Topbar = () => {
    const {user, dispatch} = useContext(AuthContext)
    const PF = "http://localhost:5000/images/"

    const handleLogout = ()=>{
        dispatch({type: "LOGOUT"})
    }
    return (
        <div className="topbar">
            <div className='container py-1'>
                <div className="row">
                    <div className="d-flex justify-content-start align-items-center col-md-9">
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-linkedin"></i>
                    </div>
                    { user ?<div className="d-flex justify-content-end align-items-center col-md-3 topRightAvatar">
                        <Link to="/dashboard" className="noStyling" >
                            <img className='topbarRightImg' src={ PF+user.profilePicture} alt="" />
                        </Link>
                        <div className="userOptions" >
                            <Link to="/dashboard/edit-user" className="noStyling topLink">Profile</Link>
                            <Link to="/dashboard/add-post" className="noStyling topLink">Post</Link>
                            <Link onClick={handleLogout} className="noStyling topLink">Logout</Link> 
                        </div>
                    </div>
                    : <div className="LogoutScene d-flex justify-content-end col-md-3">
                        <Link to="/login" className="noStyling">Login/</Link>
                        <Link to="/register" className="noStyling">Register</Link>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Topbar;