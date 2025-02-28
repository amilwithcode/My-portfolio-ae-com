"use client";


import ContactComponent from '@/ui/contact';

function Contact() {
  return (

    <main id='contact' className="flex flex-col text-black dark:bg-black dark:text-white  justify-center items-center   sm:px-10 ">
      <div className='max-w-screen w-full my-5'>
        <ContactComponent />
      </div>
    </main>


  )
}

export default Contact