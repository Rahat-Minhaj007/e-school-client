import React from 'react';
import './AboutUs.css';
import about from '../../../images/about1.jpg';

const AboutUs = () => {
    return (
       <section id='about' className="about-container container py-5  mt-5">
           <div className="row d-flex justify-content-between">
               <div className="col-md-5 aboutImg">
                   <img style={{width:"450px",height:"400px"}} src={about} alt=""/>

               </div>
               <div className="col-md-6 aboutContent  p-3 mt-3">
                   <h2 style={{color:'#262a5e'}} className="text-uppercase">a few words about us</h2>

                   <p className="py-3 mt-2" style={{color:'#74757f'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolorem quae quibusdam illum dolores eveniet alias commodi delectus voluptatibus, eum molestiae quod laborum harum nostrum minus totam sunt itaque iusto? Voluptas reprehenderit dolorem quae exercitationem consequuntur deserunt, corrupti dignissimos, consectetur repellendus sed labore a assumenda voluptatem autem, minima ab. Veritatis quaerat necessitatibus voluptatum non recusandae tempore porro fugiat reprehenderit tenetur et, ad illum praesentium possimus aliquam enim id eveniet? Placeat.</p>

                   <button className="btn btn-brand text-uppercase fw-bold mt-2">Read More</button>

               </div>
           </div>

       </section>
    );
};

export default AboutUs;