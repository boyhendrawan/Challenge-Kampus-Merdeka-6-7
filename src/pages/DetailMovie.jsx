import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { detailMovies as requestDetail } from '../utilites/Redux/action/movies';
import { Swiper, SwiperSlide } from 'swiper/react';
import LoadingRequest from '../components/LoadingRequest';

function DetailMovie() {
  // get params from urll
  const { idData } = useParams();
  // define loading when facthing
  const [isLoading, setLoading] = useState(true);

  // define get global function
  const distpach = useDispatch();
  const navigate = useNavigate();
  const { dataDetail } = useSelector(features => features.dataMovies);
  // get path picture
  const originalPath = process.env.REACT_APP_IMG_ORIGINAL;
  const path500 = process.env.REACT_APP_IMG_500;

  useEffect(() => {
    // request 
    distpach(requestDetail(idData, setLoading));
  }, [distpach, idData]);

  const spokenLanguage = dataDetail?.spoken_languages?.map((e, i) => {
    return <span id={i} className='px-2 py-1 bg-black/30 backdrop-blur-sm text-xs text-white rounded-full capitalize'>{e.name}</span>
  });
  const renderSupportBy = dataDetail?.production_companies.map((e, i) => {
    //handle data logo null 
    if (e?.logo_path) {
      return <SwiperSlide  key={e.id}>
        <img src={path500 + e.logo_path} alt="" width="100px" height="100px" />
      </SwiperSlide>
    }
    return false;
  });
  const generes =  dataDetail?.genres?.map((e, i) => {
    return <span id={i} className='px-2 py-1 bg-backgroundPage/40 backdrop-blur-sm text-xs text-white/60 rounded-full capitalize'>{e.name}</span>
  })
  return (
    <>
      {isLoading && <LoadingRequest/>}
      {!isLoading &&
        <section className='w-full h-[100vh] '>
          <div className='img-detail grid  grid-cols-1 content-between py-5 bg-cover bg-center rounded-b-lg border-none  shadow-inner' style={{ backgroundImage: `url(${originalPath + dataDetail?.backdrop_path})` }}>
            <button onClick={e=>navigate(-1)}  className='bg-white/25 shadow-lg z-50 hover:bg-red-500 transition-colors duration-300 cursor-pointer  w-9 h-9 mx-4 rounded-xl flex justify-center items-center p-2 text-white'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
            </svg>
            </button>
            <div className='grid grid-cols-[85%,15%] grid-wrap items-center text-white z-10 px-4 mb-6 '>
              <h1 className='col-span-2 font-bold text-lg mb-5 md:text-xl lg:text-3xl  '>{dataDetail?.title}</h1>
              <div className='genere flex flex-wrap gap-2 text-lg  md:text-xl lg:text-3xl'>
                {generes}
              </div>
              <div className='flex justify-center'>
                <div className='py-1 px-2 max-w-xs rounded-lg flex items-center gap-x-2 border-backgroundPage border-2'>
                  <svg aria-hidden="true" className=" w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <span className=' text-white rounded-lg font-semibold text-xs'>{Math.round(dataDetail?.vote_average)}</span>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full  bg-white z-30 rounded-t-3xl -mt-8 relative px-4 py-6'>
            <h1 className='text-center capitalize font-bold  md:text-xl lg:text-3xl '>About this Movie </h1>
            <p className='text-sm text-justify md:text-md lg:text-xl mt-2'>release : <span className='font-bold text-btnColor'>{dataDetail?.release_date}</span></p>
            <p className='text-sm text-justify md:text-md lg:text-lg mt-2 md:my-6'>{dataDetail?.overview}</p>
            <p className='text-center my-2'>Available Languages</p>
            <div className='genere flex flex-wrap justify-center gap-2 mt-2'>
              {spokenLanguage}
            </div>
            <p className='text-center mt-5'>Support By</p>
            <Swiper
              spaceBetween={50}
              slidesPerView={2}
              className='mx-4  mt-5 items-center'>
              {renderSupportBy}
            </Swiper>
          </div>
        </section>
      }
    </>
  )
}

export default DetailMovie