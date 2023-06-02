import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchMovies } from '../utilites/Redux/action/movies';
import CardMovies from '../components/CardMovies';
import PaginationBtn from '../components/PaginationBtn';
function SearchMovie() {
    // define state query
    const [getQuery, setQuery] = useState("");
    const [page,setPage]=useState(1);
    console.log(getQuery);
    // define state loading
    const [isLoading, setIsLoading] = useState(false);
    // define global request
    const dispatch = useDispatch();
    const { dataSearch } = useSelector(features => features.dataMovies);
    useEffect(() => {
        if (getQuery !== "") {
            const waiting = setTimeout(() => {
                setIsLoading(true);
                dispatch(searchMovies(getQuery, setIsLoading,page))
            }, 400)
            return () => clearTimeout(waiting);
        }

    }, [getQuery,page,dispatch]);
    // onclick paginaton
    const handlerBtnPaginate = (e) => {
        if (e.target.className.includes("btn-pagination") && !e.target.className.includes("pagination-active")) {
            setIsLoading(true);
            setPage(e.target.dataset.id);
        }
    }
    return (
        <>
            <section className=" relative h-[40vh] w-full  overflow-hidden">
                <span className='absolute w-72 h-80  blur-[60px] bg-gradient-to-r from-[#200122] to-[#6f0000] rounded-full   inline-block top-[20%] animate-custom-slow-rotate -z-20 -translate-x-[30%] right-[50%]'></span>
                <div className='absolute top-0 right-0 w-full h-full bg-white/50 backdrop-blur-lg   -z-10'></div>
                <div className="py-8 grid grid-cols-1  h-full content-center px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-30">
                    <h1 className=" text-2xl  font-extrabold tracking-tight  text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Search Your Movie Here </h1>
                    <div className='flex justify-self-center mt-5 items-center px-4 py-2 h-10 border-2 border-black text-white  rounded-full max-w-2xl w-[80%] gap-x-4 focus-within:border-btnColor transition-all duration-300'>
                        <input type="text" className='w-[100%] focus:outline-none peer placeholder:text-white  placeholder:text-sm order-2  bg-transparent' placeholder='Search Movie Here' onChange={e => setQuery(e.target.value)} value={getQuery} />
                        <span className='order-1 bg-black p-1 rounded-full peer-focus-within:bg-btnColor'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
                            </svg>
                        </span>
                    </div>
                </div>
            </section>

            <section className={`bg-backgroundPage py-10 text-textColor inset-5 ${dataSearch !== null ? 'h-full' : 'h-[60vh]'}`}>
                <div className="container mx-auto px-2">
                    <div className="grid grid-cols-2 h-full md:grid-cols-3 lg:grid-cols-5 justify-items-center gap-y-4">
                        <h1 className='col-span-2 md:col-span-3 lg:col-span-5 capitalize font-bold text-xl my-4 md:text-3xl lg:text-4xl '>Movies For You</h1>
                        {!dataSearch && <div className='col-span-2 md:col-span-3 lg:col-span-5 h-full w-full flex justify-center items-center'><h1>Search Your Movies</h1></div>}
                        {isLoading && <div className='col-span-2 md:col-span-3 lg:col-span-5 h-full w-full flex justify-center items-center'><h1>Loading....</h1></div>}
                        {dataSearch && !isLoading &&
                            <CardMovies data={dataSearch?.data} />
                        }
                        <PaginationBtn data={dataSearch} active={dataSearch?.page} onClick={handlerBtnPaginate} />
                    </div>
                </div>
            </section>

        </>
    )
}

export default SearchMovie