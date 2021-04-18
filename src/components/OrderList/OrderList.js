import React, { useEffect, useState } from 'react';
import Sidebar from '../Shared/Sidebar/Sidebar';

const OrderList = () => {
    const [orderData, setOrderData] = useState([]);
    useEffect(() => {
        fetch("https://whispering-eyrie-86706.herokuapp.com/order")
            .then((res) => res.json())
            .then((data) => setOrderData(data));
    }, []);

    const handleUpdate = (id) => {
        console.log(id);
    }

    return (
        <div className='row book-container'>
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div >
            <div className="col-md-8 mt-3 tableOrder">
                <table className="table ">
                    <thead>
                        <tr >
                            <th className="text-dark text-left" scope="col">Sr No</th>
                            <th className="text-dark" scope="col">Name</th>
                            <th className="text-dark" scope="col">Email Id</th>
                            <th className="text-dark" scope="col">Course</th>
                            <th className="text-dark" scope="col">Pay With</th>
                            <th className="text-dark" scope="col">Status</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            orderData.map((data, index) =>

                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{data?.name}</td>
                                    <td>{data?.email}</td>
                                    <td>{data?.shipment?.course}</td>
                                    <td>Card</td>
                                    <td>   <button onClick={() => handleUpdate(data._id)} className={`${data?.status === 'pending' ? 'btn btn-outline-danger' : 'btn btn-outline-success'}`}>{data?.status === 'pending' ? 'Pending' : 'Done'}</button>

                                    </td>

                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

        </div >
    );
};

export default OrderList;