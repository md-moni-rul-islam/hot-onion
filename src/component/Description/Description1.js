import React, { useState } from 'react';
import image1 from '../../images/Image/adult-blur-blurred-background-687824.png';
import image2 from '../../images/Image/chef-cook-food-33614.png';
import image3 from '../../images/Image/architecture-building-city-2047397.png';
import icon1 from '../../images/ICON/Group 204.png';
import icon3 from '../../images/ICON/Group 245.png';
import icon2 from '../../images/ICON/Group 1133.png';
import {faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Description1 = () => {

    const [card1, setCard1] = useState(false);
    const [card2, setCard2] = useState(false);
    const [card3, setCard3] = useState(false);

    const buttonClick = (e) => {

        if(e.target.name === 'card1'){
            !card1 ? setCard1(true) : setCard1(false);
        }
        else if(e.target.name === 'card2'){
            !card2 ? setCard2(true) : setCard2(false); 
        }
        else{
            !card3 ? setCard3(true) : setCard3(false);
        }
    }

    return (
        <div className='flex flex-col'>

            <div className='w-3/5 px-32 pb-8 sm:px-10 sm:pb-4 sm:w-full'>
                <h1 className='font-semibold text-3xl pb-2 sm:text-xl'>Why you choose us</h1>
                <p className='sm:text-xs'>El Diablo’s cook top is nothing short of extraordinary. Located on a Spanish Island, this restaurant cooks its meals over an active volcanic hole in the ground.</p>
            </div>

            <div className='flex flex-row px-[7%] mt-4 justify-between pb-10 sm:mt-0 sm:flex-row sm:justify-center  sm:px-[5%] sm:space-x-4 sm:flex-wrap' >


                <div className='w-[30%] flex flex-col rounded-xl shadow-md transform hover:scale-105 duration-300 hover:drop-shadow-xl h-min bg-white sm:w-[47%] '>
                    <img src={image1} alt="" />

                    <div className='flex flex-row p-5 sm:flex-col sm:p-0 sm:px-2'>
                        <div className='text-center w-[20%] mt-4 sm:w-full sm:flex sm:justify-center'>
                            <img src={icon1} className='w-7' alt="icon1" />
                        </div>
                        <div className='w-[80%] mt-4 pr-5 flex flex-col flex-wrap items-start sm:mt-0 sm:pr-0 sm:w-full sm:py-2'>
                            <h1 className='font-bold sm:text-sm'>Fast Delivery</h1>
                            <div className=''>
                                <p className=' sm:text-xs'>For a memorable meal the quality of the service is {!card1 && <span>...</span>}{card1 && <span>something that guests often remember. Restaurant provides a physical good (prepared food), but also provides services in the form of ambience, the setting and clearing of the table, etc.</span>}
                                </p>
                            </div>
                            <button onClick={buttonClick} name='card1' className='text-blue-600 font-semibold sm:text-sm'>{card1? 'Show less' : 'Show more'} <FontAwesomeIcon className='text-green-500' icon={faArrowAltCircleRight}/></button>
                        </div>
                    </div>
                </div>
                
                {/* <div className='w-[30%] flex-col rounded-xl shadow-md transform hover:scale-105 duration-300 hover:drop-shadow-xl h-min bg-white sm:order-last  sm:w-[60%] sm:mt-8 sm:flex-row sm:justify-between sm:items-center sm:px-[0] '>
                    <img src={image2} alt="" />

                    <div className='flex flex-row p-5 sm:p-0 sm:flex-col'>
                        <div className='text-center w-[20%] mt-4 sm:w-full'>
                            <img src={icon2} className='' alt="icon2" />
                        </div>
                        <div className='w-[80%] mt-4 pr-5 flex flex-col flex-wrap items-start sm:w-full'>
                            <h1 className='font-bold'>Fast Delivery</h1>
                            <div className=''>
                                <p className=''>For a memorable meal the quality of the service is{!card2 && <span>...</span>} {card2 && <span>something that guests often remember. Restaurant provides a physical good (prepared food), but also provides services in the form of ambience, the setting and clearing of the table, etc.</span>}
                                </p>
                            </div>
                            <button onClick={buttonClick} name="card2" className='text-blue-600 font-semibold'>{card2? 'Show less' : 'Show more'} <FontAwesomeIcon className='text-green-500' icon={faArrowAltCircleRight}/></button>
                        </div>
                    </div>
                </div> */}

                <div className='w-[30%] flex flex-col rounded-xl shadow-md transform hover:scale-105 duration-300 hover:drop-shadow-xl h-min bg-white sm:w-[70%] sm:order-last sm:mt-7'>
                    <img src={image2} alt="" />

                    <div className='flex flex-row p-5 sm:flex-col sm:p-0 sm:px-2'>
                        <div className='text-center w-[20%] mt-4 sm:w-full sm:flex sm:justify-center'>
                            <img src={icon2} className='w-7' alt="icon1" />
                        </div>
                        <div className='w-[80%] mt-4 pr-5 flex flex-col flex-wrap items-start sm:mt-0 sm:pr-0 sm:w-full sm:py-2'>
                            <h1 className='font-bold sm:text-sm'>Fast Delivery</h1>
                            <div className=''>
                                <p className=' sm:text-xs'>For a memorable meal the quality of the service is {!card2 && <span>...</span>}{card2 && <span>something that guests often remember. Restaurant provides a physical good (prepared food), but also provides services in the form of ambience, the setting and clearing of the table, etc.</span>}
                                </p>
                            </div>
                            <button onClick={buttonClick} name='card2' className='text-blue-600 font-semibold sm:text-sm'>{card2? 'Show less' : 'Show more'} <FontAwesomeIcon className='text-green-500' icon={faArrowAltCircleRight}/></button>
                        </div>
                    </div>
                </div>
                

                {/* Card 3 part */}

                <div className='w-[30%] flex flex-col rounded-xl shadow-md transform hover:scale-105 duration-300 hover:drop-shadow-xl h-min bg-white sm:w-[47%] '>
                    <img src={image3} alt="" />

                    <div className='flex flex-row p-5 sm:flex-col sm:p-0 sm:px-2'>
                        <div className='text-center w-[20%] mt-4 sm:w-full sm:flex sm:justify-center'>
                            <img src={icon3} className='w-7' alt="icon1" />
                        </div>
                        <div className='w-[80%] mt-4 pr-5 flex flex-col flex-wrap items-start sm:mt-0 sm:pr-0 sm:w-full sm:py-2'>
                            <h1 className='font-bold sm:text-sm'>Fast Delivery</h1>
                            <div className=''>
                                <p className=' sm:text-xs'>For a memorable meal the quality of the service is {!card3 && <span>...</span>}{card3 && <span>something that guests often remember. Restaurant provides a physical good (prepared food), but also provides services in the form of ambience, the setting and clearing of the table, etc.</span>}
                                </p>
                            </div>
                            <button onClick={buttonClick} name='card3' className='text-blue-600 font-semibold sm:text-sm'>{card3? 'Show less' : 'Show more'} <FontAwesomeIcon className='text-green-500' icon={faArrowAltCircleRight}/></button>
                        </div>
                    </div>
                </div>

                {/* <div className='w-[30%] flex flex-col rounded-xl shadow-md transform hover:scale-105 duration-300 hover:drop-shadow-xl h-min bg-white sm:w-[45%] '>

                    <img src={image3} alt="" />

                    <div className='flex flex-row p-5'>
                        <div className='text-center w-[20%] mt-4'>
                            <img src={icon3} className='' alt="icon3" />
                        </div>
                        <div className='w-[80%] mt-4 pr-5 flex flex-col flex-wrap items-start'>
                            <h1 className='font-bold'>Fast Delivery</h1>
                            <div className=' '>
                                <p className=''>For a memorable meal the quality of the service is{!card3 && <span>...</span>} {card3 && <span>something that guests often remember. Restaurant provides a physical good (prepared food), but also provides services in the form of ambience, the setting and clearing of the table, etc.</span>}
                                </p>
                            </div>
                            <button onClick={buttonClick} name="card3" className='text-blue-600 font-semibold'>{card3? 'Show less' : 'Show more'} <FontAwesomeIcon className='text-green-500' icon={faArrowAltCircleRight}/></button>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Description1;