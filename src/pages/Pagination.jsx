import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function PaginationS({ data, limitation }) {
    const path = process.env.REACT_APP_IMG_ORIGINAL;
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            className='mySwiper swiper1 backdrop-blur'
        >

            {
                data.slice(0, limitation).map(e => {
                   return <SwiperSlide key={e.id}>
                        <div className='w-full h-full  bg-center bg-cover bg-gradient-to-b from-transparent  to-black' style={{ backgroundImage: `url(${path + e.backdrop_path})` }}>
                            <div className='w-full h-full bg-gradient-to-b from-transparent to-black'>
                                <div className='flex flex-col justify-center items-center pb-10 h-full text-white  '>
                                    <div className='text-center'>
                                        <h1 className='font-semibold text-xl md:text-2xl lg:text-3xl px-16'>{e.original_title}</h1>
                                        <div className='my-3 flex items-center gap-x-2 justify-center'>
                                            <div className='py-1 px-2 rounded-lg flex items-center gap-x-2 bg-backgroundPage'>
                                                <svg aria-hidden="true" className=" w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                <span className=' text-white rounded-lg font-semibold text-xs md:text-base lg:text-lg'>{e.vote_average}</span>
                                            </div>
                                            <div className='py-1 px-2 rounded-lg flex items-center gap-x-2 bg-white'>
                                                <span className=' text-backgroundPage rounded-lg font-semibold text-xs md:text-base lg:text-lg'>16 {(e.adult) ? '+' : '-'}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                })
            }
        </Swiper>
    )
}

export default PaginationS