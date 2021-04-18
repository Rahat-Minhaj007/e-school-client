import { Link } from 'react-router-dom';
import icon from '../../../images/icon.png';
import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { name, photo } = loggedInUser;

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <Link className="navbar-brand  fw-bold fs-4" href="#"> <img style={{ width: '50px' }} src={icon} alt="" />E-SCHOOL</Link>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <Link className="nav-link me-5 active text-light fw-bold fs-6" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-5 text-light fw-bold fs-6" href="#about">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-5 text-light fw-bold fs-6" href="#course">Courses</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link me-5 text-light fw-bold fs-6" to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-5 text-light fw-bold fs-6" href="#teacher">Instructors</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-5 text-light fw-bold fs-6" href="#review">Reviews</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link me-5 text-light fw-bold fs-6" href="#contact">Contact Us</a>
                        </li>
                        <li className="nav-item pr-3">
                            <a href='/'><button className="btn btn-brand fw-bold">{name?.length > 0 ? 'Log Out' : 'Log In'}</button></a>
                        </li>
                        <li className="nav-item ">

                            <Link to="#">{name?.length > 0 ? <button className="btn btn-brand fw-bold"><img style={{ width: "30px", borderRadius: "50%" }} src={photo} alt="" /> {name}</button> : null}</Link>
                        </li>

                    </ul>
                   
                </div>
            </div>
            <button className="btn btn-brand fw-bold fixed-bottom ms-auto mb-5 mr-3" ><a href="#home"><FontAwesomeIcon style={{ color: 'gold', width: '30px',fontSize:'30px' }} icon={faAngleUp} /></a></button>
        </nav>
    );
};

export default Navbar;