import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ManageServiceDetail = (props) => {
    const { firstCourse, secondCourse, thirdCourse, fourthCourse, price, groupName, imageURL, _id } = props.manageData;

    const handleDelete = (id) => {
        console.log(id);
        if (window.confirm('Do you want to delete this item?')) {


            fetch(`http://localhost:5055/delete/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    console.log('Deleted Successfully');
                })
        }
    }



    return (
        <div className="col-md-4 p-2 text-center serviceCard">
            <div style={{ border: "none", boxShadow: "10px 10px 40px rgb(240, 240, 240)" }} class="card ">
                <div class="card-body serviceCardBody p-3" style={{ color: "#40475B" }}>
                    <img style={{ height: '50px' }} src={imageURL} alt="" />
                    <h4 className="mt-3 p-3 m-3" style={{ color: "#40475B" }}>{groupName}</h4>
                    <h6  >{firstCourse}</h6>
                    <h6>{secondCourse}</h6>
                    <h6>{thirdCourse}</h6>
                    <h6>{fourthCourse}</h6>
                    <h4>$ {price}</h4>
                    <button onClick={() => handleDelete(_id)} className="btn btn-dark">Delete  <FontAwesomeIcon icon={faTrash} /></button>
                </div>

            </div>
        </div>
    );
};

export default ManageServiceDetail;