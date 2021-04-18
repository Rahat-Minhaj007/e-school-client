import React from 'react';
import blog1 from '../../../images/blog1 .jpg';
import blog2 from '../../../images/blog2.jpg'
import blog3 from '../../../images/blog3.jpg';

const Blog = () => {
    return (
        <section className="blog">
            <div className="row">

                <div className="col-md-6">
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={blog1} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={blog2} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={blog3} class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>
                <div className="col-md-6">

                </div>


            </div>

        </section>
    );
};

export default Blog;