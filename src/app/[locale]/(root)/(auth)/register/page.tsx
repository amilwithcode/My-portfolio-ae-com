"use client";

import React from 'react';
import Register from '@/src/components/Register'

const RegisterComponent = () => {

  return (


    <main id='register' className="flex flex-col text-black dark:bg-black dark:text-white  justify-center items-center   sm:px-10 ">

      <div className='max-w-7xl w-full my-5'>
        <Register />
      </div>
    </main>


  );
};

export default RegisterComponent;
