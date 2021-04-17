import React from 'react';

const BookListDetail = ({ OrderDetails }) => {
    console.log(OrderDetails);
    return (
        <div className="p-2 text-center">
            <div style={{ border: "none",boxShadow: "10px 10px 40px rgb(240, 240, 240)" }} class="card ">
                <div class="card-body ">
                    <div className=" d-flex justify-content-between">
                        <h5>Course Group: {OrderDetails?.shipment?.service}</h5>
                        <button className={`${OrderDetails?.paymentId ?'btn btn-outline-success' : 'btn btn-outline-danger'}`}>{OrderDetails?.paymentId ?'Done' : 'Pending'}</button>
                    </div>
                    <h6 className="mt-2">Course Name : {OrderDetails?.shipment?.course}</h6>
                    <p style={{ textAlign: "justify" }} class="card-text py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores incidunt inventore veritatis reiciendis accusantium. Iure incidunt quibusdam earum explicabo unde!</p>

                </div>

            </div>
        </div>

    );
};

export default BookListDetail;