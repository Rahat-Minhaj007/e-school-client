import { Link } from 'react-router-dom';
import icon from '../../../images/icon.png';

import React, { useContext } from 'react';
import { UserContext } from '../../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { name, photo } = loggedInUser;
   
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <Link class="navbar-brand  fw-bold fs-4" href="#"> <img style={{ width: '50px' }} src={icon} alt="" />E-SCHOOL</Link>
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

                        <li class="nav-item">
                            <Link class="nav-link me-5 active text-light fw-bold fs-6" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link me-5 text-light fw-bold fs-6" href="#about">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link me-5 text-light fw-bold fs-6" href="#course">Courses</a>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link me-5 text-light fw-bold fs-6" to="/dashboard">Dashboard</Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link me-5 text-light fw-bold fs-6" href="#teacher">Instructors</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link me-5 text-light fw-bold fs-6" href="#review">Reviews</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link me-5 text-light fw-bold fs-6" href="#contact">Contact Us</a>
                        </li>
                        <li class="nav-item pr-3">
                            <a href={name?.length > 0 ? '/home': '/login'}><button className="btn btn-brand fw-bold">{name?.length > 0 ? 'Log Out' : 'Log In'}</button></a>
                        </li>
                        <li class="nav-item ">

                            <Link to="#">{name?.length > 0 ? <button className="btn btn-brand fw-bold"><img style={{ width: "30px", borderRadius: "50%" }} src={photo} alt="" /> {name}</button> : null}</Link>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;