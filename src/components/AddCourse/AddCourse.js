import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Sidebar from '../Shared/Sidebar/Sidebar';

const AddCourse = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = (data) => {
        const courseData = {
            groupName: data.name,
            firstCourse: data.first,
            secondCourse: data.second,
            thirdCourse: data.third,
            fourthCourse: data.fourth,
            price:data.price,
            imageURL: imageURL,
        };

        const url = `http://localhost:5055/addCourse`;

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(courseData),
        }).then((res) => {
            if (res) {
                alert('Your Course Details placed successfully');
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
                console.log(response.data.data.display_url);
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
            <div style={{ height: "875px" }} className="col-md-6 courseForm p-4 review ">
                <form className="mt-5 book" onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="pb-3 ml-5 text-uppercase">ADD YOUR COURSES</h2>
                    <div className="book-input-field">
                        <h6>Course Group</h6>
                        <input
                            name="name"
                            type="text"
                            placeholder="Enter Course Group Name ..."
                            ref={register}

                        />
                    </div>
                    <br />
                    <h6>First Course</h6>
                    <div className="book-input-field">

                        <input
                            name="first"
                            type="text"
                            placeholder="Enter First Course ..."
                            ref={register}

                        />
                    </div>
                    <br />
                    <div className="book-input-field">
                        <h6>Second Course</h6>
                        <input name="second" type="text" ref={register} placeholder="Enter Second Course..." />
                    </div>
                    <br />
                    <div className="book-input-field">
                        <h6>Third Course</h6>
                        <input name="third" type="text" ref={register} placeholder="Enter Third Course..." />
                    </div>
                    <br />
                    <div className="book-input-field">
                        <h6>Fourth Course</h6>
                        <input name="fourth" type="text" ref={register} placeholder="Enter Fourth Course..." />
                    </div>
                    <br />
                    <div className="book-input-field">
                        <h6>Price</h6>
                        <input name="price" type="text" ref={register} placeholder="Add Course Price..." />
                    </div>
                    <br />
                    <div className="book-input-field">
                        <h6>Course Icon Photo</h6>
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

export default AddCourse;