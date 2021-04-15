import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../../images/icon.png';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <Link class="navbar-brand  fw-bold fs-4" href="#"> <img style={{width:'50px'}} src={icon} alt=""/>E-SCHOOL</Link>
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

                        <li class="nav-item">
                            <Link class="nav-link me-5 active text-light fw-bold fs-6" aria-current="page" href="#">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link me-5 text-light fw-bold fs-6" href="#">About Us</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link me-5 text-light fw-bold fs-6" href="#">Services</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link me-5 text-light fw-bold fs-6" href="#">Reviews</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link me-5 text-light fw-bold fs-6" href="#">Blog</Link>
                        </li>
                        <li class="nav-item ">
                            <Link class="nav-link me-5 text-light fw-bold fs-6" href="#">Contact Us</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;