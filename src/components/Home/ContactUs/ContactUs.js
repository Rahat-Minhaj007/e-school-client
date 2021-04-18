import React from 'react';
import './ContactUs.css';
import contact from '../../../images/contact.png'

const ContactUs = () => {
    return (

        <section id='contact' className='contact-container mt-5 pt-5'>
            <div className="container-fluid">
                <h2 className='text-center text-light'>CONTACT US</h2>
                <div className='row mt-5 py-5 d-flex justify-content-center'>
                    <div className="col-md-7 p-5">
                        <form>
                            <div className="row">
                                <div class="mb-3 col-md-5">
                                    <label for="exampleInputEmail1" class="form-label text-light">First Name</label>
                                    <input type="text" class="form-control" />

                                </div>
                                <div class="mb-3 col-md-5">
                                    <label for="exampleInputEmail1" class="form-label text-light">Last Name</label>
                                    <input type="text" class="form-control" />
                                </div>
                                <div class="mb-3 col-md-5">
                                    <label for="exampleInputEmail1" class="form-label text-light">Email address</label>
                                    <input type="email" class="form-control" />

                                </div>
                                <div class="mb-3 col-md-5">
                                    <label for="exampleInputEmail1" class="form-label  text-light">Phone</label>
                                    <input type="number" class="form-control" />
                                </div>
                                <div class="form-floating mb-3 col-md-10">
                                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}}></textarea>
                                    <label for="floatingTextarea2"></label>
                                </div>
                            </div>


                            <button type="submit" class="btn btn-brand text-dark fw-bold text-uppercase mt-3">Submit</button>
                        </form>
                    </div>
                    <div className="col-md-3 py-5">
                        <img style={{ width: "100%" }} src={contact} alt="" />
                    </div>

                </div>
            </div>

        </section>
    );
};

export default ContactUs;