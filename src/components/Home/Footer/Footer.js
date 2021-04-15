import React from 'react';
import icon from '../../../images/footer.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="container-fluid homeFooter mt-3">
            <div className="row ">
                <div className="col-md-5 ml-5 mt-5 footerLogo">
                    <img style={{ width: "50px" }} src={icon} alt=""/><h4 className="text-light">E-SCHOOL</h4>
                </div>
                <div style={{ color: "white" }} className="col-md-3 mt-5">
                    <p>About Online Food</p>
                    <p>Read Our Blog</p>
                    <p>Sign Up To Deliver</p>
                    <p>Add Your Restaurant</p>
                </div>
                <div style={{ color: "white" }} className="col-md-3 mt-5">
                    <p>Get Help</p>
                    <p>Read FAQs</p>
                    <p>View All Cities</p>
                    <p>Restaurants Near Me</p>
                </div>
            </div>

            <div className="row mt-5 ">
                <div className="col-md-5 ml-5 mt-5">
                    <small style={{ color: "gray" }}>copyrights©Rahat 2021,all rights reserved</small>
                </div>
                <div style={{ color: "white" }} className="col-md-2 mt-5">
                    <p>Private Policy</p>
                </div>
                <div style={{ color: "white" }} className="col-md-2 mt-5">
                    <p>Terms Of Use</p>
                </div>
                <div style={{ color: "white" }} className="col-md-2 mt-5">
                    <p>Pricing</p>
                </div>
            </div>



        </div>
  
    );
};

export default Footer;