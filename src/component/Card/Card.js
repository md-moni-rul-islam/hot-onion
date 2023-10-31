import React from 'react';
import { Link } from 'react-router-dom';

const Card = (e) => {

    const {name,catagory,id} = e.value;

    

    const alter = 'Img of' + {name}

    return (
            <Link to={`/${catagory}/${id}`}  className='flex flex-col shadow-md mb-10 justify-center text-center items-center w-72 h-auto transform hover:scale-105 duration-300 hover:drop-shadow-xl p-2 pb-10 rounded-lg bg-white sm:px-1 sm:mb-5 sm:w-[31%] sm:pb-2 sm:justify-evenly' key={e.value.id}>

                <img className=' px-7 pt-4 w-60 rounded-full sm:flex sm:fle sm:px-2 sm:py-1 sm:w-20' src={e.value.image} alt={alter} />
                <div className='p-4 sm:p-0'>
                    <h1 className='font-bold pt-2 sm:text-xs sm:text-semibold sm:pt-0'>{e.value.name}</h1>
                    <p className='text-gray-500 py-2  sm:text-xs sm:py-0'>It's very delicious food.</p>
                    <h1 className='font-semibold sm:text-xs sm:py-1'>{'$ '+e.value.price}</h1>
                </div>
            </Link>
    );
};

export default Card;