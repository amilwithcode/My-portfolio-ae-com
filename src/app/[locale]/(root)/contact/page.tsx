"use client";


import ContactComponent from '@/src/ui/contact';

function Contact() {
  return (

    <main id='contact' className="flex flex-col text-black dark:bg-black dark:text-white  justify-center items-center   sm:px-10 ">
      <div className='max-w-7xl w-full my-5'>
        <ContactComponent />
      </div>
    </main>


  )
}

export default Contact