import React from 'react';
import blog1 from '../../../images/blog1 .jpg';
import blog2 from '../../../images/blog2.jpg'
import blog3 from '../../../images/blog3.jpg';

const Blog = () => {
    return (
        <section className=" blog mt-5">
            <div className="row">

                <div className="col-md-6">
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">

                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img style={{opacity:'0.9'}} src={blog1} class="d-block w-100 img-fluid" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img style={{opacity:'0.9'}} src={blog2} class="d-block w-100 img-fluid" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img style={{opacity:'0.9'}}  src={blog3} class="d-block w-100 img-fluid" alt="..." />
                            </div>
                        </div>

                    </div>

                </div>
                <div className="col-md-4 aboutContent  p-3 mt-3">
                    <h2 style={{ color: '#262a5e' }} className="text-uppercase">BLOGS</h2> 

                    <p className="py-3 mt-2" style={{ color: '#74757f' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolorem quae quibusdam illum dolores eveniet alias commodi delectus voluptatibus, eum molestiae quod laborum harum nostrum minus totam sunt itaque iusto? Voluptas reprehenderit dolorem quae exercitationem consequuntur deserunt, corrupti dignissimos, consectetur repellendus sed labore a assumenda voluptatem autem, minima ab. Veritatis quaerat necessitatibus voluptatum non recusandae tempore porro fugiat reprehenderit tenetur et, ad illum praesentium possimus aliquam enim id eveniet? Placeat.</p>

                    <button className="btn btn-brand text-uppercase fw-bold mt-2">Browse Our Blog Site</button>

                </div>


            </div>

        </section>
    );
};

export default Blog;