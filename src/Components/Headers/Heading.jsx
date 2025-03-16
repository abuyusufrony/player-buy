import React, { useState } from 'react';
import logo from '../../assets/logo.png'

const Heading = ({ credit }) => {

    return (
        <div>
            <div className="nav-container flex  justify-between  items-center border-b-2 py-4  w-11/12 mx-auto ">
                <div><img src={logo} alt="" /></div>
                <div className='flex list-none text-gray-500  ' >

                    <li className=' ml-5'>Home </li>
                    <li className='ml-5' >Fixer</li>
                    <li className='ml-5'>Schudle</li>
                    <li className='ml-5 pr-8'>{credit} coin </li>

                </div>
            </div>

        </div>
    );
};

export default Heading;