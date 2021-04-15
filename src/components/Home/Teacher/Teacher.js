import React from 'react';
import winson from '../../../images/Ellipse 1.png';
import fiona from '../../../images/Ellipse 2.png';
import alison from '../../../images/Ellipse 3.png';
import teacher from '../../../images/teacher.png';
import TeacherDetail from '../TeacherDetail/TeacherDetail';

const Teacher = () => {
    const teacherData = [
        {
            name: 'Winson Herry',
            img: winson,
            role: 'Physics Instructor'
        },
        {
            name: 'Fiona Smith',
            img: fiona,
            role: 'Business Instructor'
        },
        {
            name: 'Allison Tailor',
            img: alison,
            role: 'Web Instructor'
        }
    ]
    return (
        <section className="teacher mt-5 pt-5 my-5">
            <div className="container-fluid ">
                <div className="d-flex justify-content-end">

                    <div className="row d-flex justify-content-around">
                        <div className="mt-5 py-5 col-md-6">
                            <h2 style={{ color: "#40475B" }}>OUR TEACHERS</h2>
                        </div>
                        <div className=" col-md-6">
                            <img style={{ width: '40%' }} src={teacher} alt="" />
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="row w-75 mt-5 pt-5 me-5">
                        {
                            teacherData.map(teacher => <TeacherDetail teacher={teacher}></TeacherDetail>)
                        }
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Teacher;