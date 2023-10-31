import React from 'react';
import logo from '../../images/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className='flex justify-between px-20 items-center sm:px-1 sm:mx-5 sm:my-2'>
                <div className=''>
                    <Link to="/"><img className='w-40 py-4 ml-10 sm:w-28 sm:py-0 sm:ml-0' src={logo} alt="" /></Link>
                </div>
                <div className='flex flex-row p-4  space-x-4 sm:p-1 sm:space-x-2'>

                    <div className='text-[#f83447]  rounded-full  px-5 pt-2  hover:ring-1 hover:ring-[#f83447] hover:delay-100 sm:px-2 sm:pt-1'>
                        <FontAwesomeIcon  icon={faCartShopping} size='sm'/>
                        <sub className='font-bold'>2</sub>
                    </div>

                    <div className='space-x-4 sm:space-x-3'>
                        <button className='rounded-full  px-4 py-2 text-[#f83447]   hover:ring-1 ring-[#f83447] hover:delay-100 sm:px-2 sm:py-1 sm:text-xs' >Login</button>
                        <button className='rounded-full ring-1 ring-[#f83447] px-5 py-2 bg-[#f83447] text-white hover:delay-100 hover:bg-white hover:text-[#dc3545] sm:px-2 sm:py-1 sm:text-xs'>Sign Up</button>
                    </div>
                </div>
        </div>
    );
};

export default Header;