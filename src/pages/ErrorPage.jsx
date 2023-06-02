import React from 'react'

function ErrorPage() {
  return (
    <>
    
    <div className='flex w-full absolute h-full justify-center items-center overflow-hidden'>
      <span className='bg-animation fill-mode-forwards'></span>
    </div>
     <span className='w-10 h-10  bg-black absolute top-10'></span>
    <div className='absolute w-full h-full  bg-white/60 backdrop-blur-md '>
      <div className='container mx-auto h-full font-main z-20'>
        <div className='grid grid-cols-1 h-full justify-items-center  content-center px-4'>
            <h1 className='font-bold text-3xl text-slate-100'>404 page not Found</h1>
        </div>
      </div>
    </div>
  </>
  )
}

export default ErrorPage