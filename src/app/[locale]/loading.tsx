'use client'


function Loading(){
  return (
    <div className="flex flex-col items-center justify-center h-screen text-black dark:bg-black dark:text-white ">
      <div className="relative w-16 h-16 mb-5">
        <div className="absolute top-0 left-0 w-full h-full rounded-full bg-blue-500 opacity-60 animate-ping"></div>
        <div className="absolute top-0 left-0 w-full h-full rounded-full bg-blue-500 opacity-60 animate-ping delay-5000"></div>
      </div>
      <p className="mt-4 text-black dark:bg-black dark:text-slate-200  text-lg font-medium font-permanent">Loading, please wait...</p>
    </div>
  );
};

export default Loading;
