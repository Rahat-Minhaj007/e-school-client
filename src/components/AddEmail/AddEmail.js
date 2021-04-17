import React from "react";
import { useForm } from "react-hook-form";
import Sidebar from '../Shared/Sidebar/Sidebar';

const AddEmail = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    

    const onSubmit = (data) => {
        const courseData = {
               admin:data.email
        };

        const url = `http://localhost:5055/addEmail`;

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(courseData),
        }).then((res) => {
            if (res) {
                alert('Your Admin Email placed successfully');
            }
        });
    };

 
    return (
        <div className='container-fluid row book-container'>
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div style={{ height: "305px"}} className="col-md-6 courseForm p-4 review ">
                <form className="mt-5 book" onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="pb-3 ml-5 pl-5 text-uppercase">ADD Admin Email</h2>
                    <div className="book-input-field">
                        <h6>Course Group</h6>
                        <input
                            name="email"
                            type="text"
                            placeholder="Add Admin Email ..."
                            ref={register}

                        />
                    </div>
                    <br />
                        
                    <input className="btn btn-brand text-uppercase text-light fw-bold" type="submit" />


                </form>

            </div>

        </div>
    );
};

export default AddEmail;