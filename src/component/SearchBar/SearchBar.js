import React from 'react';
import './SearchBar.css';


const SearchBar = () => {

    


    return (
            <div className="flex justify-center align-middle flex-col items-center h-[500px] bg-cover bg-center px-[50px] sm:h-[180px]" id='bannar' >
                <div>
                    <h1 className='text-[#3a3536] text-4xl tracking-widest sm:text-sm sm:tracking-wide'>BEST FOOD WAITING FOR YOUR BELLY</h1>
                </div>
                <form>
                    <div className='relative flex items-center text-gray-700 flex-row-reverse pt-5 sm:pt-2'>
                        
                        <input 
                            type="text"
                            className='w-[450px] py-1.5 px-3 font-semibold  text-gray rounded-full border-none ring-1 ring-[#f8344865] outline-8 outline-[#f8344898] sm:w-40 sm:py-0 sm:px-2 sm:outline-1'
                        />
                        <button className='px-5 py-[7px] bg-[#f83447]  text-white absolute rounded-full focus:ring-2 ring-red-400 sm:px-2 sm:py-[5px] sm:text-xs'>
                            Search
                        </button>
                    </div>
                </form>
            </div>
    );
};

export default SearchBar;