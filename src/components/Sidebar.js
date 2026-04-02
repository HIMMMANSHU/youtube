import React from 'react';  
import { useSelector } from 'react-redux';

const Sidebar = () => {

    const isMenuOpen=useSelector((store)=> store.app.isMenuOpen)
    if(!isMenuOpen) return null
  return (
        <div className='p-5 shadow-lg w-48'>
            <h1 className='font-bold pt-4'>Home🏠</h1>
            <h1 className='font-bold pt-4'>Shorts 🎥</h1>
            <h1 className='font-bold pt-5'>Subscriptions👍</h1>
            <ul>
                <li>Subscriptions</li>
                <li>Originals</li>
                <li>YouTube Premium</li>
            </ul>
            <h1 className='font-bold pt-5'>You⬇️</h1>
            <ul>
                <li>YouTube Music</li>
                <li>YouTube Kids</li>
                <li>TV</li>
                <li>Gaming</li>     
            </ul>
           
        </div>
  );
};

export default Sidebar;