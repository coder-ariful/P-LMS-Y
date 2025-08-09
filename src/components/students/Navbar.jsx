import React, { useContext } from 'react';
import { assets } from '../../assets/asset/assets';
import { Link } from 'react-router';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { AppContext } from '../../context/AppContext';

const Navbar = () => {

    const isCourseListPage = location.pathname.includes('/course-list')
    // sign-in process
    const { openSignIn } = useClerk();
    const { user } = useUser();
    const { navigate, isEducator } = useContext(AppContext)


    return (
        <div className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 py-4 border-b border-gray-500 ${isCourseListPage ? 'bg-white' : 'bg-cyan-100/70'}`}>
            {/* for logo */}
            {/* <Link to={'/'}><img src={assets.logo} alt="nav_image" className='w-28 lg:w-32 cursor-pointer' /></Link> */}
            <img onClick={() => navigate('/')} src={assets.logo} alt="nav_image" className='w-28 lg:w-32 cursor-pointer' />

            {/* For Desktop View */}
            <div className='hidden md:flex items-center gap-5 text-gray-500'>
                <div className='flex items-center gap-5'>
                    {
                        user && <>
                            <button onClick={() => navigate('/educator')}> {isEducator ? 'Educator Dashboard' : "Become Educator"} </button>
                            | <Link to='/my-enrollments'> My Enrollments</Link>
                        </>
                    }
                </div>
                {
                    user ? <UserButton /> :
                        <button className='bg-blue-600 text-white px-5 py-2 rounded-full cursor-pointer' onClick={() => { openSignIn() }}>Create Account</button>
                }

            </div>

            {/* For Mobile View */}
            <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-500'>
                <div className='flex items-center gap-1 sm:gap-2 max-sm:text-sm'>
                    {
                        user && <>
                            {/* <button>Become Educator</button> */}
                            <button onClick={() => navigate('/educator')}> {isEducator ? 'Educator Dashboard' : "Become Educator"} </button>
                            | <Link to='/my-enrollments'> My Enrollments</Link>
                        </>
                    }
                </div>
                {
                    user ? <UserButton /> : <button className='cursor-pointer' onClick={() => openSignIn()}><img src={assets.user_icon} alt='User Icon' /></button>
                }

            </div>
        </div>
    );
};

export default Navbar;