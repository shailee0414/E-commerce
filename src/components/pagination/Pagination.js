import React from 'react'
import "./Pagination.scss"

const Pagination = ({ onNext, onPrevious ,skip, total}) => {
    return (
        <div className='flex-row-end g-20 pagination-container'>
            <div onClick={()=>{onPrevious()}} className={`${skip <=8 ? "disable" :"pointer"} border p-10`}>Previous</div>
            <div onClick={()=>{onNext()}} className={`${skip >= total ? "disable":"pointer"} border p-10`}>Next</div>
        </div>
    )
}

export default Pagination