import React from 'react';

import winson from '../../../images/Ellipse 1.png';
import fiona from '../../../images/Ellipse 2.png';
import alison from '../../../images/Ellipse 3.png';
import TestimonialDetail from '../TestimonialDetail/TestimonialDetail';


const Testimonial = () => {
    const testimonialData = [
        {
            name: 'Winson Herry',
            img: winson
        },
        {
            name: 'Fiona Smith',
            img: fiona
        },
        {
            name: 'Allison Tailor',
            img: alison
        }
    ]
    return (
        <section className="testimonial mt-5 pt-5 my-5">
            <div className="container-fluid">
                <div className="text-center">
                    <h2 style={{ color: "#40475B" }}>TESTIMONIAL</h2>

                </div>
                <div className="d-flex justify-content-center">
                    <div className="row w-75 mt-5 pt-5 me-5">
                       
                            {
                                testimonialData.map(testimonial => <TestimonialDetail testimonial={testimonial}></TestimonialDetail>)
                            }
                        </div>
                    </div>
                </div>

          

        </section>
    );
};

export default Testimonial;