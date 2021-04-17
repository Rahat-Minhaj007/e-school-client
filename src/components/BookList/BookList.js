
import Sidebar from '../Shared/Sidebar/Sidebar';
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from '../../App';
import BookListDetail from '../BookListDetail/BookListDetail';

const BookList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { email } = loggedInUser;
    const [orderData, setOrderData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5055/order")
            .then((res) => res.json())
            .then((data) => setOrderData(data));
    }, []);

    const specificUserOrder = orderData.filter((user) => user.email === email);
    return (
        <div className='container-fluid row book-container'>
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-4  mt-5 pt-5 me-5  d-flex justify-content-center ">
                {/* <div className="row"> */}

                    {specificUserOrder.map((userOrderDetail) => (
                        <BookListDetail OrderDetails={userOrderDetail}></BookListDetail>
                    ))}

                </div>
            </div>
        // </div>
    );
};

export default BookList;