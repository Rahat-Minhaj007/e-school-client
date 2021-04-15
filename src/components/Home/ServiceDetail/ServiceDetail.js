import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDetail = ({ service }) => {
    return (

        <Link style={{ textDecoration:"none" }} className="col-md-4 serviceCard text-center" to="#">

            <div style={{ border: "none" }} class="card ">
                <div class="card-body serviceCardBody p-3" style={{ color:"#40475B"}}>
                    <img style={{ height: '50px' }} src={service.img} alt="" />
                    <h4  className="mt-3 p-3 m-3" style={{ color: "#40475B"}}>{service.title}</h4>
                    <h6  >{service.service1}</h6>
                    <h6>{service.service2}</h6>
                    <h6>{service.service3}</h6>
                    <h6>{service.service4}</h6>

                </div>
            </div>

        </Link>


    );
};

export default ServiceDetail;