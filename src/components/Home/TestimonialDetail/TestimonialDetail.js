import React from 'react';

const TestimonialDetail = ({ testimonial }) => {
    return (
        <div className="col-md-4 text-center">
            <div style={{ border: "none", boxShadow: "10px 10px 40px rgb(240, 240, 240)" }} class="card testimonialCard">
                <div class="card-body ">
                    <p style={{ textAlign: "justify" }} class="card-text py-3">{testimonial?.description}</p>
                    <div className="d-flex justify-content-around py-3">
                        <img style={{ width: '30%', borderRadius: '50%', height: "30%" }} src={testimonial.imageURL} alt="" />
                        <div className="py-2">
                            <h5 style={{ color: "#40475B" }}>{testimonial.name}</h5>
                            <p>{testimonial?.company}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>


       
    );
};

export default TestimonialDetail;