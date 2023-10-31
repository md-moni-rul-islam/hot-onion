import React, { useState } from 'react';
import image1 from '../../images/Image/adult-blur-blurred-background-687824.png';
import image2 from '../../images/Image/chef-cook-food-33614.png';
import image3 from '../../images/Image/architecture-building-city-2047397.png';
import icon1 from '../../images/ICON/Group 204.png';
import icon3 from '../../images/ICON/Group 245.png';
import icon2 from '../../images/ICON/Group 1133.png';
import {faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Description = (e) => {


    const [button, setButton] = useState({
    })

    

    return (
        <div>
            <div className='w-3/5 px-32 pb-8'>
                <h1 className='font-semibold text-3xl pb-5'>Why you choose us</h1>
                <p>El Diablo’s cook top is nothing short of extraordinary. Located on a Spanish Island, this restaurant cooks its meals over an active volcanic hole in the ground.</p>
            </div>

            <div className='flex flex-wrap justify-between px-36 flex-row'>

                <div className='flex flex-col shadow-md mb-10   w-80 h-auto transform hover:scale-105 duration-300 hover:drop-shadow-xl pb-10 rounded-md bg-white '>

                    <img className=' rounded-md' src={image1} alt='{alter}' />

                    <div className='flex flex-row pt-2'>
                        <div className='w-96 p-2'>
                            <img className='w-10 pl-1 pt-2' src={icon1} alt="" />
                        </div>
                        <div className='pr-4 pt-2 '>
                            <h1 className='font-bold pt-2'>Fast Delivery</h1>
                            <p className='text-gray-500 pt-2'>For a memorable meal the quality of the service is something that guests often remember. Restaurant provides a physical good (prepared food), but also provides services in the form of ambience, the setting and clearing of the table, etc.</p>
                        </div>
                    </div>
                    
                </div>

                <div className='flex flex-col shadow-md mb-10 w-80 h-auto transform hover:scale-105 duration-300 hover:drop-shadow-xl pb-10 rounded-md bg-white '>

                    <img className=' rounded-md' src={image2} alt='{alter}' />

                    <div className='flex flex-row pt-2'>
                        <div className='w-96 p-2'>
                            <img className='w-10 pl-1 pt-2 ' src={icon2} alt="icon1" />
                        </div>
                        <div className='pr-4 pt-2'>
                            <h1 className='font-bold pt-2'>Fast Delivery</h1>
                            <p className='text-gray-500 pt-2'>For a memorable meal the quality of the service is something that guests often remember. Restaurant provides a physical good (prepared food), but also provides services in the form of ambience, the setting and clearing of the table, etc.</p>
                        </div>
                    </div>
                    
                </div>

                <div className='flex flex-col shadow-md mb-10   w-80 h-auto transform hover:scale-105 duration-300 hover:drop-shadow-xl pb-10 rounded-md bg-white '>

                    <img className=' rounded-md' src={image3} alt='{alter}' />

                    <div className='flex flex-row pt-2'>
                        <div className='w-96 p-2'>
                            <img className='w-10 pl-1 pt-2' src={icon3} alt="" />
                        </div>
                        <div className='pr-4 pt-2'>
                            <h1 className='font-bold pt-2'>Fast Delivery</h1>
                            <p className='text-gray-500 pt-2'>
                                For a memorable meal the quality of the service is something that guests <span className='span1 text-gray-500 pt-2'>...</span><span className='hidden1' style={{display: "none"}}>often remember. Restaurant provides a physical good (prepared food), but also provides services in the form of ambience, the setting and clearing of the table, etc.</span>
                            </p>
                            
                            <p className='text-gray-500 pt-2'>
                                
                            </p>
                            <button className='text-sm font-bold text-blue-500' name="button1">See More  <FontAwesomeIcon className='text-green-500' icon={faArrowAltCircleRight} /> </button>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    );
};

export default Description;