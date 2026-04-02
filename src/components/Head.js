import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appslice';

const Head = () => {
    const dispatch = useDispatch();
    const togglehandler = () => {
        dispatch(toggleMenu())
    }
  return (
    <div className='flex justify-between items-center p-2 m-2 shadow-lg rounded-lg'>
    <div className='flex'>
        <img 
        onClick={togglehandler} 
        alt="hamicon" className='w-10 m-2 h-10 cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQDHneB8IZzN-uo4dBhGFKFKmYaW8sEyXdEA&s" />
        <img alt="mainlogo" className='w-20 m-2 h-15 ml-2' src="https://static.vecteezy.com/system/resources/previews/007/635/374/non_2x/sunflower-logo-icon-design-template-free-vector.jpg" />
        
        </div>
        <div className='flex'>
            <input className="border border-gray-300 rounded-l-full p-2 w-96" type="text" placeholder='Search' />
            <button className="border border-gray-500 rounded-r-full p-2 bg-gray-200">🔍</button>
        </div>
        <div className='flex items-center'>
            <img alt="usericon" className='w-10' src="https://static.vecteezy.com/system/resources/previews/046/010/545/non_2x/user-icon-simple-design-free-vector.jpg" />
        </div>


      </div>
    
  );
};

export default Head;