import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Sidebar from '../Shared/Sidebar/Sidebar';

const AddReview = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = (data) => {
        const reviewData = {
            name: data.name,
            email: data.email,
            description: data.description,
            company: data.company,
            imageURL: imageURL,
        };

        const url = `http://localhost:5055/addReview`;

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(reviewData),
        }).then((res) => {
            if (res) {
                alert('Your Review placed successfully');
            }
        });
    };

    const handleImageUpload = (event) => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set("key", "1de815058f5b53f37e6fc69c4c1d88ca");
        imageData.append("image", event.target.files[0]);

        axios
            .post("https://api.imgbb.com/1/upload", imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return (
        <div className='container-fluid row book-container'>
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div style={{height:"725px"}} className="col-md-6 checkOutForm p-4 review ">
                <form className="mt-5 book" onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="pb-3 ml-5 text-uppercase">Please Drop Your review</h2>
                    <div className="book-input-field">
                        <h6>User Name</h6>
                        <input
                            name="name"
                            type="text"
                            placeholder="Enter Your Name ..."
                            ref={register}

                        />
                    </div>
                    <br />
                    <h6>User Email</h6>
                    <div className="book-input-field">

                        <input
                            name="email"
                            type="text"
                            placeholder="Enter Your Email ..."
                            ref={register}

                        />
                    </div>
                    <br />
                    <div className="book-input-field">
                        <h6>Company/Designation</h6>
                        <input name="company" type="text" ref={register}   placeholder="Enter Your Company/Designation ..."/>
                    </div>
                    <br/>
                    <div className="book-input-field">
                        <h6>Description</h6>
                        <textarea name="description" type="text" ref={register} />
                    </div>
                    <br />
                    <div className="book-input-field">
                        <h6>User Photo</h6>
                        <input
                            name="exampleRequired"
                            type="file"
                            onChange={handleImageUpload}
                        />
                    </div>
                    <br />

                    <input className="btn btn-brand text-uppercase text-light fw-bold" type="submit" />


                </form>

            </div>
           
        </div>
    );
};

export default AddReview;