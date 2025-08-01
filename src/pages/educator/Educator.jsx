import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../components/students/Navbar';

const Educator = () => {
    return (
        <div>
            <h1>Educator Page</h1>
            <div>
                {<Outlet></Outlet>}
            </div>
        </div>
    );
};

export default Educator;