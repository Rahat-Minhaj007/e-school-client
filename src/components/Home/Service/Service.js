import React, { useEffect, useState } from 'react';
import './Service.css';
import sci from '../../../images/science.png';
import com from '../../../images/commerce.png';
import it from '../../../images/code .png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Service = () => {
    // const serviceData = [
    //     {   
            
    //         id:1,
    //         title: 'SCIENCE',
    //         img: sci,
    //         service1: 'Physics',
    //         service2: 'Chemistry',
    //         service3: 'Higher Math',
    //         service4: 'General Math',
    //         price:45

    //     },
    //     {
    //         id:2,
    //         title: 'COMMERCE',
    //         img: com,
    //         service1: 'Business Organization and Management',
    //         service2: 'Accounting',
    //         service3: 'Finance, Banking, and Insurance',
    //         service4: 'Economics',
    //         price:33
    //     },
    //     {
    //         id:3,
    //         title: 'Web Development',
    //         img: it,
    //         service1: 'Font End Development',
    //         service2: 'Back End Development',
    //         service3: 'MERN  Development',
    //         service4: 'Programming with JavaScript',
    //         price:105
    //     }
    // ]

    const [serviceData, setServiceData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5055/course")
            .then((res) => res.json())
            .then((data) => setServiceData(data));
    }, []);

    return (
        <section className="service-container mt-5 py-5">
            <div className='text-center'>
                <h2 style={{ color: '#fff' }}>WHAT WE OFFER</h2>
                <h6 className='py-3' style={{ color: '#fff' }}>In this section, you can learn more about the services E-SCHOOL offers to its clients. We are always ready to provide you with quality educational services.</h6>
            </div>
            <div className="d-flex justify-content-around">
                <div className="row w-75 mt-5 pt-5 p-3">
                    {
                        serviceData.map(service => <ServiceDetail service={service} key={service._id}></ServiceDetail>)
                    }
                </div>
            </div>

        </section>
    );
};

export default Service;