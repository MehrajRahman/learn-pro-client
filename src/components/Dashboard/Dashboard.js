import React from 'react';
import Shipment from '../Shipment/Shipment';
import Sidebar from './Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <section>
           
            <div  className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                
                <div className="col-md-10 col-sm-12 col-12">
                    <Shipment></Shipment>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;