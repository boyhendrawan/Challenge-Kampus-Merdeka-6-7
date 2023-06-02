import React from 'react'

function PaginationBtn(props) {
      // handle paginatin
    // determine start and end 
  const start = (props.data?.page > 5) ? props.data?.page - 5 : 1;
  const end = (props.data?.page + 5 === props.data?.totalPage) ? props.data?.totalPage : props.data?.page + 6;
    let pagination = [];
    for (let i = start; i < end; i++) {
        pagination.push(<button key={i} data-id={i} className={`  btn-pagination ${(props.active === i) ? "pagination-active" : ""}`}>
            {i}
        </button>)
    };
    return (
        <div onClick={props.onClick} className='col-span-2 md:col-span-3  lg:col-span-5  mt-5 flex justify-center gap-x-4 gap-y-2 flex-wrap'>
            {pagination}
        </div>
    )
}

export default PaginationBtn