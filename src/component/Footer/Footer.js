import React from 'react';
import logo from '../../images/logo.png'

const Footer = () => {
    return (
        <div className='flex flex-row py-12 px-32 justify-start h-72 bg-[#191919] sm:flex-row sm:h-auto sm:py-10 sm:flex-wrap sm:px-[5%]'>

            
            <div className='flex flex-col w-[50%] justify-between sm:w-full sm:order-last sm:justify-center sm:items-center'>
                <img className='w-36 sm:w-28 sm:py-1 sm:self-start' src={logo} alt="" />
                <p className='text-xs text-[#ffffff3f]'>Copyright 2020 Online food</p>
            </div>

            <div className='flex flex-col w-[50%] justify-between sm:flex-row sm:flex-wrap sm:w-full sm:pb-5'>

                <div className='flex flex-row sm:w-full sm:pb-5'>

                    <div className='text-[#ffffffd2] w-[50%] text-sm space-y-1 sm:space-y-0'>
                        <p>About Online food</p>
                        <p>Read our blog</p>
                        <p>Sign up to deliver</p>
                        <p>Add your resturent</p>
                    </div>

                    <div className='text-[#ffffffd2] w-[50%] text-sm space-y-1 sm:space-y-0'>
                        <p>Get help</p>
                        <p>Read FAQs</p>
                        <p>View all cities</p>
                        <p>Resturants near me</p>
                    </div>

                </div>
                <div className='text-[#ffffffd2] text-sm flex flex-row justify-evenly sm:w-full sm:justify-between' >
                    <p>Privecy Policy.</p>
                    <p>Terms of Use</p>
                    <p>Pricing</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;