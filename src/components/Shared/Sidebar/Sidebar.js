import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import icon from '../../../images/footer.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGripHorizontal,faFileAlt,faCog,faHome,faShoppingCart ,faCommentDots,faFile,faTasks} from '@fortawesome/free-solid-svg-icons'


const Sidebar = () => {
    return (
        
            <div className="sidebar" >
                <ul className="side" iconShape="square">
                    <img style={{ width: "50px" }} src={icon} alt=""/><h4 className="text-light">E-SCHOOL</h4>
                    <li  ><Link style={{textDecoration:"none",color:"white"}} to='/dashboard'><FontAwesomeIcon icon={faGripHorizontal} /> Dashboard</Link></li>
                    <li ><Link style={{textDecoration:"none",color:"white"}} to='/home'><FontAwesomeIcon icon={faHome} />  Home</Link></li>
                    <li ><Link style={{textDecoration:"none",color:"white"}} to='/book'><FontAwesomeIcon icon={faShoppingCart } />  Book</Link></li>
                    <li ><Link style={{textDecoration:"none",color:"white"}} to='/bookList'><FontAwesomeIcon icon={faFileAlt} />  Booking List</Link></li>
                    <li ><Link style={{textDecoration:"none",color:"white"}} to='/addReview'><FontAwesomeIcon icon={faCommentDots} />  Review</Link></li>
                    <li ><Link style={{textDecoration:"none",color:"white"}} to='/addCourse'>  <FontAwesomeIcon icon={faFile} /> Add Courses</Link></li>
                    <li ><Link style={{textDecoration:"none",color:"white"}} to='/manage'>  <FontAwesomeIcon icon={faTasks} /> Manage Courses</Link></li>
                    <li ><Link style={{textDecoration:"none",color:"white"}} to='/setting'>  <FontAwesomeIcon icon={faCog} /> Setting</Link></li>
                    
                </ul>
            </div>
       
    );
};

export default Sidebar;