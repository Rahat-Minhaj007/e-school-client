import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import Service from '../Service/Service';
import Teacher from '../Teacher/Teacher';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
           <Header></Header>
           <AboutUs></AboutUs>
           <Service></Service>
           <Teacher></Teacher>
           <ContactUs></ContactUs>
           <Testimonial></Testimonial>
           <Footer></Footer>
        </div>
    );
};

export default Home;