import React from 'react'
import { useLocation } from 'react-router-dom'

const ProductDetail = () => {
    const { state } = useLocation()
    return (
        <div className='flex-row-center g-20'  style={{marginTop:"200px"}}>
            <div className=''>
                <img src={state?.thumbnail} />
            </div>
            <div className=''>

                <div><b>Title:</b>{" "}{state?.title}</div>
                <div><b>Rs. {state?.price}</b>{" "}</div>
                <div><b>Description:</b>{" "}{state?.description}</div>
                <div><b>Category:</b>{" "}{state?.category}</div>
            </div>
        </div>
    )
}

export default ProductDetail