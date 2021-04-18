import React from 'react';
import Sidebar from '../Shared/Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div className='row dash'>
        <div className="col-md-2">
            <Sidebar></Sidebar>
        </div>
        <h1 className='text-uppercase col-md-8 text-center text-light dashText d-flex align-items-center justify-content-center'>Welcome to the dashboard</h1>
        </div>
    );
};

export default Dashboard;