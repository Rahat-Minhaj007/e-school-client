
import Sidebar from '../Shared/Sidebar/Sidebar';
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from '../../App';
import BookListDetail from '../BookListDetail/BookListDetail';

const BookList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { email } = loggedInUser;
    const [orderData, setOrderData] = useState([]);
    useEffect(() => {
        fetch("https://whispering-eyrie-86706.herokuapp.com/order")
            .then((res) => res.json())
            .then((data) => setOrderData(data));
    }, []);

    const specificUserOrder = orderData.filter((user) => user.email === email);
    return (
        <div className=' row book-container'>
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-6  mt-5 pt-5 ">
               

                    {specificUserOrder.map((userOrderDetail) => (
                        <BookListDetail OrderDetails={userOrderDetail}></BookListDetail>
                    ))}

                </div>
            </div>
        // </div>
    );
};

export default BookList;