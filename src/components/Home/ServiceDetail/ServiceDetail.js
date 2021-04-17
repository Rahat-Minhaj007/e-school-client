import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDetail = ({ service }) => {
    return (

        <Link style={{ textDecoration:"none" }} className="col-md-4 serviceCard text-center" to={`/book/${service._id}`}>

            <div style={{ border: "none" }} class="card ">
                <div class="card-body serviceCardBody p-3" style={{ color:"#40475B"}}>
                    <img style={{ height: '50px' }} src={service.imageURL} alt="" />
                    <h4  className="mt-3 p-3 m-3" style={{ color: "#40475B"}}>{service.groupName}</h4>
                    <h6  >{service.firstCourse}</h6>
                    <h6>{service.secondCourse}</h6>
                    <h6>{service.thirdCourse}</h6>
                    <h6>{service.fourthCourse}</h6>
                    <h4>$ {service.price}</h4>

                </div>
            </div>

        </Link>


    );
};

export default ServiceDetail;