"use client";


import Login from '@/src/components/Login'

const LoginComponent = () => {

  return (


    <main id='login' className="flex flex-col text-black dark:bg-black dark:text-white  justify-center items-center   sm:px-10 ">

      <div className='max-w-7xl w-full my-5'>
        <Login />
      </div>
    </main>


  );
};

export default LoginComponent;
