import React, { useEffect, useState } from 'react';
import ManageServiceDetail from '../ManageServiceDetail/ManageServiceDetail';
import Sidebar from '../Shared/Sidebar/Sidebar';

const ManageService = () => {

    const [manageData, setManageData] = useState([]);
    useEffect(() => {
        fetch("https://whispering-eyrie-86706.herokuapp.com/course")
            .then((res) => res.json())
            .then((data) => setManageData(data));
    }, [manageData]);
    return (
        <div className='row book-container'>
        <div className="col-md-2">
            <Sidebar></Sidebar>
        </div>
        <div className="col-md-8 row mt-5 pt-5 me-5  d-flex justify-content-center ">
               
                          {
                              manageData.map(mngData => <ManageServiceDetail manageData={mngData}></ManageServiceDetail>)
                          }
              

           </div>
        </div>
        
    );
};

export default ManageService;