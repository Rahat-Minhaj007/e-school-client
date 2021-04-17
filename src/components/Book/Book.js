import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import Sidebar from '../Shared/Sidebar/Sidebar';
import './Book.css';
import checkout from '../../../src/images/checkout1.png';
import { useForm } from "react-hook-form";
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import { UserContext } from '../../App';
import sci from '../../images/science.png';
import com from '../../images/commerce.png';
import it from '../../images/code .png';




const Book = () => {



    const { id } = useParams();
    const [serviceData, setServiceData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5055/course")
            .then((res) => res.json())
            .then((data) => setServiceData(data));
    }, []);

    const orderService = serviceData.find(sr => sr._id === id)



    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [shippingData, setShippingData] = useState(null);
    const { name, email } = loggedInUser;

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        const checkOutData = {
            name: data.name,
            email: data.email,
            service: data.book,
            address: data.address,
            course: data.course,
            phone: data.phone
        };
        setShippingData(checkOutData);
    };

    const handlePaymentSuccess = paymentId => {
        const orderDetails = {
            ...loggedInUser,
            shipment: shippingData,
            paymentId,
            orderService,
            orderTime: new Date().toString("dddd, mmmm dS, yyyy, g:i A TT")
        }

        const url = `http://localhost:5055/addOrder`;
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(orderDetails),
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Your order placed successfully');
                }
            })

    }








    return (
        <div className='container-fluid row book-container'>
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>

            <div style={{ display: shippingData ? 'none' : 'block' }} className="col-md-6 checkOutForm p-4 ">
                <form className="mt-5 book" onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="pb-3 ml-5 text-uppercase">CheckOut Your Service</h2>
                    <div className="book-input-field">
                        <h6>User Name</h6>
                        <input
                            name="name"
                            type="text"
                            ref={register}
                            defaultValue={name}
                        />
                    </div>
                    <br />
                    <h6>User Email</h6>
                    <div className="book-input-field">

                        <input
                            name="email"
                            type="text"
                            ref={register}
                            defaultValue={email}
                        />
                    </div>
                    <br />
                    <div className="book-input-field">
                        <h6>Course Group Name</h6>
                        <input name="book" type="text" ref={register}  defaultValue={orderService?.groupName}/>
                    </div>
                    <br/>
                    <div className="book-input-field">
                        <h6>Course Name</h6>
                        <input name="course" type="text" ref={register} />
                    </div>
                    <br />
                    <div className="book-input-field">
                        <h6>Address</h6>
                        <input name="address" type="text" ref={register} />
                    </div>
                    <br />
                    <div className="book-input-field">
                        <h6>Phone Number</h6>
                        <input name="phone" type="number" ref={register} />
                    </div>
                    <br />

                    <input className="btn btn-brand text-uppercase text-light fw-bold" type="submit" />


                </form>

            </div>

            <div style={{ display: shippingData ? 'block' : 'none' }} className="col-md-4 paymentForm p-4 ml-3">
                <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
            </div>

            <div className="col-md-4 d-flex align-items-center">
                <img style={{ width: "100%" }} src={checkout} alt="" />
            </div>


        </div>
    );
};

export default Book;