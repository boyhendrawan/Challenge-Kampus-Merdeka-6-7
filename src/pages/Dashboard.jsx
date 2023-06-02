import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../utilites/Redux/action/movies';
import PaginationPage from './Pagination';

import LoadingRequest from '../components/LoadingRequest';
import PaginationBtn from '../components/PaginationBtn';
import CardMovies from '../components/CardMovies';

function Dashboard() {
  // define global state
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const { data } = useSelector(features => features.dataMovies);

  useEffect(() => {
    dispatch(getMovies(setIsLoading));
  }, [dispatch]);

  // onclick paginaton
  const handlerBtnPaginate = (e) => {
    if (e.target.className.includes("btn-pagination") && !e.target.className.includes("pagination-active")) {
      setIsLoading(true);
      // new request
      dispatch(getMovies(setIsLoading, e.target.dataset.id));
    }
  }
  return (
    <>
      {isLoading && <LoadingRequest />}
      {
        !isLoading &&
        <>
          <PaginationPage data={data.data} limitation="5" />
          <section className='bg-backgroundPage py-10 text-textColor inset-5'>
            <div className="container mx-auto px-2">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center gap-y-4">
              <h1 className='col-span-2 md:col-span-3 lg:col-span-5 capitalize font-bold text-xl my-4 md:text-3xl lg:text-4xl '>Movies For You</h1>
                <CardMovies data={data?.data}/>
                <PaginationBtn data={data} active={data?.page} onClick={handlerBtnPaginate} />
              </div>
            </div>
          </section>
        </>
      }
    </>
  )
}

export default Dashboard