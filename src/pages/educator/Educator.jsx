import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../components/educator/Navbar';
import Sidebar from '../../components/educator/Sidebar';

const Educator = () => {
    return (
        <div className='text-[16px] min-h-screen bg-white'>
            <Navbar />
            <div className='flex'>
                <Sidebar />
                <div className='flex-1'>
                    {<Outlet></Outlet>}
                </div>
            </div>
        </div>
    );
};

export default Educator;