import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import fakeData from '../../JSON/data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping,faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';


const FoodDetails = () => {


    const [itemNumber, setitemNumber] = useState(1);


    const {id,catagory} = useParams();
    const data = fakeData.filter((value) => value.id === id);
    const item = data[0];


    const relatedData = fakeData.filter((value) => value.catagory === catagory);

    const [items, setItem] = useState(0);
    const [enable, setEnable] = useState({
        right : true,
        left : false
    })

    const handleClick = (e) => {
        let number;
        if(e.target.innerText === '+'){
            number = itemNumber;
            setitemNumber(number+1);
        }
        if(e.target.innerText === '-'){
                number = itemNumber;

                if(number > 1){
                    setitemNumber(number-1);
                }
        }
    }


    function handleButtonClick (event){
        if(event === 'right'){
            if(items < relatedData.length-1){
                let value = items + 1;
                setItem(value++);
                
                (value === relatedData.length) ? setEnable({right : false,left : true}): setEnable({right : true,left : true})
            }
        }
        if(event === "left"){
            if(items > 0){
                let value = items - 1;
                setItem(value--);

                (value < 0) ? setEnable({right : true,left : false}): setEnable({right : true,left : true})
            }
        }
    }

    


    

    return (
        <div className='flex flex-row'>
            <div className='flex flex-col w-1/2 pl-28 '>
                <div className='flex  pb-5 pt-14 flex-col'>
                    <h1 className='text-3xl text-gray-800' style={{"fontFamily" : 'Bebas Neue'}} >{item.name}</h1>
                    <p className='pt-5 text-gray-500'>{item.details}</p>
                </div>
                <div className='flex  flex-row p-5 pl-0 items-center'>


                    <p className='text-2xl font-normal mr-4 text-gray-800 tracking-widest' style={{"fontFamily" : 'Bebas Neue'}} >${item.price}</p>

                    <div className='w-32 flex justify-evenly items-center border-solid border-2 border-red-500 px-1 pb-1 pt-[2px]  rounded-full ' >
                        <button type='submit' className='font-bold text-2xl' onClick={handleClick}>-</button>
                        <input className='outline-[#fc1010fd] w-10 font-semibold text-center' type="text" value={itemNumber} />
                        <button type='submit' className='font-bold text-2xl' onClick={handleClick}>+</button>
                    </div>
                </div>

                <div className='pt-5'>
                    <button className='px-8 py-2  bg-[#f83447] hover:ring-2 ring-red-300 text-white rounded-full text '><FontAwesomeIcon  icon={faCartShopping} size='sm'/> Add</button>
                </div>

                <div className='flex flex-row items-center w-full justify-center'>
                    <div >
                        <button onClick={() => handleButtonClick('left')} type='click' className='pl-3 py-3'><FontAwesomeIcon className={(enable.left) ? "text-[#f83447]" : "text-[#f8344841]" }size='xl' icon={faAngleLeft} /></button>
                    </div>
                    <div className='p-10'>
                        <Link to={`/${relatedData[items].catagory}/${relatedData[items].id}`}> <img className='w-36' src={relatedData[items].image} alt="" /></Link>
                    </div>
                    <div>
                        <button onClick={() => handleButtonClick('right')}  type='click' className='pr-3 py-3'><FontAwesomeIcon className={(enable.right) ? "text-[#f83447]" : "text-[#f8344841]" } size='xl' icon={faAngleRight} /></button>
                    </div>
                </div>

            </div>

            <div className='w-1/2 h-auto flex items-center justify-center px-6 pt-10 pb-20 '>
                <img className='w-[30rem]' src={item.image} alt="" />
            </div>
        </div>
    );
};

export default FoodDetails;